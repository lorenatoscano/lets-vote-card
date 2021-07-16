<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import VotingCard from '../components/VotingCard.svelte';
</script>

<Meta 
  title="Svelte/VotingCard"
  component={VotingCard}
  argTypes= {{
    title: {
      control: { type: 'text'}
    },
    status: { 
      control: { type: 'select', options: ['open', 'closed'] } 
    },
  }}
/>

<Template let:args>
  <VotingCard {...args} />
</Template>

<Story 
  name="Exemplo1"
  args={{
    status: 'open',
    title: 'Adiamos a entrega',
    votes: [
      { option: 'Sim', count: 6 },
      { option: 'Não', count: 3 },
      { option: 'Talvez', count: 1 },
    ],
  }}
/>

<Story 
  name="Exemplo2"
  args={{
    status: 'closed',
    title: 'Continuamos amanhã',
    votes: [
      { option: 'Sim', count: 6 },
      { option: 'Não', count: 3 },
    ],
  }}
/>


