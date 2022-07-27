<script context="module" lang="ts">
	import { getAllWork } from '$lib/utils/prismic';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const { results } = await getAllWork();
		return { props: { work: results } };
	};
</script>

<script lang="ts">
	import Metas from '$lib/components/Metas.svelte';
	import Writing from '$lib/components/writing/Writing.svelte';
	import HomeHero from '$lib/components/HomeHero.svelte';

	import type { Document } from '@prismicio/client/types/documents';
	import Work from '$lib/components/work/Work.svelte';

	export let work: Document[];
</script>

<div class="page-wrapper">
	<Metas
		title="Alex Iglesias"
		description="Developing cool s**t for the no-code community. CTO @ Finsweet."
	/>

	<HomeHero />

	<Work />

	<Writing />

	{JSON.stringify(work, null, '\t')}
</div>
