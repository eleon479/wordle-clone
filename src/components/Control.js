import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameState';

export const Control = () => {
  const { activeRow, letterCount, targetWord, addGuess } = useContext(GameContext);
  const [currentGuess, setCurrentGuess] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    if (currentGuess.length !== letterCount) {
      return;
    }

    // perform word check / validation here...
    // ...

    if (currentGuess.toLowerCase() === targetWord) {
      alert("Game over! You win.");
      // implement some game reset
    } else {
      addGuess(currentGuess);
      setCurrentGuess("");
    }
  };

  return (
    <div>
      Buffer: {currentGuess}<br />
      Active Row: {activeRow}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          maxLength={letterCount}
          placeholder="Enter your guess! ex: HELLO"
        />
      </form>
    </div>
  );
};
