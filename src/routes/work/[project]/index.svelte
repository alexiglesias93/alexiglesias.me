<script lang="ts">
  import { send, receive } from '$transitions/pages-crossfade';
</script>

<section class="section page-padding">
  <div class="container">
    <div in:receive={{ key: 'work-bg' }} out:send={{ key: 'work-bg' }} class="bg">
      <h1>Test</h1>
    </div>
  </div>
</section>

<style lang="scss">
  .bg {
    padding: 4rem 2rem;
    border-radius: 0.5rem;
    background-color: var(--grey);
  }
</style>
