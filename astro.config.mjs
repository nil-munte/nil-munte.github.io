import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
site: 'https://nil-munte.github.io',
integrations: [tailwind()],
});