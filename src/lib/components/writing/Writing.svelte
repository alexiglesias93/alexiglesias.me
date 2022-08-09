<script lang="ts">
	import WritingListHeader from './WritingListHeader.svelte';
	import WritingList from './WritingList.svelte';
	import { WRITINGS } from '$lib/data/writings';
	import type { ComponentProps } from 'svelte';

	const items: ComponentProps<WritingList>['items'] = WRITINGS.map(
		({
			slug,
			module: {
				metadata: { date, title }
			}
		}) => ({
			title,
			date,
			slug
		})
	);
</script>

<section class="section page-padding">
	<div class="container">
		<WritingListHeader />
		<WritingList {items} />
	</div>
</section>
