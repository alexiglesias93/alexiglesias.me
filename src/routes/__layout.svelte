<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ url: { pathname } }) => ({ props: { pathname } });
</script>

<script lang="ts">
  import { afterNavigate, disableScrollHandling } from '$app/navigation';

  import Header from '$lib/components/Header.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';
  import { PAGE_TRANSITION_DURATION } from '$lib/utils/constants';
  import { wait } from '$lib/utils/helpers';

  import '../styles/app.css';

  export let pathname: string;

  afterNavigate(async () => {
    disableScrollHandling();
    await wait(PAGE_TRANSITION_DURATION);
    window.scrollTo(0, 0);
  });
</script>

<Header />

<PageTransition {pathname}>
  <slot />
</PageTransition>
