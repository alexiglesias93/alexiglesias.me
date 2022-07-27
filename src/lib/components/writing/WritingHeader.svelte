<script lang="ts">
	import { send, receive } from '$lib/transitions/item-crossfade';

	const PIN_CROSSFADE_KEY = 'writing-filter-pin';

	interface Filter {
		label: string;
		active: boolean;
	}

	let filters: Filter[] = [
		{ label: 'Websites', active: false },
		{ label: 'Products', active: false },
		{ label: 'All', active: true }
	];

	let activePinTimeout: NodeJS.Timeout;
	$: activePin = filters.find(({ active }) => active)?.label;

	const handleFilterClick = ({ label }: Filter) => {
		filters = filters.map((filter) => {
			filter.active = filter.label === label;
			return filter;
		});
	};

	const handleFilterMouseEnter = ({ label }: Filter) => {
		clearTimeout(activePinTimeout);
		activePin = label;
	};

	const handleFilterMouseLeave = () => {
		activePinTimeout = setTimeout(() => {
			activePin = filters.find(({ active }) => active)?.label;
		}, 200);
	};
</script>

<div class="wrapper">
	<h2>Writing</h2>

	<div class="filters">
		{#each filters as filter (filter.label)}
			<button
				class="filter"
				class:is-active={filter.active}
				on:click={() => handleFilterClick(filter)}
				on:mouseenter={() => handleFilterMouseEnter(filter)}
				on:focus={() => handleFilterMouseEnter(filter)}
				on:mouseleave={handleFilterMouseLeave}
				on:blur={handleFilterMouseLeave}
			>
				<span>
					{filter.label}
				</span>

				{#if activePin === filter.label}
					<span
						aria-hidden="true"
						class="filter-pin"
						in:send={{ key: PIN_CROSSFADE_KEY }}
						out:receive={{ key: PIN_CROSSFADE_KEY }}
					/>
				{/if}
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		margin-bottom: 2rem;
		justify-content: space-between;
		align-items: center;
	}

	.filters {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.filter {
		display: block;
		position: relative;
		color: var(--white);
		transition: color 200ms ease;
		padding: 0.25rem 0.5rem 0.25rem 0.5rem;
		background-color: unset;

		&.is-active {
			color: var(--golden);
		}
	}

	.filter-pin {
		position: absolute;
		top: -0.25rem;
		left: 50%;
		width: 0.25rem;
		height: 0.25rem;
		border-radius: 999px;
		background-color: var(--golden);
		transform: translateX(50%);
	}
</style>
