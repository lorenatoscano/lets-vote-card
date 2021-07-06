import App from '../App.vue';
import * as VotingCardStories from './VotingCard.stories';

export default {
  title: 'App',
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
Exemplo1.args = {
  ...VotingCardStories.Exemplo1.args,
};