<script lang="ts">
  import type { Author } from './data';

  export let author: Author;
</script>

<div class="wrapper">
  <img src={author.img} loading="lazy" alt={author.name} />
  <div>
    <div>{author.name}</div>
    <a rel="noopener" href="https://twitter.com/{author.twitter}" target="_blank">
      @{author.twitter}
    </a>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    grid-column-gap: 0.5rem;
  }

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 999rem;
  }
  a {
    color: var(--golden);
    font-size: 0.75rem;
    transition: opacity 200ms ease;
  }

  a:hover {
    opacity: 75%;
  }
</style>
