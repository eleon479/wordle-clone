import React, { useEffect, useState, useContext } from "react";
import { Tile } from "./Tile";
import { GameContext } from "../contexts/GameState";

export const Row = ({ letters }) => {
  const context = useContext(GameContext);

  console.log(letters);
  return (
    <div className="Row">
      {letters.split("").map((letter) => {
        return <Tile letter={letter} />;
      })}
    </div>
  );
};
