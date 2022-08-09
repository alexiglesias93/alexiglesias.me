<script lang="ts">
	import WritingAuthor from '$lib/components/writing/WritingAuthor.svelte';
	import { AUTHORS } from '$lib/data/authors';
	import { WRITINGS } from '$lib/data/writings';

	export let slug: string;

	const { module } = WRITINGS.find((writing) => writing.slug === slug)!;
	const {
		metadata: { author, date, subtitle, title }
	} = module;
	const author_data = AUTHORS[author];
</script>

<section class="section page-padding">
	<div class="container">
		<div class="writing-header__wrapper">
			<h1 class="mb-12">{title}</h1>

			<p class="text-lg mb-16">
				{subtitle}
			</p>

			<div class="writing-meta__wrapper">
				<WritingAuthor {author_data} />
				<p class="writing-meta__date">Last Updated:<br />{date}</p>
			</div>
		</div>

		<div class="rtb">
			<svelte:component this={module.default} />
		</div>
	</div>
</section>
