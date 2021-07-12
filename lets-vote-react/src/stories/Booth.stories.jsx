import Booth from '../components/Booth.js';

export default {
  title: 'React/Booth',
  component: Booth,
};

const Template = (args) => <Booth {...args} />;

export const SimNãoTalvez = Template.bind({});
SimNãoTalvez.args = {
  options: ['Sim', 'Não', 'Talvez'],
}

export const SimNão = Template.bind({});
SimNão.args = {
  options: ['Sim', 'Não'],
}