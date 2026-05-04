import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teddy-abera.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
