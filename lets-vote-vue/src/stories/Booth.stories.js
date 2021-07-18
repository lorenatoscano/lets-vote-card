import Booth from '../components/Booth.vue';

export default {
  title: 'Vue/Booth',
  component: Booth,
  argTypes: {
    onVote: { action: "onVote" },
  }
};

const Template = (args) => ({
  components: { Booth },
  setup() {
    return { args };
  },
  template: '<Booth v-bind="args"/>',
});

export const SimNãoTalvez = Template.bind({});
SimNãoTalvez.args = {
  options: ['Sim', 'Não', 'Talvez'],
}

export const SimNão = Template.bind({});
SimNão.args = {
  options: ['Sim', 'Não'],
}