<script lang="ts">
  import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte';
</script>

<a href="/">
  <div class="icon">
    <ArrowLeftIcon />
  </div>
  <div>Back to Home</div>
</a>

<style>
  a {
    display: inline-flex;
    align-items: center;
    grid-column-gap: 0.5rem;
  }

  a:hover .icon {
    transform: translateX(-0.25rem);
  }

  .icon {
    width: 0.75rem;
    transition: transform 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
    color: var(--golden);
  }
</style>
