
import { useState } from 'react';

import '../styles/global.css';

import VotingCard from './VotingCard';
import VotingForm from './VotingForm';

export default function VotingContainer() {
  const [title, setTitle] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [options, setOptions] = useState([]);

  let status = "open";

  function startVotation(data) {
    setTitle(data.title);
    if (Number(data.threeOptions)) {
      setOptions(['Sim', 'Não', 'Talvez']);
    } else {
      setOptions(['Sim', 'Não']);
    }

    setIsStarted(true);
  }

  return (
    <div className="overlay">
      {!isStarted
        ? <VotingForm onStart={startVotation}></VotingForm>
        : <VotingCard title={title} status={status} options={options} />
      }
    </div>
  )
}