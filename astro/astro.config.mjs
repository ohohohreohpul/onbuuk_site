import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://buuk.app',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    ssr: {
      external: ['path']
    }
  },
  build: {
    // Optimize for production
    inlineStylesheets: 'auto',
  },
});
