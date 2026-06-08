// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Aggiungi questa riga qui sotto 👇
  site: 'binattimattia.github.io',
  
  vite: {
    plugins: [tailwindcss()]
  }
});