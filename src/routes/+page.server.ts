import type { ComponentProps } from 'svelte';

import { dev } from '$app/environment';
import { WRITINGS } from '$lib/writing/data';
import type Writings from '$lib/writing/Writings.svelte';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const tags_set: Set<string> = new Set();

  const writing_items = WRITINGS.reduce<ComponentProps<Writings>['items']>(
    (
      acc,
      {
        slug,
        module: {
          metadata: { date_published, date_modified, title, tags },
        },
      }
    ) => {
      if (!dev && !date_published) return acc;

      for (const tag of tags) tags_set.add(tag);

      acc.push({
        title,
        date: date_modified,
        slug,
        tags,
      });

      return acc;
    },
    []
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const tags: ComponentProps<Writings>['tags'] = [...tags_set].sort((a, b) => a.localeCompare(b));

  return {
    writing_items,
    tags,
  };
};
