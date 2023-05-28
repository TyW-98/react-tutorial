import { useState, useEffect } from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

export default function Game() {
  const { width, height } = useWindowSize();
  const { numberOfRolls, setNumberOfRolls } = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6 + 1);
  }

  const [diceValues, setDiceValues] = useState(
    Array.from({ length: 10 }, (_, index) => {
      return {
        id: nanoid(),
        value: generateRandomNumber(),
        isHeld: false,
      };
    })
  );

  const [gameStatus, setGameStatus] = useState(false);

  function handleDice(diceId) {
    setDiceValues((prevDiceValues) => {
      return prevDiceValues.map((dice) => {
        return dice.id === diceId ? { ...dice, isHeld: !dice.isHeld } : dice;
      });
    });
  }

  // function handleRoll() {
  //   setDiceValues((prevDiceValues) => {
  //     if (!gameStatus) {
  //       return prevDiceValues.map((dice) => {
  //         return dice.isHeld
  //           ? { ...dice }
  //           : {
  //               ...dice,
  //               value: generateRandomNumber(),
  //             };
  //       });
  //     } else {
  //       return prevDiceValues.map(() => {
  //         return {
  //           id: nanoid(),
  //           value: generateRandomNumber(),
  //           isHeld: false,
  //         };
  //       });
  //     }
  //   });
  // }

  function handleRoll() {
    setDiceValues((prevDiceValues) => {
      return !gameStatus
        ? prevDiceValues.map((dice) => {
            return dice.isHeld
              ? { ...dice }
              : { ...dice, value: generateRandomNumber() };
          })
        : prevDiceValues.map(() => {
            return {
              id: nanoid(),
              value: generateRandomNumber(),
              isHeld: false,
            };
          });
    });
  }

  function countUniqueNumbers() {
    const uniqueNumbers = new Set(
      diceValues.map((dice) => {
        return dice.value;
      })
    );
    return uniqueNumbers;
  }

  useEffect(() => {
    setGameStatus(
      countUniqueNumbers().size === 1 && diceValues.every((dice) => dice.isHeld)
        ? true
        : false
    );
  }, [diceValues]);

  return (
    <div className="game-container">
      {gameStatus && <Confetti width={width} height={height} />}
      <div className="all-dice-container">
        {diceValues.map((value, index) => {
          return (
            <Dice diceObject={value} key={value.id} handleDice={handleDice} />
          );
        })}
      </div>
      <button className="roll-btn" onClick={handleRoll}>
        {gameStatus ? "PLAY AGAIN" : "ROLL"}
      </button>
    </div>
  );
}
