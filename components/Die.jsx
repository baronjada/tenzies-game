export default function Die(props) {
  return (
    <button
      onClick={props.hold}
      className={`die-button + ${props.isHeld ? "held-dice" : null}`}
      aria-pressed={props.isHeld}
      aria-label={`Die with value of ${props.value}, ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>
  );
}
