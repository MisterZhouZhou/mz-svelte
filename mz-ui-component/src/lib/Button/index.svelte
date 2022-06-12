<script>
	export let type = 'primary';
	export let flat = false;
	export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
	<slot></slot>
</button>

<style>
	button {
		border: 0;
		cursor: pointer;
		border-radius: 6px;
		padding: 8px 12px;
		font-weight: bold;
		box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
	}
	.primary {
		background: #d91b42;
		color: #fff;
	}
	.secondary {
		background: #45c496;
		color: #fff;
	}
	.flat {
		box-shadow: none;
	}
	.primary.inverse {
		border: 1px solid #d91b42;
		background-color: #fff;
		color: #d91b42;
	}
	.secondary.inverse {
		border: 1px solid #45c496;
		background-color: #fff;
		color: #45c496;
	}
</style>

