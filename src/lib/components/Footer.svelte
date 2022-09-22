<script lang="ts">
  import Logo from './Logo.svelte';
</script>

<footer class="section page-padding">
  <div class="container">
    <div class="content">
      <Logo />

      <div class="links">
        <a data-sveltekit-reload href="/writing/rss.xml" target="_blank" class="text-link">RSS</a>

        <div class="links-separator" />

        <a href="mailto:alexiglesias@finsweet.com?subject=Hello%20there!" class="text-link">
          Say hello!
        </a>
      </div>
    </div>
  </div>
</footer>

<style>
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
  }

  .links {
    display: flex;
    align-items: center;
    grid-column-gap: 0.5rem;
  }

  .links-separator {
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 999px;
    background-color: var(--golden);
  }
</style>
