import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import mdsvexConfig from './mdsvex.config.js';
import { mdsvex } from 'mdsvex';

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
		prerender: {
			default: true
		}
	}
};

export default config;
