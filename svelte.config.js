import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    postcss: {
      plugins: [autoprefixer()],
    },
    scss: {
      includePaths: ['src/styles', 'src/styles/mixins'],
      prependData: `@import 'breakpoints.scss';`,
    },
  }),

  kit: {
    target: '#svelte',
    vite: {
      resolve: {
        alias: { $transitions: path.resolve('src/transitions/') },
      },
    },
  },
};

export default config;
