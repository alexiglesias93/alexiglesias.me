<script lang="ts">
  import '../styles/app.css';

  import { afterNavigate, disableScrollHandling } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import { PAGE_TRANSITION_DURATION, WEBSITE_ORIGIN } from '$lib/utils/constants';
  import { wait } from '$lib/utils/helpers';

  import type { LayoutData } from './$types';

  export let data: LayoutData;

  afterNavigate(async () => {
    disableScrollHandling();
    await wait(PAGE_TRANSITION_DURATION);
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <link rel="canonical" href={WEBSITE_ORIGIN + data.pathname} />
</svelte:head>

<Header />

<PageTransition pathname={data.pathname}>
  <slot />
</PageTransition>

<Footer />
