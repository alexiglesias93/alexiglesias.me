import type { SvelteComponent } from 'svelte';

export type Author = typeof AUTHORS[keyof typeof AUTHORS];

export const AUTHORS = {
  alex: {
    name: 'Alex Iglesias',
    img: '/images/authors/alex.jpg',
    twitter: 'alexiglesias_me'
  }
};

export interface WritingMetaData {
  title: string;
  subtitle: string;
  author: keyof typeof AUTHORS;
  date: string;
  tags: string[];
}

interface WritingData {
  default: SvelteComponent;
  metadata: WritingMetaData;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const convert_path_to_slug = (path: string) => path.match(/(?<=.\/)(.*)(?=\/index.md)/g)![0];

const glob_import = import.meta.glob<WritingData>('./**/*.md', { eager: true });
export const WRITINGS = Object.entries(glob_import).map(([path, module]) => {
  return {
    module,
    slug: convert_path_to_slug(path)
  };
});
