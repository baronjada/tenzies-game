export default function Die(props) {
  return (
    <button className={`die-button + ${props.isHeld ? "held-dice" : null}`}>
      {props.value}
    </button>
  );
}
