import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from '../contexts/GameState';

export const Control = () => {
  const { activeRow, letterCount, targetWord, addGuess, gameOver, endGame, message, addLetter, removeLetter, enterGuess, activeLetter, guessBuffer, resetBuffer } = useContext(GameContext);

  const keyListener = (event) => {
    if (event.code === 'Enter') {
      if (guessBuffer.toLowerCase() === targetWord) {
        alert("Game over! You win.");
        endGame();
        // implement some game reset
      } else {
        if (guessBuffer.length === letterCount) {
          addGuess(guessBuffer);
          resetBuffer();
        }
      }
    } else if (event.code === 'Backspace') {
      if (activeLetter > 0) {
        removeLetter();
      }
    } else {
      let keyPress = event.key;
      if (keyPress.length === 1 && keyPress >= 'a' && keyPress <= 'z'
        && guessBuffer.length < letterCount) {
        addLetter(keyPress)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyListener);
    return () => {
      window.removeEventListener('keydown', keyListener);
    }
  })

  console.log('activeRow: ', activeRow);
  console.log('guessBuffer: ', guessBuffer);
  console.log('activeLetter: ', activeLetter);

  return (
    <div>
      {message}<br />
    </div>
  );
};
