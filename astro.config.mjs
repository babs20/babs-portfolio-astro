import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import AstroPWA from '@vite-pwa/astro';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bradyblair.dev',
  integrations: [tailwind(), sitemap(), AstroPWA({
    mode: 'production',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'Brady Blair Portfolio',
      short_name: 'Brady Blair Portfolio',
      theme_color: '#ffffff',
      icons: [{
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }, {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\//]
    },
    experimental: {
      directoryAndTrailingSlashHandler: true
    }
  }),
  partytown()
  ],
  output: "static",
  prefetch: {
    'prefetchAll': true,
  },
  build: {
    inlineStylesheets: 'always'
  },
});
