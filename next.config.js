const withPlugins = require("next-compose-plugins");
const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
module.exports = withPlugins(
  [withMDX, withNextIntl], // Next plugins here
  // Then the main NextJS config object
  {
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: [
        "avatars.githubusercontent.com",
        "external-content.duckduckgo.com",
      ],
    },
    // Enable source maps in production
    productionBrowserSourceMaps: true,
    async headers() {
      return [
        {
          // matching all API routes
          source: "/api/user/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,DELETE,PATCH,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
    // Everything related to webpack - not mandatory
    webpack(config) {
      return config;
    },
  }
);
