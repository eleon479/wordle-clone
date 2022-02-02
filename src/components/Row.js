import React, { useEffect, useState, useContext } from "react";
import { Tile } from "./Tile";
import { GameContext } from "../contexts/GameState";

export const Row = ({ guess, rowIndex }) => {
  const { rowCount, letterCount } = useContext(GameContext);

  console.log(guess);

  const tileList = guess.complete ? guess.letters.split("").map((letter, index) =>
    <Tile charIndex={index} key={index.toString()} letter={letter} />
  ) : Array(letterCount).fill('').map((val, index) =>
    <Tile charIndex={index} key={index.toString()} letter={val} />
  )

  return (
    <div className="Row">
      {tileList}
    </div>
  );
};
