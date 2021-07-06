<template>
  <div class="result-container">
    <p v-for="vote in votes" :key="vote.option">
      {{ vote.option }} - {{ vote.count }} votos ({{ calculatePercentage(vote.count) }}%)
    </p>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    votes: { 
      type: Array, 
      required: true
    },
  },
  methods: {
    calculatePercentage(value) {
      return Math.round(100 * value/this.totalVotes);
    }
  },
  computed: {
    totalVotes() {
      let total = 0;
      for (let vote of this.votes) {
        total += vote.count;
      }

      if (total > 0) {
        return total;
      }
      
      return 1;
    }
  }
}
</script>

<style>

</style>