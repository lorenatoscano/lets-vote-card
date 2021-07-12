import Result from '../components/Result.js';

export default {
  title: 'React/Result',
  component: Result,
};

const Template = (args) => <Result {...args} />;

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