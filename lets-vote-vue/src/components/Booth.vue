<template>
  <div class="booth-container">
    <button 
      v-for="(option, index) in options" 
      :key="index"
      @click="$emit('vote', index)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Booth',
  props: {
    options: Array,
  }
}
</script>

<style scoped>
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