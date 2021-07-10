import VotingCard from './components/VotingCard';

import './styles/global.css';

function App() {
  var votes = [
    { option: 'Sim', count: 6 },
    { option: 'Não', count: 3 },
    { option: 'Talvez', count: 1 },
  ];

  return (
    <div className="App">
      <VotingCard title="Reunião amanhã" status="open" votes={votes} />
    </div>
  );
}

export default App;
