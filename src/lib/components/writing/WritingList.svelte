<script lang="ts">
	import WritingItem from './WritingItem.svelte';
	import type { ComponentProps } from 'svelte';

	export let items: Omit<ComponentProps<WritingItem>, 'highlighted'>[] = [];

	let highlighted: string | null = null;
</script>

<div class="wrapper">
	{#each items as item}
		<WritingItem {...item} bind:highlighted />
	{/each}
</div>
