import VotingCard from '../components/VotingCard.js';

export default {
  title: 'React/VotingCard',
  component: VotingCard,
  argTypes: {
    status: { control: { type: 'select', options: ['open', 'closed'] } },
  }
};

const Template = (args) => <VotingCard {...args} />;

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
  status: "open",
  title: "Adiamos a entrega?",
  options: ['Sim', 'Não', 'Talvez']
}

export const Exemplo2 = Template.bind({});
Exemplo2.args = {
  status: "closed",
  title: "Continuamos amanhã?",
  options: ['Sim', 'Não']
}


