import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://giuseppe.cutuli.dev',
  integrations: [lottie(), sitemap(), robotsTxt()]
});