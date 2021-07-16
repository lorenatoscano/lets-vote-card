<main>
	<VotingCard {votes} {title} {status} />
</main>

<script>
	import VotingCard from './components/VotingCard.svelte';

  let votes = [
    { option: 'Sim', count: 6 },
    { option: 'Não', count: 3 },
    { option: 'Talvez', count: 1 },
  ];

  let title = 'Reunião amanhã';
  let status = 'open';
</script>

<style>

</style>