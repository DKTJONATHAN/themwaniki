import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless'; // Add this import

export default defineConfig({
  integrations: [mdx()],
  output: 'server',
  adapter: vercel() // Add this line
});