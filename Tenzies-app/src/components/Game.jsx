import { useState } from "react";
import Dice from "./Dice";

export default function Game() {
  const [value, setValue] = useState(
    Array.from({ length: 10 }, (_, index) => index + 1)
  );
  console.log(value);
  return (
    <div className="game-container">
      <div className="all-dice-container">
        {value.map((item, index) => {
          return <Dice value={item} key={index} />;
        })}
      </div>

      <button className="roll-btn">ROLL</button>
    </div>
  );
}
