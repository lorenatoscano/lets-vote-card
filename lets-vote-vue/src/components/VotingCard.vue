<template>
  <div class="card-container">
    <h2 class="title">{{ title }}</h2>
    <Booth 
      v-if="sts == 'open'" 
      :options="options.value" 
      @vote="onVote"
    />
    <Result v-else :votes="votes" />
  </div>
</template>

<script>
import Result from './Result.vue'
import Booth from './Booth.vue';
import { title, options } from '../store';
import { ref, computed } from 'vue';

export default {
  name: 'VotingCard',
  props: {
    status,
  },
  components: {
    Booth, Result
  },

  setup(props) {
    const sts = ref(props.status);

    const votes = computed(() => {
      return options.value.map(option => {
        return {
          option: option,
          count: 0,
        }; 
      })
    })

    const onVote = (index) => {
      votes.value[index].count++;
      sts.value = sts.value == 'open' ? 'closed' : 'open';
    };

    return { onVote, votes, title, options, sts }
  }
}
</script>

<style> 
</style>