<div class="card-container">
  <h2 class="title">{$title}</h2>
  {#if status === 'open'}
      <Booth on:vote={onVote} />
  {:else}
      <Result {votes} />
  {/if}
</div>


<script>
  import Booth from './Booth.svelte';
  import Result from './Result.svelte';
  import { title, options } from './store.js';

  export let status;

  $: votes = $options.map(option => {
    return { option: option, count: 0 }
  });

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