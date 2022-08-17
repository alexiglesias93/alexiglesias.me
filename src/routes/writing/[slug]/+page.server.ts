import { error } from '@sveltejs/kit';

import { WRITINGS } from '$lib/writing/data';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const valid_slug = WRITINGS.some(({ slug }) => slug === params.slug);

  if (!valid_slug) throw error(404, 'Not found');

  return params;
};
