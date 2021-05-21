<script lang="ts">
  import Header from '$lib/Header.svelte';
</script>

<svelte:head />
<Header />
<main>
  <slot />
</main>

<style lang="scss" global>
  @import '../app.scss';
</style>
