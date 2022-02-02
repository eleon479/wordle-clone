import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameState';
import { Row } from './Row';

export const Grid = () => {
  const { guessRows } = useContext(GameContext);
  return (
    <div className="Grid">
      {guessRows.map((guess, index) => {
        return <Row guess={guess} key={index.toString()} rowIndex={index} />;
      })}
    </div>
  );
};