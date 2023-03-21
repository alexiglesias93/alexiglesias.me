import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';

import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  preprocess: [
    mdsvex(mdsvexConfig),
    vitePreprocess({
      postcss: {
        plugins: [autoprefixer()],
      },
    }),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
