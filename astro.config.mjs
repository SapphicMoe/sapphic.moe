import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
  site: 'https://arciniega.one',
  trailingSlash: 'ignore',
  integrations: [image(), sitemap(), prefetch()]
});