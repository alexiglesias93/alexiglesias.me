<script lang="ts">
  import type { ComponentProps } from 'svelte';

  import WritingList from './WritingList.svelte';
  import WritingListHeader from './WritingListHeader.svelte';
  import { WRITINGS } from './data';

  const tags_set: Set<string> = new Set();
  const items: ComponentProps<WritingList>['items'] = WRITINGS.map(
    ({
      slug,
      module: {
        metadata: { date, title, tags }
      }
    }) => {
      for (const tag of tags) tags_set.add(tag);

      return {
        title,
        date,
        slug,
        tags
      };
    }
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const tags = [...tags_set].sort((a, b) => a.localeCompare(b));
</script>

<section class="section page-padding">
  <div class="container">
    <WritingListHeader {tags} />
    <WritingList {items} />
  </div>
</section>
