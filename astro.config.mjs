import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Enable server-side rendering (SSR)
export default defineConfig({
  integrations: [mdx()],
  output: 'server' // This enables SSR for dynamic routes
});