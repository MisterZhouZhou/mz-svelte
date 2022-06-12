<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './Button.svelte';
	import PollStore, { addPoll } from './PollStore';
	
	let dispatch = createEventDispatcher();
	// form
	let fields = {question: '', answerA: '', answerB: ''};
	let errors = {question: '', answerA: '', answerB: ''};
	let valid = false;
	
	// handler
	const submitHandler = () => {
		valid = true;
		// valid errors
		if (fields.question.trim().length < 5) {
			valid = false;
			errors.question = 'Question must be at least 5 characters long';
		} else {
			errors.question = '';
		}
		// answerA
		if (fields.answerA.trim().length < 1) {
			valid = false;
			errors.answerA = 'AnserA not be empty';
		} else {
			errors.answerA = '';
		}
		// answerB
		if (fields.answerB.trim().length < 1) {
			valid = false;
			errors.answerB = 'AnserB not be empty';
		} else {
			errors.answerB = '';
		}
		if (valid) {
			// dispatch('add', {...fields, votesA: 0, votesB: 0, id: Math.random()});
			let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()};
      addPoll(poll);
			dispatch('add');
		}
	}
</script>

<form on:submit|preventDefault={submitHandler}>
	<div class="form-field">
		<label for="question">Poll Question:</label>
		<input type="text" id="question" bind:value={fields.question} />
		<div class="error">{errors.question}</div>
	</div>
	<div class="form-field">
		<label for="ansber-a">Answer A:</label>
		<input type="text" id="answer-a" bind:value={fields.answerA} />
		<div class="error">{errors.answerA}</div>
	</div>
	<div class="form-field">
		<label for="answer-b">Answer B:</label>
		<input type="text" id="answer-b" bind:value={fields.answerB} />
		<div class="error">{errors.answerB}</div>
	</div>
	<Button type='secondary' flat>Add New Poll</Button>
</form>

<style>
	form {
		width: 400px;
		margin: 0 auto;
		text-align: center;
	}
	.form-field {
		margin: 18px auto;
	}
	input {
		width: 100%;
		border-radius: 6px;
	}
	label {
		margin: 10px auto;
		text-align: left;
	}
	.error {
		font-weight: bold;
		font-size: 12px;
		color: #d9124b;
	}
</style>