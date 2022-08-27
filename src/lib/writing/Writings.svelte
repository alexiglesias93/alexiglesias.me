<script lang="ts">
  import type { ComponentProps } from 'svelte';

  import WritingList from './WritingList.svelte';
  import WritingListHeader from './WritingListHeader.svelte';

  export let items: ComponentProps<WritingList>['items'];
  export let tags: string[];
</script>

<section class="section page-padding">
  <div class="container">
    <WritingListHeader {tags} />
    <WritingList {items} />
  </div>
</section>
