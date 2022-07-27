<script lang="ts">
	import WritingItem from './WritingItem.svelte';
	import { nanoid } from 'nanoid';
	import type { ComponentProps } from 'svelte';

	let highlighted: string | null = null;

	const items: Omit<ComponentProps<WritingItem>, 'highlighted'>[] = [
		{
			id: nanoid(),
			title: 'Gutting Webflow - Checkboxes',
			href: '/',
			date: 'July 01, 2022'
		},
		{
			id: nanoid(),
			title: "Hey ho, let's go!",
			href: '/',
			date: 'June 25, 2022'
		},
		{
			id: nanoid(),
			title: 'Gutting Webflow - Checkboxes',
			href: '/',
			date: 'July 01, 2022'
		},
		{
			id: nanoid(),
			title: "Hey ho, let's go!",
			href: '/',
			date: 'June 25, 2022'
		}
	];
</script>

<div class="wrapper">
	{#each items as item}
		<WritingItem {...item} bind:highlighted />
	{/each}
</div>
