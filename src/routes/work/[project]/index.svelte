<script lang="ts">
  import { send, receive } from '$transitions/pages-crossfade';
</script>

<div class="page-wrapper">
  <section class="section page-padding">
    <div class="container">
      <div in:receive={{ key: 'work-bg' }} out:send={{ key: 'work-bg' }} class="bg">
        <h1>Manitoba Blue Cross</h1>
      </div>
      <div class="temporary-content" />
    </div>
  </section>
</div>

<style lang="scss">
  .bg {
    padding: 4rem 2rem;
    border-radius: 0.5rem;
    background-color: var(--grey);
  }

  .temporary-content {
    height: 200vh;
  }
</style>
