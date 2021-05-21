<script lang="ts">
  import { getElementOffset } from '$lib/utils/helpers';
  import { createEventDispatcher } from 'svelte';

  /** Props */
  export let title: string;
  export let url: string;
  export let team: Array<{
    name: string;
    image: string;
  }> = [];

  /** Variables */
  let wrapper: HTMLAnchorElement;

  /** Custom Events */
  const dispatchMouseEnter = createEventDispatcher<{ mouseenter: { rowHeight: number; rowOffset: number } }>();
  const dispatchMouseLeave = createEventDispatcher<{ mouseleave: undefined }>();

  /** Functions */
  /**
   * Handles a mouseenter event of the row
   */
  const handleMouseEnter = () => {
    dispatchMouseEnter('mouseenter', { rowHeight: wrapper.offsetHeight, rowOffset: getElementOffset(wrapper, 'top') });
  };

  /**
   * Handles a mouseleave event of the row
   */
  const handleMouseLeave = () => {
    dispatchMouseLeave('mouseleave');
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
  <div class="team">
    {#each team as { name, image }}
      <img src={image} alt={name} class="avatar" loading="lazy" />
    {/each}
  </div>
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

  .team {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-column-gap: 0.5rem;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .avatar {
    width: 1.5rem;
    border-radius: 999px;
  }
</style>
