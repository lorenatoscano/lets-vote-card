import App from '../App.vue';

export default {
  title: 'Vue/VotingContainer',
  component: App,
};

const Template = (args) => ({
  components: { App },
  setup() {
    return { args };
  },
  template: '<App v-bind="args"/>',
});

export const Exemplo1 = Template.bind({});