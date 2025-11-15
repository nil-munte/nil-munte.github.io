import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import github from '@astrojs/github';

export default defineConfig({
site: 'https://nil-munte.github.io',
integrations: [tailwind()],
output: 'static',
adapter: github(),
});