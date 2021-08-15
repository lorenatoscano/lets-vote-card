<div>
  {#each votes as vote, index (index)}
    <p>
      {index + 1}. {vote.option} - {vote.count} votos ({calculatePercentage(vote.count)}%)
    </p>
  {/each}
</div>

<script>
  export let votes;

  $: total = votes.reduce((x, y) => x + y.count, 0);

  function calculatePercentage(value) {
    if (total == 0) {
      return Math.round(100 * value);
    }
    return Math.round(100 * value / total);
  }
</script>

<style>
p {
  color: #666666;
  font: 400 1rem "Inter", sans-serif;
}
</style>