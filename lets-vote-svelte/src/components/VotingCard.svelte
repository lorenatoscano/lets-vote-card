<div>
  <div class="overlay">
    <div class="card-container">
      <h2 class="title">{title}?</h2>
      {#if status === 'open'}
          <Booth {options} on:vote={onVote} />
      {:else}
          <Result {votes} />
      {/if}
    </div>
  </div>
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
div {
  color: #666666;
  font: 400 1rem "Inter", sans-serif;
}

.overlay {
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.card-container {
  background: var(--white);
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