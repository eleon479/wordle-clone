import React, { useContext, useState, useEffect } from "react";
import { GameContext } from "../contexts/GameState";

export const Tile = ({ letter, charIndex }) => {
  const guessResultMap = {
    correct: 'Tile correct',
    wrong: 'Tile wrong',
    empty: 'Tile empty'
  }

  const { targetWord } = useContext(GameContext);
  const [guessResult, setGuessResult] = useState(guessResultMap.empty);

  useEffect(() => {
    if (letter === targetWord.charAt(charIndex)) {
      setGuessResult(guessResultMap.correct)
    } else if (letter) {
      setGuessResult(guessResultMap.wrong)
    } else {
      setGuessResult(guessResultMap.empty)
    }
  }, [letter])

  return <div className={guessResult}>{letter}</div>;
};