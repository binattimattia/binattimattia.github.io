// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Assicurati che sia esattamente così, tutto minuscolo e senza spazi 👇
  site: 'https://binattimattia.github.io',
  
  vite: {
    plugins: [tailwindcss()]
  }
});