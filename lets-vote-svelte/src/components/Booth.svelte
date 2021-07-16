<div class="booth-container">
  {#each options as option, index (index)}
    <button on:click={dispatcher('vote', index)} >{option}</button>
  {/each}
</div>

<script>
import { createEventDispatcher } from 'svelte';

export let options;

const dispatcher = createEventDispatcher();
</script>

<style>
.booth-container {
  display: flex;
  justify-content: space-around;
}

button {
  width: 7rem;
  height: 2.5rem;

  margin-top: 2rem;
  margin-bottom: 2rem;

  border: 0;
  border-radius: 5px;

  background: #5965e0;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;

  cursor: pointer;

  transition: background-color 0.2s;
}

button:hover {
  background: #4953b8;
}
</style>