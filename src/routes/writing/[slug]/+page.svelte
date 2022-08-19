<script lang="ts">
  import type { PageData } from './$types';

  import { format_iso_date } from '$lib/utils/dates';
  import { WEBSITE_ORIGIN } from '$lib/utils/constants';
  import { AUTHORS, WRITINGS } from '$lib/writing/data';
  import WritingHeader from '$lib/writing/WritingHeader.svelte';
  import WritingBack from '$lib/writing/WritingBack.svelte';
  import Metas from '$lib/components/Metas.svelte';
  import Schema from '$lib/components/Schema.svelte';

  export let data: PageData;

  const { module } = WRITINGS.find((writing) => writing.slug === data.slug)!;
  const {
    metadata: { author, date_published, date_modified, subtitle, title }
  } = module;
  const author_data = AUTHORS[author];
</script>

<Metas {title} description={subtitle} />

<Schema
  schema={{
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${WEBSITE_ORIGIN}/writing/${data.slug}`
    },
    headline: title,
    description: subtitle,
    image: `${WEBSITE_ORIGIN}/images/authors/alex.webp`,
    author: {
      '@type': 'Person',
      name: author_data.img,
      url: WEBSITE_ORIGIN
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alex Iglesias',
      logo: {
        '@type': 'ImageObject',
        url: `${WEBSITE_ORIGIN}/images/authors/alex.webp`
      }
    },
    datePublished: format_iso_date(date_published),
    dateModified: format_iso_date(date_modified)
  }}
/>

<section class="section page-padding">
  <div class="container">
    <WritingHeader {title} {subtitle} date={date_modified} author={author_data} />

    <div class="rtb mb-16">
      <svelte:component this={module.default} />
    </div>

    <WritingBack />
  </div>
</section>