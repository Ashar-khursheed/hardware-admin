// /** @type {import('next').NextConfig} */
// const nextConfig = {

//   reactStrictMode: false,
//   swcMinify: true,
//   env: {
//     // Change to your local backend URL (Laravel API)
//     // API_PROD_URL: "http://127.0.0.1:8000/api/admin",  // Local API URL
//     API_PROD_URL: "https://api.in-sourceit.com/api/admin",  // Production API URL

//     // Change to your local storage URL (same as API URL or wherever your assets are served)
//     storageURL: "https://api.in-sourceit.com",  // Local storage URL
//   },

//   redirects: async () => {
//     return [
//       {
//         source: "/",
//         destination: "/dashboard",
//         permanent: true,
//       },
//     ];
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//       },
//       {
//         protocol: "http",
//         hostname: "127.0.0.1:8000",
//       },

//       {
//         protocol: "https",
//         hostname: "api.in-sourceit.com",
//       },
//     ],
//   },
//   devIndicators: {
//     buildActivity: false,
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  env: {
    // Laravel API (Production)
    API_PROD_URL: "https://hardware.sparccpk.org/api/admin",

    // Storage base URL (NO trailing slash logic needed in frontend)
    STORAGE_URL: "https://hardware.sparccpk.org",
  },

  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      // Local development
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },

      // Production server — storage + frontend images
      {
        protocol: "https",
        hostname: "hardware.sparccpk.org",
        pathname: "/**",
      },

      // S3 — product images (old uploads stored in /products/ prefix)
      {
        protocol: "https",
        hostname: "hardware-website-images.s3.us-east-1.amazonaws.com",
        pathname: "/products/**",
      },
      // S3 — other assets (logos, favicons etc stored as /{id}/{filename})
      {
        protocol: "https",
        hostname: "hardware-website-images.s3.us-east-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },

  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
