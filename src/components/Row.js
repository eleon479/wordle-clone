import React, { useEffect, useState, useContext } from "react";
import { Tile } from "./Tile";
import { GameContext } from "../contexts/GameState";

export const Row = ({ guess, rowIndex, active }) => {
  const { rowCount, letterCount, guessBuffer } = useContext(GameContext);

  /* 
    left off at implementing new tile list logic
  */
  const tileList = Array[letterCount].map((v, i) => {
    if () {
      return <Tile letter={ } charIndex={i} key={i.toString()} />
    } else {

    }
  })

  useEffect(() => {

  }, [guessBuffer])

  return (
    <div className="Row">

    </div>
  );
};
