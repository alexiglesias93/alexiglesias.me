<script lang="ts">
  import { page } from '$app/stores';
</script>

<a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
  <span class="letter-a">A</span>I
</a>

<style>
  a {
    transition: color 200ms ease;
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 700;
  }

  .letter-a {
    transition: color 200ms ease;
    color: var(--golden);
  }

  a:hover {
    color: var(--golden);
  }

  a:hover .letter-a {
    color: var(--white);
  }
</style>
