import type { Handle } from '@sveltejs/kit';
import { minify } from 'html-minifier';

import { prerendering } from '$app/environment';

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
  sortClassName: true
};

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  const { status, headers } = response;

  if (prerendering && headers.get('content-type') === 'text/html') {
    const markup = await response.text();
    const minified = minify(markup, minification_options);

    return new Response(minified, { status, headers });
  }

  return response;
};
