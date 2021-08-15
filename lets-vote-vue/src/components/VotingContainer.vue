<template>
  <div class="overlay">
    <VotingCard v-if="isStarted" :status="status" />
    <VotingForm v-else @start="startVotation" />
  </div>
</template>

<script>
import { ref } from 'vue';
import VotingCard from './VotingCard.vue';
import VotingForm from './VotingForm.vue';

export default {
  name: 'VotingContainer',
  components: { VotingCard, VotingForm },
  setup() {
    const status = ref('open');
    const isStarted = ref(false);

    const startVotation = () => {
      isStarted.value = true;
    }

    const changeStatus = () => {
      status.value = status.value == 'open' ? 'closed' : 'open';
    };

    return {
      isStarted,
      status,
      changeStatus,
      startVotation
    };
  }
}
</script>

<style>
body {
  color: #666666;
}

body, button, input, select {
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
  color: #2e384d;
}

button {
  width: 7.5rem;
  height: 2.5rem;

  margin-top: 2rem;
  margin-bottom: 2rem;

  border: 0;
  border-radius: 5px;

  background: #5965e0;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600 !important;
  font-family: "Inter", sans-serif;

  cursor: pointer;

  transition: background-color 0.2s;
}

button:hover {
  background: #4953b8;
}
</style>