<div class="card-container">
  <h2 class="title">{title}?</h2>
  {#if status === 'open'}
      <Booth {options} on:vote={onVote} />
  {:else}
      <Result {votes} />
  {/if}
</div>


<script>
  import Booth from './Booth.svelte';
  import Result from './Result.svelte';

  export let status;
  export let title;
  export let votes;

  $: options = votes.map(vote => vote.option);

  function onVote(event) {
    let index = event.detail;
    votes[index].count++;
    status = 'closed';
  }
</script>
<style>
.card-container {
  background: white;
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
}

.title {
  color: #2e384d
}
</style>