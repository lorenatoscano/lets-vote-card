import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { VotingCardComponent } from 'src/app/votingCard.component';
import { ResultComponent } from 'src/app/result.component';
import { BoothComponent } from 'src/app/booth.component';

import * as ResultStories from './Result.stories';
import * as BoothStories from './Booth.stories';

export default {
  title: 'Angular/VotingCard',
  component: VotingCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [VotingCardComponent, ResultComponent, BoothComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    status: { control: { type: 'select', options: ['open', 'closed'] } },
  }
} as Meta;

const Template: Story<VotingCardComponent> = (args) => ({
  props: args,
});

export const Exemplo1 = Template.bind({});
Exemplo1.args = {
  status: 'open',
  title: 'Adiamos a entrega',
  votes: [
    { option: 'Sim', count: 6 },
    { option: 'Não', count: 3 },
    { option: 'Talvez', count: 1 },
  ],
}

export const Exemplo2 = Template.bind({});
Exemplo2.args = {
  status: 'closed',
  title: 'Continuamos amanhã',
  votes: [
    { option: 'Sim', count: 6 },
    { option: 'Não', count: 3 },
  ],
}