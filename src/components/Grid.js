import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameState';
import { Row } from './Row';

export const Grid = () => {
  const { guessRows, activeRow, guessBuffer } = useContext(GameContext);
  return (
    <div className="Grid">
      {guessRows.map((guess, index) => {
        if (activeRow === index) {
          return <Row active={true} guess={guessBuffer} key={index.toString()} rowIndex={index} />
        }

        return <Row guess={guess} key={index.toString()} rowIndex={index} />;
      })}
    </div>
  );
};