<script lang="ts">
  import Logo from './Logo.svelte';
</script>

<footer class="section page-padding">
  <div class="container">
    <div class="content">
      <Logo />

      <a href="mailto:alexiglesias@finsweet.com?subject=Hello%20there!" class="text-link">
        Say hello!
      </a>
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
</style>
