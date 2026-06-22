// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: [""],
    },
  },

  integrations: [mdx()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      display: "block",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist",
      display: "block",
    },
  ],
});
