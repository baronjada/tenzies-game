import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice);

  function generateAllNewDice() {
    const newDiceArr = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 6);
      newDiceArr.push({
        id: nanoid(),
        value: randomNum,
        isHeld: true,
      });
    }
    return newDiceArr;
  }

  const diceElements = dice.map((dieObj) => {
    return <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />;
  });

  function rollDice() {
    setDice(generateAllNewDice);
  }

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-dice-button">
        Roll
      </button>
    </main>
  );
}
