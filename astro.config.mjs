import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
   // Aquí se configurarían otras opciones de Astro
   markdown: {
    drafts: true,
  },
  vite: {
    // Configuraciones de Vite si son necesarias
  },
  integrations: [tailwind(), react(), mdx(), sitemap(), partytown()]
});