<script lang="ts">
  import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
  import LinkedinIcon from '$lib/icons/LNIcon.svelte';
  import TwitterIcon from '$lib/icons/TwitterIcon.svelte';

  import Logo from './Logo.svelte';
</script>

<header class="page-padding">
  <div class="container">
    <div class="content">
      <Logo />

      <nav class="links">
        <a
          aria-label="GitHub"
          rel="noopener"
          href="https://github.com/alexiglesias93"
          target="_blank"
          class="text-link"
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
          class="text-link"
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
          class="text-link"
        >
          <div class="icon">
            <LinkedinIcon />
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

  .links {
    display: flex;
    align-items: center;
    grid-column-gap: 1rem;
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
