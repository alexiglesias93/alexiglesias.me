<script lang="ts">
  import WorkRow from './WorkRow.svelte';
  import { getElementOffset } from '$lib/utils/helpers';

  // Variables
  let wrapper: HTMLDivElement;
  let highlightProps = {
    top: 0,
    height: 56,
    opacity: 0,
  };

  const rows: WorkRow['$$prop_def'][] = [
    {
      title: 'Manitoba Blue Cross',
      url: '/',
      team: [
        { name: 'Alex Iglesias', image: 'images/alex-iglesias.jpg' },
        { name: 'Alex Dram', image: 'images/alex-dram.jpg' },
        { name: 'Finsweet', image: 'images/fs-webclip.png' },
      ],
    },
    {
      title: 'Manitoba Blue Cross',
      url: '/',
      team: [
        { name: 'Alex Iglesias', image: 'images/alex-iglesias.jpg' },
        { name: 'Alex Dram', image: 'images/alex-dram.jpg' },
        { name: 'Finsweet', image: 'images/fs-webclip.png' },
      ],
    },
    {
      title: 'Manitoba Blue Cross',
      url: '/',
      team: [
        { name: 'Alex Iglesias', image: 'images/alex-iglesias.jpg' },
        { name: 'Alex Dram', image: 'images/alex-dram.jpg' },
        { name: 'Finsweet', image: 'images/fs-webclip.png' },
      ],
    },
    {
      title: 'Manitoba Blue Cross',
      url: '/',
      team: [
        { name: 'Alex Iglesias', image: 'images/alex-iglesias.jpg' },
        { name: 'Alex Dram', image: 'images/alex-dram.jpg' },
        { name: 'Finsweet', image: 'images/fs-webclip.png' },
      ],
    },
  ];

  // Functions
  const handleRowHover = ({ detail: { rowHeight, rowOffset } }: WorkRow['$$events_def']['mouseover']) => {
    const wrapperOffset = getElementOffset(wrapper, 'top');

    highlightProps.top = rowOffset - wrapperOffset;
    highlightProps.height = rowHeight;
    highlightProps.opacity = 1;
  };
  const handleRowUnhover = () => {
    highlightProps.opacity = 0;
  };
</script>

<div class="wrapper" bind:this={wrapper}>
  {#each rows as row}
    <WorkRow {...row} on:mouseenter={handleRowHover} on:mouseleave={handleRowUnhover} />
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
    background-color: var(--gray);
    will-change: opacity, height, top;
    transition: opacity 200ms ease, height 200ms ease, top 200ms ease;
  }
</style>
