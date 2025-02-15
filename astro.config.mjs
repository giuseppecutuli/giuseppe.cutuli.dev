import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://giuseppe.cutuli.dev',
  integrations: [sitemap(), robotsTxt()],
  experimental: {
    svg: true,
  },
});