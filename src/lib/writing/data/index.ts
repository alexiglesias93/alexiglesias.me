export type Author = (typeof AUTHORS)[keyof typeof AUTHORS];

export const AUTHORS = {
  alex: {
    name: 'Alex Iglesias',
    img: '/images/authors/alex.webp',
    twitter: 'alexiglesias_me',
  },
};

export interface WritingMetaData {
  title: string;
  subtitle: string;
  author: keyof typeof AUTHORS;
  date_published: string;
  date_modified: string;
  tags: string[];
}

interface WritingData {
  default: ConstructorOfATypedSvelteComponent;
  metadata: WritingMetaData;
}

interface FormattedWritingData {
  slug: string;
  module: WritingData;
}

const convert_path_to_slug = (path: string) => path.match(/\.\/(.*?)\/index\.md/)?.[1];

const glob_import = import.meta.glob<WritingData>('./**/*.md', { eager: true });

export const WRITINGS = Object.entries(glob_import).reduce<FormattedWritingData[]>(
  (acc, [path, module]) => {
    const slug = convert_path_to_slug(path);

    if (slug) acc.push({ module, slug });

    return acc;
  },
  []
);
