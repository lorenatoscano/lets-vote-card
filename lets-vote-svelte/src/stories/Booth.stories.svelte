<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Booth from '../components/Booth.svelte';
</script>

<Meta 
  title="Svelte/Booth"
  component={Booth}
  argTypes={{
    onVote: { action: "onVote" },
  }}
/>

<Template let:args>
  <Booth {...args} on:vote={args.onVote} />
</Template>

<Story 
  name="SimNãoTalvez"
  args={{
    options: ['Sim', 'Não', 'Talvez'],
  }}
/>

<Story 
  name="SimNão"
  args={{
    options: ['Sim', 'Não'],
  }}
/>