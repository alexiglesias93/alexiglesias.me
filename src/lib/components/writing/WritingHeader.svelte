<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import WritingAuthor from './WritingAuthor.svelte';

	export let title: string;
	export let subtitle: string;
	export let date: string;
	export let author: ComponentProps<WritingAuthor>['author'];
</script>

<div class="wrapper">
	<h1 class="mb-12">{title}</h1>

	<p class="text-lg mb-16">
		{subtitle}
	</p>

	<div class="meta">
		<WritingAuthor {author} />
		<p class="date">Last Updated:<br />{date}</p>
	</div>
</div>

<style>
	.wrapper {
		margin-bottom: 8rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		grid-column-gap: 2rem;
		grid-row-gap: 1rem;
	}

	.date {
		font-size: 0.75rem;
	}
</style>
