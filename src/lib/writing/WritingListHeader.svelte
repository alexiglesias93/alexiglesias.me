<script lang="ts">
	import { tick } from 'svelte';
	import { quartOut } from 'svelte/easing';
	import { send, receive } from '$lib/transitions/item-crossfade';
	import { falide } from '$lib/transitions/falide';
	import { active_writing_filter_tag } from './stores';

	const PIN_CROSSFADE_KEY = 'writing-filter-pin';

	export let tags: string[];

	interface Filter {
		label: string;
		tag: string | null;
		active: boolean;
		element?: HTMLElement;
	}

	let filters: Filter[] = [
		...tags.map((tag) => ({ tag, label: tag, active: false })),
		{ tag: null, label: 'All Writings', active: true }
	];

	let active_pin_timeout: NodeJS.Timeout;
	let hovering = false;

	$: active_filter = filters.find(({ active }) => active)!;
	$: active_pin = active_filter.label;
	$: $active_writing_filter_tag = active_filter.tag;

	const handle_filter_click = (filter: Filter) => {
		const { label } = filter;

		hovering = true;

		filters = filters.map((filter) => {
			filter.active = filter.label === label;
			return filter;
		});
	};

	const handle_filter_mouse_enter = ({ label }: Filter) => {
		hovering = true;
		clearTimeout(active_pin_timeout);
		active_pin = label;
	};

	const handle_filter_mouse_leave = () => {
		active_pin_timeout = setTimeout(() => {
			active_pin = active_filter.label;
			hovering = false;
		}, 100);
	};

	const handle_filter_keydown = async (e: KeyboardEvent, { label }: Filter) => {
		const is_esc = e.key === 'Escape';
		const is_arrow_up = e.key === 'ArrowUp';
		const is_arrow_down = e.key === 'ArrowDown';
		if (!is_esc && !is_arrow_up && !is_arrow_down) return;

		e.preventDefault();

		if (is_esc) {
			active_filter.element?.focus();
			handle_filter_mouse_leave();
			return;
		}

		hovering = true;

		const index = filters.findIndex((filter) => filter.label === label);
		const next_index = is_arrow_up
			? Math.max(index - 1, 0)
			: Math.min(index + 1, filters.length - 1);

		const next_filter = filters[next_index];

		tick().then(() => next_filter.element?.focus());
	};
</script>

<div class="wrapper">
	<h2>Writing</h2>

	<div class="filters">
		{#each filters as filter (filter.label)}
			{@const should_display = active_filter === filter || hovering}
			{@const has_active_pin = active_pin === filter.label}
			{@const tabindex = has_active_pin ? 0 : -1}

			{#if should_display}
				<button
					class="filter"
					class:is-active={filter.active}
					{tabindex}
					bind:this={filter.element}
					transition:falide|local={{ easing: quartOut }}
					on:click={() => handle_filter_click(filter)}
					on:mouseenter={() => handle_filter_mouse_enter(filter)}
					on:focus={() => handle_filter_mouse_enter(filter)}
					on:mouseleave={handle_filter_mouse_leave}
					on:blur={handle_filter_mouse_leave}
					on:keydown={(e) => handle_filter_keydown(e, filter)}
				>
					{#if has_active_pin}
						<span
							aria-hidden="true"
							class="filter-pin"
							in:send|local={{ key: PIN_CROSSFADE_KEY }}
							out:receive|local={{ key: PIN_CROSSFADE_KEY }}
						/>
					{/if}

					<span>
						{filter.label}
					</span>
				</button>
			{/if}
		{/each}
	</div>
</div>

<style>
	.wrapper {
		position: relative;
		margin-bottom: 2rem;
	}

	.filters {
		position: absolute;
		left: auto;
		top: auto;
		right: 0%;
		bottom: 0%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		text-align: right;
	}

	.filter {
		display: flex;
		position: relative;
		transition: color 200ms ease;
		padding: 0.25rem 0rem 0.25rem 0rem;
		justify-content: flex-end;
		align-items: center;
		grid-column-gap: 0.5rem;
		background-color: unset;
		color: var(--white);
	}

	.filter.is-active {
		color: var(--golden);
	}

	.filter-pin {
		width: 0.25rem;
		height: 0.25rem;
		border-radius: 999px;
		background-color: var(--golden);
		transform: translateX(50%);
	}
</style>
