<script lang="ts">
	import { fade } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';

	export let pathname = '';

	const duration = 300;
	const easing = quartOut;
</script>

{#key pathname}
	<main in:fade={{ easing, duration, delay: duration }} out:fade={{ easing, duration }}>
		<slot />
	</main>
{/key}
