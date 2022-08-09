import type { SvelteComponent } from 'svelte';
import type { AUTHORS } from '../authors';

interface WritingData {
	default: SvelteComponent;
	metadata: {
		title: string;
		subtitle: string;
		author: keyof typeof AUTHORS;
		date: string;
	};
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const convert_path_to_slug = (path: string) => path.match(/(?<=.\/)(.*)(?=.md)/g)![0];

const glob_import = import.meta.glob<WritingData>('./*.md', { eager: true });
export const WRITINGS = Object.entries(glob_import).map(([path, module]) => {
	return {
		module,
		slug: convert_path_to_slug(path)
	};
});
