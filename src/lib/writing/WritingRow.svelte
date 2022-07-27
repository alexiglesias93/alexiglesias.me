<script lang="ts">
	import { getElementOffset } from '$lib/utils/helpers';
	import { createEventDispatcher } from 'svelte';

	/** Props */
	export let title: string;
	export let url: string;
	export let date: string;

	/** Variables */
	let wrapper: HTMLAnchorElement;

	/** Custom Events */
	const dispatch = createEventDispatcher<{
		mouseenter: { rowHeight: number; rowOffset: number };
		mouseleave: undefined;
	}>();

	/** Functions */
	/**
	 * Handles a mouseenter event of the row
	 */
	const handleMouseEnter = () => {
		dispatch('mouseenter', {
			rowHeight: wrapper.offsetHeight,
			rowOffset: getElementOffset(wrapper, 'top')
		});
	};

	/**
	 * Handles a mouseleave event of the row
	 */
	const handleMouseLeave = () => {
		dispatch('mouseleave');
	};
</script>

<a
	href={url}
	class="wrapper"
	bind:this={wrapper}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:focus={handleMouseEnter}
	on:blur={handleMouseLeave}
>
	<span>{title}</span>
	<span class="date">{date}</span>
</a>

<style lang="scss">
	.wrapper {
		display: flex;
		padding-top: 1rem;
		padding-bottom: 1rem;
		justify-content: space-between;
		align-items: center;
		outline: none;
	}

	.date {
		font-size: 0.75rem;
	}
</style>
