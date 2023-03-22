import type { Handle } from '@sveltejs/kit';
import { minify } from 'html-minifier';

import { building } from '$app/environment';

const minification_options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: false,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
};

export const handle: Handle = async ({ event, resolve }) => {
  let page = '';

  return resolve(event, {
    /**
     * Minify HTML.
     */
    transformPageChunk: ({ html, done }) => {
      page += html;

      if (done) {
        return building ? minify(page, minification_options) : page;
      }
    },

    /**
     * Preload fonts.
     */
    preload: ({ type, path }) => type === 'font' && path.includes('.woff2'),
  });
};
