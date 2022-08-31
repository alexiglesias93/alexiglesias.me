import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';

import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],

  preprocess: [
    mdsvex(mdsvexConfig),
    preprocess({
      postcss: {
        plugins: [autoprefixer()]
      }
    })
  ],

  kit: {
    adapter: adapter(),
    trailingSlash: 'always'
  }
};

export default config;
