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
    options: {
      type: Array,
      required: true
    },
  }
}
</script>

<style scoped>
.booth-container {
  display: flex;
  justify-content: space-around;
}
</style>