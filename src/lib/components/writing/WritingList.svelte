<script lang="ts">
	import WritingRow from './WritingRow.svelte';
	import { nanoid } from 'nanoid';
	import type { ComponentProps } from 'svelte';

	let highlighted: string | null = null;

	const rows: Omit<ComponentProps<WritingRow>, 'highlighted'>[] = [
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
	{#each rows as row}
		<WritingRow {...row} bind:highlighted />
	{/each}
</div>
