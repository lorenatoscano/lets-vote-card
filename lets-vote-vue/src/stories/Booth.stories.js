import Booth from '../components/Booth.vue';

export default {
  title: 'Booth',
  component: Booth,
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