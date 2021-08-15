<div class="overlay">
  {#if isStarted}
    <VotingCard {status} />
  {:else}
    <VotingForm on:start={startVotation} />
  {/if}
</div>

<script>
  import VotingCard from './VotingCard.svelte';
  import VotingForm from './VotingForm.svelte';

  let isStarted = false;
  let status = 'open';

  function startVotation() {
    isStarted = true;
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

</style>