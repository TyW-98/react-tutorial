export default function Dice(props) {
  return (
    <div
      className={`dice-container ${props.diceObject.isHeld ? "held-dice" : ""}`}
      onClick={() => props.handleDice(props.diceObject.id)}
    >
      <h5>{props.diceObject.value}</h5>
    </div>
  );
}
