import { writable } from 'svelte/store'

const PollStore = writable([
	{
		id: 1,
		question: 'javascript or typescript',
		answerA: 'javascript',
		answerB: 'typescript',
		votesA: 9,
		votesB: 15,
	},
	{
		id: 2,
		question: 'javascript or typescript',
		answerA: 'javascript',
		answerB: 'typescript',
		votesA: 9,
		votesB: 15,
	},
])

export const addPoll = (poll) => {
	PollStore.update((oldPolls) => [poll, ...oldPolls])
}

export default PollStore;
