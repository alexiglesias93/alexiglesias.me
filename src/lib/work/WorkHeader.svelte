<script lang="ts">
  import { getElementOffset } from '$lib/utils/helpers';
  import { onMount } from 'svelte';

  /** Types */
  type FilterElement = HTMLButtonElement;

  /** Variables */
  let filtersWrapper: HTMLDivElement;
  let filtersPin: HTMLDivElement;

  let restorePinPositionTimeout: NodeJS.Timeout;
  let filterPinProps = {
    opacity: 0,
    left: 0,
  };

  let filters: { element: FilterElement; label: string; active: boolean }[] = [
    { element: undefined, label: 'Websites', active: false },
    { element: undefined, label: 'Products', active: false },
    { element: undefined, label: 'All', active: true },
  ];

  /** Functions */
  /**
   * Handles click events on the filter buttons
   * @param clickedFilterIndex The index of the clicked button
   */
  const handleFilterClick = (clickedFilterIndex: number) => {
    filters = filters.map((filter, index) => {
      filter.active = index === clickedFilterIndex;
      return filter;
    });
  };

  /**
   * Sets the pin's opacity to 1. Intended to run once after the pin has correctly positioned after onMount.
   * @param event The transition event
   */
  const handlePinTransitionEnd = ({ propertyName }: TransitionEvent) => {
    if (propertyName === 'left') filterPinProps.opacity = 1;
  };

  /**
   * Aligns the pin on top of the target filter
   * @param target The target filter
   */
  const setPinLeftPosition = (target: FilterElement) => {
    const wrapperOffset = getElementOffset(filtersWrapper, 'left');
    const filterOffset = getElementOffset(target, 'left');
    const filterWidth = target.offsetWidth;

    filterPinProps.left = filterOffset + filterWidth / 2 - wrapperOffset;
  };

  /**
   * Aligns the pin on top of the active filter
   */
  const restorePinLeftPosition = () => {
    const { element } = filters.find(({ active }) => active);
    setPinLeftPosition(element);
  };

  /**
   * Moves the pin on top of the hovered filter
   * @param event Mouse enter event
   */
  const handleFilterMouseEnter = ({ currentTarget }: Event) => {
    clearTimeout(restorePinPositionTimeout);
    setPinLeftPosition(currentTarget as FilterElement);
  };

  /**
   * Restores the pin position after a specified timeout
   */
  const handleFilterMouseLeave = () => {
    restorePinPositionTimeout = setTimeout(restorePinLeftPosition, 200);
  };

  /** Lifecycle */
  /**
   * On Mount
   */
  onMount(restorePinLeftPosition);
</script>

<div class="wrapper">
  <h2 class="m-0">Work</h2>
  <div class="filters" bind:this={filtersWrapper}>
    {#each filters as { label, active, element }, index}
      <button
        class="filter"
        class:active
        bind:this={element}
        on:click={() => handleFilterClick(index)}
        on:mouseenter={handleFilterMouseEnter}
        on:mouseleave={handleFilterMouseLeave}
        on:focus={handleFilterMouseEnter}
        on:blur={handleFilterMouseLeave}>{label}</button
      >
    {/each}

    <div
      class="filters-pin"
      style="opacity: {filterPinProps.opacity}; left: {filterPinProps.left}px;"
      bind:this={filtersPin}
      on:transitionend|once={handlePinTransitionEnd}
    />
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
    color: var(--white);
    transition: color 200ms ease;
    padding: 0.25rem 0.5rem 0.25rem 0.5rem;
    background-color: unset;

    &.active {
      color: var(--golden);
    }
  }

  .filters-pin {
    position: absolute;
    top: -0.25rem;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 999px;
    background-color: var(--golden);
    transform: translate(-50%, -100%);
    transition: opacity 200ms ease, left 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
</style>
