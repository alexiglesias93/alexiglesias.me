<script context="module" lang="ts">
  const CROSSFADE_KEY = 'writing-row-highlight';
</script>

<script lang="ts">
  import { format_date } from '$lib/utils/dates';
  import { send, receive } from '$lib/transitions/item-crossfade';

  export let highlighted: string | null;
  export let slug: string;
  export let title: string;
  export let date: string;

  const handle_mouse_enter = () => {
    highlighted = slug;
  };
</script>

<a href="/writing/{slug}" on:mouseenter={handle_mouse_enter} on:focus={handle_mouse_enter}>
  <span>{title}</span>
  <span class="date">{format_date(date)}</span>

  {#if highlighted === slug}
    <div class="highlight" in:send={{ key: CROSSFADE_KEY }} out:receive={{ key: CROSSFADE_KEY }} />
  {/if}
</a>

<style>
  a {
    display: flex;
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    grid-column-gap: 1rem;
    outline: none;
  }

  .date {
    flex: 0 0 auto;
    font-size: 0.75rem;
  }

  .highlight {
    position: absolute;
    opacity: 0;
    left: -1rem;
    top: 0rem;
    right: -1rem;
    bottom: 0rem;
    z-index: -1;
    border-radius: 0.5rem;
    background-color: var(--grey);
    transition: opacity 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  a:hover .highlight,
  a:focus .highlight {
    opacity: 1;
  }
</style>
