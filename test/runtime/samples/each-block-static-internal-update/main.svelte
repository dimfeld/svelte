<script>
	import { onMount } from 'svelte';
	let items = [];

	onMount(() => {
		items.push(1);
		items = items;
	});
</script>

{#each items as item}
	foo
{/each}
