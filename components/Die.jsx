export default function Die(props) {
  return (
    <button
      onClick={props.hold}
      className={`die-button + ${props.isHeld ? "held-dice" : null}`}
    >
      {props.value}
    </button>
  );
}
