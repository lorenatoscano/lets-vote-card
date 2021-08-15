<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import VotingContainer from '../components/VotingContainer.svelte';
</script>

<Meta 
  title="Svelte/Demo"
  component={VotingContainer}
/>

<Template let:args>
  <VotingContainer {...args} />
</Template>

<Story 
  name="Demo"
/>