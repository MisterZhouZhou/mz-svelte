<script>
	import { createEventDispatcher } from 'svelte';
	
	export let items;
	export let activeItem;
	const dispatch = createEventDispatcher();
	
	// handler
	const handleItem = (item) => {
		dispatch('tabChange', item);
	}
</script>

<div class="tabs">
	<url>
		{#each items as item (item)}
			<li on:click={() => handleItem(item)}>
				<div class:active={item === activeItem}>{item}</div>
			</li>
		{/each}
	</url>
</div>

<style>
	.tabs {
		margin-bottom: 40px;
	}
	url {
		display: flex;
		justify-content: center;
		padding: 0;
		list-style-type: none;
	}
	li {
		margin: 0 16px;
		font-size: 16px;
		color: #555;
		cursor: pointer;
	}
	.active {
		color: #d9124b;
		border-bottom: 1px solid #d9124b;
		padding-bottom: 8px;
	}
</style>