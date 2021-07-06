<template>
  <VotingCard :title="title" :status="status" :votes="votes" @vote="vote" @changeStatus="changeStatus"/>
</template>

<script>
import VotingCard from './components/VotingCard.vue'

export default {
  name: 'App',
  components: {
    VotingCard 
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
    vote(index) {
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
body {
  color: #666666;
}

body, button {
  font: 400 1rem "Inter", sans-serif;
}
</style>
