import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://onbuuk.com',
  output: 'static',  // Static by default, pages with prerender=false will be server-rendered
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind(),
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
    inlineStylesheets: 'auto',
  },
});
