import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../contexts/GameState";

export const Tile = ({ letter, charIndex }) => {
  const results = {
    CORRECT: 'Tile correct',
    WRONG: 'Tile wrong',
    EMPTY: 'Tile empty'
  }

  const { targetWord } = useContext(GameContext);
  const [guessResult, setGuessResult] = useState(results.EMPTY);

  useEffect(() => {
    const resultType = (letter === targetWord.charAt(charIndex)) ? results.CORRECT : results.WRONG
    if (letter) {
      setGuessResult(resultType)
    } else {
      setGuessResult(results.EMPTY)
    }
  }, [letter])

  return <div className={guessResult}>{letter}</div>;
};