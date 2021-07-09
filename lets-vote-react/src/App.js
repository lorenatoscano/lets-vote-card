import VotingCard from './components/VotingCard';

import './styles/global.css';

function App() {
  return (
    <div className="App">
      <VotingCard title="Reunião amanhã" status="closed" />
    </div>
  );
}

export default App;
