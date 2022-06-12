<script>
	import Header from './lib/Header.svelte';
	import Footer from './lib/Footer.svelte';
	import Tabs from './lib/Tabs.svelte';
	import CreatePollForm from './lib/CreatePollForm.svelte';
	import PollList from './lib/PollList.svelte';
	
	let items = ['Current Polls', 'Add New Poll']
	let activeItem = 'Add New Poll';
	
	// handle
	const onTabChnage = (item) => {
		activeItem = item.detail
	}
	
	const addPerson = () => {
		activeItem = 'Current Polls';
	}
</script>

<Header />
<main>
	<Tabs {items} {activeItem} on:tabChange={onTabChnage} />
	{#if activeItem === 'Current Polls'}
		<PollList />
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={addPerson} />
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>