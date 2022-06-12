<script>
  import { tweened } from 'svelte/motion';
	import Card from './Card.svelte';
  import PollStore from './PollStore';
  import Button from './Button.svelte';

	export let poll;
	
	$: totalVotes = poll.votesA + poll.votesB;
	$: percentA = Math.floor(100 / totalVotes * poll.votesA);
	$: percentB = Math.floor(100 / totalVotes * poll.votesB);

  // tweened
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const handleVote = (option, id) => {
    PollStore.update(oldPolls => {
      let copiesPolls = [...oldPolls];
      let updatePoll = copiesPolls.find(poll => poll.id === id);
      if (option === 'a') {
        updatePoll.votesA++;
      }
      if (option === 'b') {
        updatePoll.votesB++;
      }
      return copiesPolls;
    });
	}

  const handleDelete = (id) => {
    PollStore.update((oldPolls) => {
      return oldPolls.filter(poll => poll.id !== id);
    });
  }
</script>

<Card>
	<div class="poll">
		<h3>{poll.question}</h3>
		<p>Total Votes: {totalVotes}</p>
		<div class="answer" on:click={() => handleVote('a', poll.id)}>
			<div class="percent percent-a" style={`width: ${$tweenedA}%`}></div>
			<span>{poll.answerA}({poll.votesA})</span>
		</div>
		<div class="answer" on:click={() => handleVote('b', poll.id)}>
			<div class="percent percent-b" style={`width: ${$tweenedB}%`}></div>
			<span>{poll.answerB}({poll.votesB})</span>
		</div>
    <div class="delete">
      <Button flat on:click={() => handleDelete(poll.id)}>Delete</Button>
    </div>
	</div>
</Card>
<style>
	h3 {
		margin: 0 auto;
		color: #555;
	}
	p {
		margin-top: 6px;
		margin-bottom: 30px;
		font-size: 14px;
		color: #aaa;
	}
	.answer {
		background: #fafafa;
		cursor: pointer;
		margin: 10px auto;
		position: relative;
	}
	.answer:hover {
		opacity: 0.6;
	}
	span {
		display: inline-block;
		padding: 10px 20px;
	}
	.percent {
		height: 100%;
		box-sizing: border-box;
		position: absolute;
	}
	.percent-a {
		border-left: 4px solid #d91b42;
		background: rgba(217, 27, 66, 0.2);
	}
	.percent-b {
		border-left: 4px solid #45c496;
		background: rgba(69, 196, 150, 0.2);
	}
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>

