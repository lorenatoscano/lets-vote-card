import VotingContainer from '../components/VotingContainer.vue';

export default {
  title: 'Vue/Demo',
  component: VotingContainer,
};

const Template = (args) => ({
  components: { VotingContainer },
  setup() {
    return { args };
  },
  template: '<VotingContainer v-bind="args"/>',
});

export const Demo = Template.bind({});