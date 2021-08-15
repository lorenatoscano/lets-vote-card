import { writable } from 'svelte/store'

const title = writable('');
const options = writable([]);

function createVotation() {
  function setTitle(newTitle) {
    title.set(newTitle);
  }

  function setOptions(threeOptions) {
    if (Number(threeOptions)) {
      options.set(['Sim', 'Não', 'Talvez']);
    } else {
      options.set(['Sim', 'Não']);
    }
  }

  return { setTitle, setOptions }
}

export { createVotation, title, options };