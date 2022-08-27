<script lang="ts">
  import HomeHero from '$lib/components/HomeHero.svelte';
  import Metas from '$lib/components/Metas.svelte';
  import Schema from '$lib/components/Schema.svelte';
  import { WEBSITE_ORIGIN } from '$lib/utils/constants';
  import Work from '$lib/work/Work.svelte';
  import Writings from '$lib/writing/Writings.svelte';

  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<Metas
  title="Hello There"
  description="Developing cool s**t for the no-code community. CTO @ Finsweet."
/>

<Schema
  schema={{
    '@type': 'Person',
    name: 'Alex Iglesias',
    url: WEBSITE_ORIGIN,
    image: `${WEBSITE_ORIGIN}/images/authors/alex.webp`,
    sameAs: [
      'https://twitter.com/alexiglesias_me',
      'https://www.linkedin.com/in/alexiglesias93/',
      'http://github.com/alexiglesias93'
    ]
  }}
/>

<HomeHero />

<Work />

<Writings items={data.writing_items} tags={data.tags} />
