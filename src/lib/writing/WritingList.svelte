<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { flip } from 'svelte/animate';
  import { quartOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  import WritingItem from './WritingItem.svelte';
  import { active_writing_filter_tag } from './stores';

  type Item = Omit<ComponentProps<WritingItem>, 'highlighted'> & { tags: string[] };

  export let items: Item[];

  let highlighted: string | null = null;

  $: filtered_items = items.filter(
    ({ tags }) => !$active_writing_filter_tag || tags.includes($active_writing_filter_tag)
  );
</script>

<div class="wrapper">
  {#each filtered_items as item (item.slug)}
    <div
      animate:flip={{ duration: 200, easing: quartOut }}
      transition:fade={{ duration: 200, easing: quartOut }}
    >
      <WritingItem {...item} bind:highlighted />
    </div>
  {/each}
</div>
