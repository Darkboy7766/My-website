import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://autogas-varna.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Позволява да пазим същите VITE_CONTACT_FORM_* имена на env променливите като в стария Vite проект.
    envPrefix: ['VITE_', 'PUBLIC_'],
  },
});
