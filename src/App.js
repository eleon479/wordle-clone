import { Grid } from "./components/Grid";
import { Control } from "./components/Control";
import "./styles.css";
import React from "react";
import { GameProvider } from "./contexts/GameState";

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
