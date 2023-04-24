import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import compress from "astro-compress";
const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = 'https://portfolio.tpcoder.dev';
const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('astro build');
let BASE_URL = LOCALHOST_URL;
if (isBuild) {
  BASE_URL = LIVE_URL;
}


// https://astro.build/config
export default defineConfig({
  server: {
    port: SERVER_PORT
  },
  site: BASE_URL,
  integrations: [mdx(), sitemap(), solidJs(), tailwind(), compress()]
});