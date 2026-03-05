import TanstackWrapper from "@/Layout/TanstackWrapper";
import { dir } from "i18next";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import "../../public/assets/scss/app.scss";
import { I18nProvider } from "./i18n/i18n-context";
import { detectLanguage } from "./i18n/server";
import LanguageProvider from "@/Helper/LanguageContext/LanguageProvider";

export async function generateMetadata() {
  let settingData = null;
  try {
    const res = await fetch(`${process.env.API_PROD_URL}/settings`, {
      next: { revalidate: 300 }, // cache response server-side for 5 minutes
    });
    const contentType = res.headers.get("content-type") || "";
    if (res.ok && contentType.includes("application/json")) {
      settingData = await res.json();
    }
  } catch (err) {
    console.error("Settings fetch error:", err);
  }


  // Rewrite localhost URLs to production storage URL (server-side equivalent of sanitizeUrl)
  const rewriteUrl = (url) => {
    if (!url || typeof url !== "string") return url;
    const storageUrl = process.env.STORAGE_URL || "";
    if (storageUrl) {
      return url.replace(/https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?/g, storageUrl);
    }
    return url;
  };

  return {
    metadataBase: new URL(process.env.API_PROD_URL),
    title: settingData?.values?.general?.site_title,
    description: settingData?.values?.general?.site_tagline,
    icons: {
      icon: rewriteUrl(settingData?.values?.general?.favicon_image?.original_url),
    },
  };
}

export default async function RootLayout({ children }) {
  const lng = await detectLanguage();

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body suppressHydrationWarning={true}>
        <I18nProvider language={lng}>
          <LanguageProvider initialLanguage={lng}>
            <TanstackWrapper>{children}</TanstackWrapper>
            <ToastContainer position="top-center" />
            <NextTopLoader showSpinner={false} />
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
