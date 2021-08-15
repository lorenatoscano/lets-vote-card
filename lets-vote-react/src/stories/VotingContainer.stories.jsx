import VotingContainer from '../components/VotingContainer.js';

export default {
  title: 'React/Demo',
  component: VotingContainer,
};

const Template = (args) => <VotingContainer {...args} />;

export const Demo = Template.bind({});