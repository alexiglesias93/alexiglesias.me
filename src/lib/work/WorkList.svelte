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
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  @media screen and (max-width: 767px) {
    .wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 479px) {
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
</style>
