import { useState } from "react";
import Dice from "./Dice";

export default function Game() {
  function generateRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
  }

  const [diceValues, setDiceValues] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return {
        id: index,
        value: generateRandomNumber(),
        isHeld: false,
      };
    })
  );

  function handleDice(diceId) {
    setDiceValues((prevDiceValues) => {
      return prevDiceValues.map((dice) => {
        return dice.id === diceId
          ? { ...dice, isHeld: !dice.isHeld }
          : { ...dice };
      });
    });
  }

  function handleRoll() {
    setDiceValues((prevDiceValues) => {
      return prevDiceValues.map((dice) => {
        return {
          ...dice,
          value: generateRandomNumber(),
        };
      });
    });
  }

  return (
    <div className="game-container">
      <div className="all-dice-container">
        {diceValues.map((value, index) => {
          return (
            <Dice diceObject={value} key={value.id} handleDice={handleDice} />
          );
        })}
      </div>

      <button className="roll-btn" onClick={handleRoll}>
        ROLL
      </button>
    </div>
  );
}
