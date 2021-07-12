import Result from '../components/Result.vue';

export default {
  title: 'Vue/Result',
  component: Result,
};

const Template = (args) => ({
  components: { Result },
  setup() {
    return { ...args };
  },
  template: '<Result :votes="votes"/>',
});

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
  votes: [
    { option: 'Sim', count: 6 },
    { option: 'Não', count: 3 },
    { option: 'Talvez', count: 1 },
  ],
}

export const Exemplo2 = Template.bind({});
Exemplo2.args = {
  votes: [
    { option: 'Sim', count: 6 },
    { option: 'Não', count: 3 },
  ],
}