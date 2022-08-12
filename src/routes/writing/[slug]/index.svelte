<script lang="ts">
  import WritingHeader from '$lib/writing/WritingHeader.svelte';
  import { AUTHORS, WRITINGS } from '$lib/writing/data';
  import WritingBack from '$lib/writing/WritingBack.svelte';

  export let slug: string;

  const { module } = WRITINGS.find((writing) => writing.slug === slug)!;
  const {
    metadata: { author, date, subtitle, title }
  } = module;
  const author_data = AUTHORS[author];
</script>

<section class="section page-padding">
  <div class="container">
    <WritingHeader {title} {subtitle} {date} author={author_data} />

    <div class="rtb mb-16">
      <svelte:component this={module.default} />
    </div>

    <WritingBack />
  </div>
</section>
