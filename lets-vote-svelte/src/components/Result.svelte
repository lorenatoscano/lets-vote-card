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

  if (votes.length == 0) {
    total = 1;
  }

  function calculatePercentage(value) {
    return Math.round(100 * value / total);
  }
</script>