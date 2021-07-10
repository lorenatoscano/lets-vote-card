import { useEffect, useState } from "react";

export default function Result(props) {
  const [totalVotes, setTotalVotes] = useState(1);

  const result = props.votes.map((vote, index) => (
    <p key={index.toString()}>
      {index + 1}. {vote.option} - {vote.count} votos ({calculatePercentage(vote.count)}%)
    </p>
  ));

  function calculatePercentage(value) {
    return Math.round(100 * value / totalVotes);
  }

  useEffect(() => {
    let aux = 0;
    for (let vote of props.votes) {
      aux += vote.count;
      console.log(aux);
    }
    setTotalVotes(aux);
  }, [props.votes]);

  return (
    <div>
      {result}
    </div>
  );
}