<script lang="ts">
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");
  import type { LayoutData } from './$types';

  import { afterNavigate, disableScrollHandling } from '$app/navigation';

  import Header from '$lib/components/Header.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import { PAGE_TRANSITION_DURATION } from '$lib/utils/constants';
  import { wait } from '$lib/utils/helpers';

  import '../styles/app.css';

  export let data: LayoutData;

  afterNavigate(async () => {
    disableScrollHandling();
    await wait(PAGE_TRANSITION_DURATION);
    window.scrollTo(0, 0);
  });
</script>

<Header />

<PageTransition pathname={data.pathname}>
  <slot />
</PageTransition>
