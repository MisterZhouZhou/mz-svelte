<script>
	import Header from './lib/Header.svelte';
	import Footer from './lib/Footer.svelte';
	import Tabs from './lib/Tabs.svelte';
  import Button from './lib/Button/index.svelte';
  import Card from './lib/Card/index.svelte';
	import Form from './lib/Form/index.svelte';
	
	let items = ['Current Polls', 'Add New Poll']
	let activeItem = 'Current Polls';
	
	// handle
	const onTabChnage = (item) => {
		activeItem = item.detail
	}
	
	const addPerson = () => {
		activeItem = 'Current Polls';
	}
</script>

<Header>
  <img src="https://himg.bdimg.com/sys/portraitn/item/public.1.51b480ab.EjVen6b33P_hgqEdZgwsOg" alt="img" />
</Header>

<main>
	<Tabs {items} {activeItem} on:tabChange={onTabChnage} />
	{#if activeItem === 'Current Polls'}
		<p>Current Polls</p>
    <h3>Button</h3>
    <div class="card">
      <Button>Primary</Button>
      <Button type='secondary'>secondary</Button>
      <Button inverse>Primary</Button>
      <Button type='secondary' inverse>secondary</Button>
      <Button inverse flat>Primary</Button>
      <Button type='secondary' inverse flat>secondary</Button>
    </div>
   
    <h3>Card</h3>
    <div class="card">
      <Card>
        <h3>Card</h3>
        <p>Card</p>
      </Card>
    </div>

     <h3>Form</h3>
    <div class="card">
      <Form on:add={ () => console.log('add') } />
    </div>
	{:else if activeItem === 'Add New Poll'}
  	<p>Add New Poll</p>
	{/if}
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>