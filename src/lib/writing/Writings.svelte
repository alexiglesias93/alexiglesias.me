<script lang="ts">
	import type { ComponentProps } from 'svelte';

	import { WRITINGS } from './data';
	import WritingListHeader from './WritingListHeader.svelte';
	import WritingList from './WritingList.svelte';

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
