import React, { useEffect, useState } from "react";
import { Tile } from "./Tile";

export const Row = ({ letters }) => {
  console.log(letters);
  return (
    <div className="Row">
      {letters.split("").map((letter) => {
        return <Tile letter={letter} />;
      })}
    </div>
  );
};
