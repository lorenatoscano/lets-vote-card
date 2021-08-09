import VotingForm from '../components/VotingForm.js';

export default {
  title: 'React/VotingForm',
  component: VotingForm,
};

const Template = (args) => <VotingForm {...args} />;

export const Exemplo = Template.bind({});
Exemplo.args = {
  onStart: () => { },
}