<template>
  <div class="overlay">
    <div class="card-container">
      <h2 class="title">{{ title }}?</h2>
      <Booth v-if="status == 'open'" :options="options" />
      <Result v-else :votes="votes" />
    </div>
  </div>
  
</template>

<script>
import Result from './Result.vue'
import Booth from './Booth.vue';

export default {
  name: 'VotingCard',
  props: {
    title: String,
    status: String,
    votes: Array,
  },
  components: {
    Booth, Result
  },
  data() {
    return {
      options: ['Sim', 'Não', 'Talvez'],
    }
  }
}
</script>

<style scoped>  
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