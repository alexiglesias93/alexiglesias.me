<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ url: { pathname } }) => ({ props: { pathname } });
</script>

<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import PageTransition from '$lib/components/PageTransition.svelte';

  import '../styles/app.css';

  export let pathname: string;
</script>

<Header />

<PageTransition {pathname}>
  <slot />
</PageTransition>

<footer class="section" />
