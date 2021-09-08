<script lang="ts">
  import { send, receive } from '$transitions/pages-crossfade';
</script>

<section class="section page-padding">
  <div class="container">
    <h1>Hello there,</h1>
    <p>
      I'm Alex Iglesias, a mechanical engineer who fell in love with web development.<br />I enjoy working with modern
      languages and tools like
      <a href="https://www.typescriptlang.org/" rel="noopener" target="_blank" class="external-link typescript"
        >Typescript</a
      >,
      <a href="https://svelte.dev/" rel="noopener" target="_blank" class="external-link svelte">Svelte</a>
      and
      <a href="https://webflow.com/" rel="noopener" target="_blank" class="external-link webflow">Webflow</a>.<br />
    </p>
    <p class="m-0">
      Currently rocking as the CTO of
      <a href="https://www.finsweet.com/" rel="noopener" target="_blank" class="external-link finsweet">Finsweet</a>.
    </p>
  </div>
</section>

<style lang="scss">
  .external-link {
    font-weight: 700;
    transition: transform 200ms ease;

    &:hover,
    &:focus {
      transform: rotateZ(-4deg);
    }

    &.typescript {
      color: #3178c6;
    }

    &.svelte {
      color: #ff3e00;
    }

    &.webflow {
      color: #4353ff;
    }

    &.finsweet {
      color: #f7c75f;
    }
  }
</style>
