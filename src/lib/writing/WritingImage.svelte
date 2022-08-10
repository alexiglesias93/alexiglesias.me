<script lang="ts">
	export let src: string;
	export let caption: string;
</script>

<figure>
	<img {src} alt={caption} />
	<figcaption aria-hidden="true">{caption}</figcaption>
</figure>
