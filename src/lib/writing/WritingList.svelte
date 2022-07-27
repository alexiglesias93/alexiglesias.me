<script lang="ts">
	import WritingRow from './WritingRow.svelte';
	import { getElementOffset } from '$lib/utils/helpers';

	/** Variables */
	let wrapper: HTMLDivElement;
	let highlightProps = {
		top: 0,
		height: 56,
		opacity: 0
	};

	const rows: WritingRow['$$prop_def'][] = [
		{
			title: 'Gutting Webflow - Checkboxes',
			url: '/',
			date: 'July 01, 2022'
		},
		{
			title: "Hey ho, let's go!",
			url: '/',
			date: 'June 25, 2022'
		},
		{
			title: 'Gutting Webflow - Checkboxes',
			url: '/',
			date: 'July 01, 2022'
		},
		{
			title: "Hey ho, let's go!",
			url: '/',
			date: 'June 25, 2022'
		}
	];

	/** Functions */
	/**
	 * Handles the mouseenter event on a WorkRow.
	 * @param event The custom event object
	 */
	const handleRowHover = ({
		detail: { rowHeight, rowOffset }
	}: WritingRow['$$events_def']['mouseenter']) => {
		const wrapperOffset = getElementOffset(wrapper, 'top');

		highlightProps.top = rowOffset - wrapperOffset;
		highlightProps.height = rowHeight;
		highlightProps.opacity = 1;
	};

	/**
	 * Handles the mouseleave event on a WorkRow.
	 */
	const handleRowUnhover = () => {
		highlightProps.opacity = 0;
	};
</script>

<div class="wrapper" bind:this={wrapper}>
	{#each rows as row}
		<WritingRow {...row} on:mouseenter={handleRowHover} on:mouseleave={handleRowUnhover} />
	{/each}

	<div
		class="highlight"
		style="top: {highlightProps.top}px; height: {highlightProps.height}px; opacity: {highlightProps.opacity};"
	/>
</div>

<style lang="scss">
	.wrapper {
		position: relative;
	}

	.highlight {
		position: absolute;
		right: -1rem;
		left: -1rem;
		z-index: -1;
		border-radius: 0.5rem;
		background-color: var(--grey);
		will-change: opacity, height, top;
		transition: opacity 200ms ease, height 200ms ease, top 200ms ease;
	}
</style>
