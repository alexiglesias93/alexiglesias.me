<script lang="ts">
  /** Props */
  export let title: string;
  export let description: string;
  export let image = '/images/open-graph.jpg';
</script>

<svelte:head>
  <title>{title}</title>
  <meta content={description} name="description" />
  <meta content={title} property="og:title" />
  <meta content={description} property="og:description" />
  <meta content={image} property="og:image" />
  <meta content={title} property="twitter:title" />
  <meta content={description} property="twitter:description" />
  <meta content={image} property="twitter:image" />
  <meta property="og:type" content="website" />
  <meta content="summary_large_image" name="twitter:card" />
</svelte:head>
