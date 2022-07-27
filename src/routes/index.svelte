<script context="module" lang="ts">
	import { getAllWork } from '$lib/utils/prismic';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async () => {
		const { results } = await getAllWork();
		return { props: { work: results } };
	};
</script>

<script lang="ts">
	import Metas from '$lib/Metas.svelte';
	import Work from '$lib/work/Work.svelte';
	import HomeHero from '$lib/HomeHero.svelte';

	import type { Document } from '@prismicio/client/types/documents';

	export let work: Document[];
</script>

<div class="page-wrapper">
	<Metas
		title="Alex Iglesias"
		description="Developing cool s**t for the no-code community. CTO @ Finsweet."
	/>

	<HomeHero />

	<Work />

	{JSON.stringify(work, null, '\t')}
</div>
