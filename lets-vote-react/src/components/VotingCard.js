import { useEffect, useState } from 'react';

import Booth from './Booth';
import Result from './Result';

export default function VotingCard(props) {
  const [status, setStatus] = useState(props.status);
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    setVotes(props.options.map(option => {
      return { option: option, count: 0 }
    }));
  }, [props.options]);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  function vote(index) {
    votes[index].count++;
    setStatus('closed');
  }

  return (
    <div className="card-container">
      <h2 className="title">{props.title}</h2>
      {status === 'open'
        ? <Booth options={props.options} onVote={vote} />
        : <Result votes={votes} />
      }
    </div>
  );
}