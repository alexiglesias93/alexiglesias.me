<script lang="ts">
	import WritingHeader from '$lib/components/writing/WritingHeader.svelte';
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
		<WritingHeader {title} {subtitle} {date} author={author_data} />

		<div class="rtb">
			<svelte:component this={module.default} />
		</div>
	</div>
</section>
