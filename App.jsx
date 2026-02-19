import { useState } from "react";
import { nanoid } from "nanoid";

import Die from "./components/Die";

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice);

  const firstDieValue = dice[0].value;

  const gameWon = dice.every(
    (die) => die.isHeld && die.value === firstDieValue,
  );

  function generateAllNewDice() {
    const newDiceArr = [];
    for (let i = 0; i < 10; i++) {
      const randomNum = Math.ceil(Math.random() * 6);
      newDiceArr.push({
        id: nanoid(),
        value: randomNum,
        isHeld: false,
      });
    }
    return newDiceArr;
  }

  const diceElements = dice.map((dieObj) => {
    return (
      <Die
        key={dieObj.id}
        value={dieObj.value}
        isHeld={dieObj.isHeld}
        hold={() => holdDice(dieObj.id)}
      />
    );
  });

  function rollDice() {
    setDice((prevDice) => {
      return prevDice.map((item) => {
        return item.isHeld === false
          ? { ...item, value: Math.ceil(Math.random() * 6) }
          : item;
      });
    });
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((item) =>
        item.id === id ? { ...item, isHeld: !item.isHeld } : item,
      ),
    );
  }

  return (
    <main>
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice} className="roll-dice-button">
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
