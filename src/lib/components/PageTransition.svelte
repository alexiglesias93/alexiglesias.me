<script lang="ts">
  import { quartOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  import { PAGE_TRANSITION_DURATION } from '$lib/utils/constants';

  export let pathname = '';

  const duration = PAGE_TRANSITION_DURATION;
  const easing = quartOut;
</script>

{#key pathname}
  <main in:fade={{ easing, duration, delay: duration }} out:fade={{ easing, duration }}>
    <slot />
  </main>
{/key}
