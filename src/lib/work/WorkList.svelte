<script lang="ts">
  import { WORK_ITEMS } from './data';

  import WorkItem from './WorkItem.svelte';

  let highlighted: string | null = null;
</script>

<div class="wrapper">
  {#each WORK_ITEMS as item}
    <WorkItem {item} bind:highlighted />
  {/each}
</div>

<style>
  .wrapper {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    margin: -2rem -1rem;
  }

  @media screen and (max-width: 767px) {
    .wrapper {
      display: flex;
      overflow: auto;
      scroll-snap-type: x mandatory;
    }
  }
</style>
