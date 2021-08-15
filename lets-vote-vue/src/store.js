import { ref, reactive } from 'vue';

const options = reactive([]);
const title = ref('');

function setOptions(threeOptions) {
  if (Number(threeOptions)) {
    options.value = ['Sim', 'Não', 'Talvez'];
  } else {
    options.value = ['Sim', 'Não'];
  }
}

export { options, setOptions, title };