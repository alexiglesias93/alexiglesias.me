import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer()]
		},
		scss: {
			includePaths: ['src/styles', 'src/styles/mixins'],
			prependData: `@import 'breakpoints.scss';`
		}
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
