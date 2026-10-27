import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [mdx()],
  adapter: cloudflare(),
  env: {
    schema: {
      // Read at runtime from the Worker secret, not inlined at build time
      RESEND_API_KEY: envField.string({ context: "server", access: "secret", optional: true }),
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
