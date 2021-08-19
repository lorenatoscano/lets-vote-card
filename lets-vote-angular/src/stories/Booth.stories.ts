import { Story, Meta } from '@storybook/angular/types-6-0';
import { BoothComponent } from 'src/components/booth/booth.component';

export default {
  title: 'Angular/Booth',
  component: BoothComponent,
} as Meta;

const Template: Story<BoothComponent> = (args) => ({
  props: args,
});

export const SimNãoTalvez = Template.bind({});
SimNãoTalvez.args = {
  options: ['Sim', 'Não', 'Talvez'],
}

export const SimNão = Template.bind({});
SimNão.args = {
  options: ['Sim', 'Não'],
}