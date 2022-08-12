<script lang="ts">
  import { page } from '$app/stores';

  import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
  // import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
  import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
</script>

<header class="page-padding">
  <div class="container">
    <div class="content">
      <a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="logo">
        <span class="logo-a">A</span>I
      </a>

      <nav class="links">
        <a
          aria-label="GitHub"
          rel="noopener"
          href="https://github.com/alexiglesias93"
          target="_blank"
          class="link"
        >
          <div class="icon">
            <GitHubIcon />
          </div>
        </a>
        <a
          aria-label="Twitter"
          rel="noopener"
          href="https://twitter.com/alexiglesias_me"
          target="_blank"
          class="link"
        >
          <div class="icon">
            <TwitterIcon />
          </div>
        </a>
        <a
          aria-label="LinkedIn"
          rel="noopener"
          href="https://www.linkedin.com/in/alexiglesias93/"
          target="_blank"
          class="link"
        >
          <div class="icon">
            <!-- <LinkedinIcon /> -->
          </div>
        </a>
      </nav>
    </div>
  </div>
</header>

<style>
  header {
    padding-top: 8rem;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    transition: color 200ms ease;
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 700;
  }

  .logo:hover {
    color: var(--golden);
  }

  .logo:hover .logo-a {
    color: var(--white);
  }

  .logo-a {
    transition: color 200ms ease;
    color: var(--golden);
  }

  .links {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    grid-auto-columns: auto;
    grid-column-gap: 1rem;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .link {
    transition: color 200ms ease;
    max-width: 100%;
    display: inline-block;
  }

  .link:hover {
    color: var(--golden);
  }

  .icon {
    width: 1rem;
  }

  @media screen and (max-width: 767px) {
    header {
      padding-top: 4rem;
    }
  }
</style>
