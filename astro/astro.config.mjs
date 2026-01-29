import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://buuk.app',
  output: 'static',
  integrations: [],
  vite: {
    ssr: {
      external: ['path']
    }
  }
});
