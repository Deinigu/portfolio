// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://deinigu.github.io",
  base: "/portfolio",
  integrations: [mdx(), sitemap(), react()],
  // Fetch pages before they're clicked: nav links on load (see HeaderLink),
  // every other link as soon as it's hovered.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  // In Chromium browsers, prefetches become full background prerenders
  // (Speculation Rules API), so clicking shows the page instantly.
  experimental: {
    clientPrerender: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      defaultColor: false,
      wrap: true,
      theme: "catppuccin-latte",
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-macchiato",
      },
    },
  },
});
