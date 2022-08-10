<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import WritingItem from './WritingItem.svelte';

	export let items: Omit<ComponentProps<WritingItem>, 'highlighted'>[] = [];

	let highlighted: string | null = null;
</script>

<div class="wrapper">
	{#each items as item}
		<WritingItem {...item} bind:highlighted />
	{/each}
</div>
