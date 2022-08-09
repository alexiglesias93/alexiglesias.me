<script context="module" lang="ts">
	const CROSSFADE_KEY = 'writing-row-highlight';
</script>

<script lang="ts">
	import { send, receive } from '$lib/transitions/item-crossfade';

	export let highlighted: string | null;
	export let slug: string;
	export let title: string;
	export let date: string;

	const handleMouseEnter = () => {
		highlighted = slug;
	};
</script>

<a
	href="/writing/{slug}"
	class="wrapper"
	on:mouseenter={handleMouseEnter}
	on:focus={handleMouseEnter}
>
	<span>{title}</span>
	<span class="date">{date}</span>

	{#if highlighted === slug}
		<div class="highlight" in:send={{ key: CROSSFADE_KEY }} out:receive={{ key: CROSSFADE_KEY }} />
	{/if}
</a>

<style>
	.wrapper {
		display: flex;
		position: relative;
		padding-top: 1rem;
		padding-bottom: 1rem;
		justify-content: space-between;
		align-items: center;
	}

	.date {
		font-size: 0.75rem;
	}

	.highlight {
		position: absolute;
		opacity: 0;
		left: -1rem;
		top: 0rem;
		right: -1rem;
		bottom: 0rem;
		z-index: -1;
		border-radius: 0.5rem;
		background-color: var(--grey);
		transition: opacity 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.wrapper:hover .highlight {
		opacity: 1;
	}
</style>
