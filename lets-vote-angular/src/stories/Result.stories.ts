import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultComponent } from 'src/app/result.component';

export default {
  title: 'Angular/Result',
  component: ResultComponent,
} as Meta;

const Template: Story<ResultComponent> = (args) => ({
  props: args,
});

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