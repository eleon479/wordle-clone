import { Tile } from "./components/Tile";
import { Row } from "./components/Row";
import { Grid } from "./components/Grid";
import { Control } from "./components/Control";
import "./styles.css";
import React, { useEffect, useState, useContext } from "react";
import { GameProvider, GameContext } from "./contexts/GameState";

export default function App() {
  return (
    <div className="App">
      <GameProvider>
        <Control />
        <Grid />
      </GameProvider>
    </div>
  );
}
