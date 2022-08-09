<script lang="ts">
	import { send, receive } from '$lib/transitions/item-crossfade';
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';

	const PIN_CROSSFADE_KEY = 'writing-filter-pin';

	interface Filter {
		label: string;
		active: boolean;
	}

	let filters: Filter[] = [
		{ label: 'Svelte', active: false },
		{ label: 'TypeScript', active: false },
		{ label: 'Webflow', active: false },
		{ label: 'All Writings', active: true }
	];

	let active_pin_timeout: NodeJS.Timeout;
	let hovering = false;

	$: active_filter = filters.find(({ active }) => active)!;
	$: active_pin = active_filter.label;

	const handle_filter_click = ({ label }: Filter) => {
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
</script>

<div class="wrapper">
	<h2>Writing</h2>

	<div class="filters">
		{#each filters as filter (filter.label)}
			{@const should_display = active_filter === filter || hovering}
			{@const has_active_pin = active_pin === filter.label}

			{#if should_display}
				<button
					class="filter"
					class:is-active={filter.active}
					transition:slide={{ duration: 200, easing: quartOut }}
					on:click={() => handle_filter_click(filter)}
					on:mouseenter={() => handle_filter_mouse_enter(filter)}
					on:focus={() => handle_filter_mouse_enter(filter)}
					on:mouseleave={handle_filter_mouse_leave}
					on:blur={handle_filter_mouse_leave}
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
