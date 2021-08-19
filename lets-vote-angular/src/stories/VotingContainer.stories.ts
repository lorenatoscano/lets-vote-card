import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { VotingContainerComponent } from 'src/components/votingContainer/votingContainer.component';
import { VotingCardComponent } from 'src/components/votingCard/votingCard.component';
import { VotingFormComponent } from 'src/components/votingForm/votingForm.component';
import { ResultComponent } from 'src/components/result/result.component';
import { BoothComponent } from 'src/components/booth/booth.component';

import * as ResultStories from './Result.stories';
import * as BoothStories from './Booth.stories';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Angular/Demo',
  component: VotingContainerComponent,
  decorators: [
    moduleMetadata({
      declarations: [VotingContainerComponent, VotingCardComponent, ResultComponent, BoothComponent, VotingFormComponent],
      imports: [CommonModule, BrowserModule, FormsModule],
    }),
  ],
} as Meta;

const Template: Story<VotingContainerComponent> = (args) => ({
  props: args,
});

export const Demo = Template.bind({});
