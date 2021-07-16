<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Result from '../components/Result.svelte';
</script>

<Meta 
  title="Svelte/Result"
  component={Result}
/>

<Template let:args>
  <Result {...args} />
</Template>

<Story 
  name="Exemplo1"
  args={{
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
    votes: [
      { option: 'Sim', count: 6 },
      { option: 'Não', count: 3 },
    ],
  }}
/>