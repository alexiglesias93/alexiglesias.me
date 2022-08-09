<script lang="ts">
	import type { AUTHORS } from '$lib/data/authors';

	export let author_data: typeof AUTHORS[keyof typeof AUTHORS];
</script>

<div class="writing-author__wrapper">
	<img src={author_data.img} loading="lazy" alt={author_data.name} class="writing-author__img" />
	<div>
		<div>{author_data.name}</div>
		<a
			rel="noopener"
			href="https://twitter.com/{author_data.twitter}"
			target="_blank"
			class="writing-author__a">@{author_data.twitter}</a
		>
	</div>
</div>
