import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { getNonCanonicalModelPaths } from './src/utils/carModelGroups.js';

const carBrandsPath = fileURLToPath(new URL('./public/data/carBrands.json', import.meta.url));
const carBrands = JSON.parse(fs.readFileSync(carBrandsPath, 'utf-8'));
// Дублиращи model-страници (повторни монтажи на един и същ автомобил) излизат
// с noindex в HTML-а им (виж [modelId]/index.astro) — тук просто не ги слагаме
// и в sitemap-а, за да не подканяме Google да ги обхожда изобщо.
const noIndexModelPaths = new Set(getNonCanonicalModelPaths(carBrands));

export default defineConfig({
  site: 'https://autogas-varna.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !noIndexModelPaths.has(new URL(page).pathname),
    }),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Позволява да пазим същите VITE_CONTACT_FORM_* имена на env променливите като в стария Vite проект.
    envPrefix: ['VITE_', 'PUBLIC_'],
  },
});
