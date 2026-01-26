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
    API_PROD_URL: "https://api.in-sourceit.com/api/admin",

    // Storage base URL (NO trailing slash logic needed in frontend)
    STORAGE_URL: "https://api.in-sourceit.com",
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

      // Production Laravel storage
      {
        protocol: "https",
        hostname: "api.in-sourceit.com",
        pathname: "/storage/**",
      },
    ],
  },

  devIndicators: {
    buildActivity: false,
  },
};

module.exports = nextConfig;
