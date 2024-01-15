import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://betest.github.io",
  base: "yohan-tobon-dev",
  integrations: [tailwind()]
});