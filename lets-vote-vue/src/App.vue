<template>
  <VotingContainer />
</template>

<script>
import VotingContainer from './components/VotingContainer.vue';

export default {
  name: 'App',
  components: {
    VotingContainer 
  },
  data() {
    return {
      title: 'Reunião amanhã',
      status: 'open',
      votes: [
        { option: 'Sim', count: 6 }, 
        { option: 'Não', count: 3 },
        { option: 'Talvez', count: 1 },
      ],
    }
  },
  methods: {
    onVote(index) {
      this.votes[index].count++;
      this.changeStatus();
    },
    changeStatus() {
      this.status = this.status == 'open' ? 'closed' : 'open';
    }
  }
}
</script>

<style>

</style>
