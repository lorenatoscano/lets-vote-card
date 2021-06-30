<template>
  <VotingCard title="Devemos adiar a entrega" status="open" :votes="[{option: 'Sim', count: 8}, {option: 'Não', count: 3}]" />
</template>

<script>
import VotingCard from './components/VotingCard.vue'

export default {
  name: 'App',
  components: {
    VotingCard 
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
