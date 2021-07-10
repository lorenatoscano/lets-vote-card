
import '../styles/booth.css';

export default function Booth(props) {
  const options = props.options.map((option, index) => (
    <button key={index} onClick={() => props.onVote(index)}>{option}</button>
  ))

  return (
    <div className="booth-container">
      {options}
    </div>
  );
}