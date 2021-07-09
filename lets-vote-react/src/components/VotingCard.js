import '../styles/voting-card.css';

export default function VotingCard(props) {
  return (
    <div className="overlay">
      <div className="card-container">
        <h2 class="title">{props.title}?</h2>
        {
          props.status === 'open'
            ? <span>Cabine de votação</span>
            : <span>Resultado</span>
        }
      </div>
    </div>
  );
}