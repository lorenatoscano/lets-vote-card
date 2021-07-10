import { useEffect, useState } from 'react';

import '../styles/voting-card.css';

import Booth from './Booth';
import Result from './Result';

export default function VotingCard(props) {
  const [options, setOptions] = useState([]);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setOptions(props.votes.map(vote => vote.option));
  }, [props.votes]);

  function vote(index) {
    props.votes[index].count++;
    setStatus("closed");
  }

  return (
    <div className="overlay">
      <div className="card-container">
        <h2 className="title">{props.title}?</h2>
        {status === 'open'
          ? <Booth options={options} onVote={vote} />
          : <Result votes={props.votes} />
        }
      </div>
    </div>
  );
}