import React, { useContext, useState } from 'react';
import { GameContext } from '../contexts/GameState';

export const Control = () => {
  const { activeRow, letterCount, targetWord, addGuess, gameOver, endGame, message } = useContext(GameContext);
  const [currentGuess, setCurrentGuess] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();

    if (currentGuess.toLowerCase() === targetWord) {
      alert("Game over! You win.");
      endGame();
      // implement some game reset
    } else {
      if (currentGuess.length === letterCount) {
        addGuess(currentGuess);
        setCurrentGuess("");
      }
    }
  };

  return (
    <div>
      {message}<br />
      Active Row: {activeRow}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
          maxLength={letterCount}
          placeholder="Enter your guess! ex: HELLO"
          disabled={gameOver}
        />
      </form>
    </div>
  );
};
