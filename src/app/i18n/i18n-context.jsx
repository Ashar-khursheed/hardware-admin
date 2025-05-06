"use client";

import React, { useEffect, useState, useMemo } from "react";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { I18nextProvider as Provider, initReactI18next } from "react-i18next";

import { getOptions } from "./settings";
import request from "@/Utils/AxiosUtils";
import Loader from "@/Components/CommonComponent/Loader";

const loadResources = async (language, namespace) => {
  try {
    const response = await request({ url: `${process.env.API_PROD_URL}/translation/admin` }, false);
    return response.data;
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((language, namespace) => loadResources(language, namespace)))
  .init({
    ...getOptions(),
    detection: {
      caches: ["cookie"],
    },
    debug: false, // Debugging flag
    interpolation: {
      escapeValue: false,
    },
  });

export function I18nProvider({ children, language }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Fetch translations explicitly to ensure success before rendering children
        await loadResources(language, "admin");
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load translations");
        setIsLoaded(false);
      }
    };

    loadTranslations();
  }, [language]);

  useMemo(() => {
    if (i18next.language !== language) {
      i18next.changeLanguage(language);
    }
  }, [language]);

  if (!isLoaded) {
    return ( 
      <div className='loader-wrapper-main'>
        <div>
          <div className="loader-main" />
        </div>
      </div>
    );
  }

  return <Provider i18n={i18next}>{children}</Provider>;
}
