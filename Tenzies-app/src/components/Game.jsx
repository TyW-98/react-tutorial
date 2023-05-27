import { useState } from "react";
import Dice from "./Dice";

export default function Game() {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
  }

  const [diceValues, setDiceValues] = useState(
    Array.from({ length: 10 }, (_, index) => generateRandomNumber())
  );

  return (
    <div className="game-container">
      <div className="all-dice-container">
        {diceValues.map((value, index) => {
          return <Dice value={value} key={index} />;
        })}
      </div>

      <button className="roll-btn">ROLL</button>
    </div>
  );
}
