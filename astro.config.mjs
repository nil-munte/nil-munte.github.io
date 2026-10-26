import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nil-munte.github.io",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/") && page !== "https://nil-munte.github.io/",
      i18n: { defaultLocale: "en", locales: { en: "en", ca: "ca" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
