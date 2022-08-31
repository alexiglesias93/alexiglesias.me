<script lang="ts">
  import { page } from '$app/stores';
</script>

<section class="section page-padding">
  <div class="container">
    <h1 class="mb-8">{$page.status}</h1>
    <p>{$page.error.message}</p>
  </div>
</section>
