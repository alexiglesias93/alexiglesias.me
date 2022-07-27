<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { nanoid } from 'nanoid';

	import WorkItem from './WorkItem.svelte';

	let highlighted: string | null = null;

	const items: Omit<ComponentProps<WorkItem>, 'highlighted'>[] = [
		{
			id: nanoid(),
			title: 'Finsweet Extension',
			description: 'A badass workflow toolkit for Webflow.',
			href: '/',
			image: 'images/finsweet-extension-placeholder.png',
			tags: ['svelte', 'extension', 'typescript', 'webflow']
		},
		{
			id: nanoid(),
			title: 'Finsweet Extension',
			description: 'A badass workflow toolkit for Webflow.',
			href: '/',
			image: 'images/finsweet-extension-placeholder.png',
			tags: ['svelte', 'extension', 'typescript', 'webflow']
		},
		{
			id: nanoid(),
			title: 'Finsweet Extension',
			description: 'A badass workflow toolkit for Webflow.',
			href: '/',
			image: 'images/finsweet-extension-placeholder.png',
			tags: ['svelte', 'extension', 'typescript', 'webflow']
		},
		{
			id: nanoid(),
			title: 'Finsweet Extension',
			description: 'A badass workflow toolkit for Webflow.',
			href: '/',
			image: 'images/finsweet-extension-placeholder.png',
			tags: ['svelte', 'extension', 'typescript', 'webflow']
		},
		{
			id: nanoid(),
			title: 'Finsweet Extension',
			description: 'A badass workflow toolkit for Webflow.',
			href: '/',
			image: 'images/finsweet-extension-placeholder.png',
			tags: ['svelte', 'extension', 'typescript', 'webflow']
		}
	];
</script>

<div class="wrapper">
	{#each items as item}
		<WorkItem {...item} bind:highlighted />
	{/each}
</div>

<style>
	.wrapper {
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 2rem;
		grid-row-gap: 4rem;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
	}

	@media screen and (max-width: 767px) {
		.wrapper {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.wrapper {
			grid-template-columns: 1fr;
		}
	}
</style>
