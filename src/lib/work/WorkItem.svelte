<script context="module" lang="ts">
  const CROSSFADE_KEY = 'work-row-highlight';
</script>

<script lang="ts">
  import { send, receive } from '$lib/transitions/item-crossfade';
  import type { WorkItemData } from './data';

  export let highlighted: string | null;
  export let item: WorkItemData;

  const handle_mouse_enter = () => {
    highlighted = item.id;
  };
</script>

<a
  href={item.href}
  class="wrapper"
  target="_blank"
  rel="noopener"
  on:mouseenter={handle_mouse_enter}
  on:focus={handle_mouse_enter}
>
  <div class="img-wrapper">
    <img src={item.image} loading="lazy" alt={item.title} />
  </div>

  <h3 class="mb-2">{item.title}</h3>

  <p class="mb-4">{item.description}</p>

  <div class="tags">
    {#each item.tags as tag (tag)}
      <div class="tag">{tag}</div>
    {/each}
  </div>

  {#if highlighted === item.id}
    <div class="highlight" in:send={{ key: CROSSFADE_KEY }} out:receive={{ key: CROSSFADE_KEY }} />
  {/if}
</a>

<style>
  .wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    outline: none;
    padding: 2rem 1rem;
  }

  .highlight {
    position: absolute;
    opacity: 0;
    left: 0rem;
    top: 1rem;
    right: 0rem;
    bottom: 1rem;
    z-index: -1;
    border-radius: 0.5rem;
    background-color: var(--grey);
    transition: opacity 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .wrapper:hover .highlight,
  .wrapper:focus .highlight {
    opacity: 1;
  }

  img {
    position: absolute;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }

  .img-wrapper {
    position: relative;
    margin-bottom: 1rem;
    padding-top: 75%;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.25rem;
  }

  .tag {
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
    background-color: var(--white-smoke-25);
    font-size: 0.75rem;
  }
</style>
