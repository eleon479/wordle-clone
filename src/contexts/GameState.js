import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  guessRows: [
    { id: 0, letters: "", complete: false },
    { id: 1, letters: "", complete: false },
    { id: 2, letters: "", complete: false },
    { id: 3, letters: "", complete: false },
    { id: 4, letters: "", complete: false },
    { id: 5, letters: "", complete: false }
  ]
};

// Create context
export const GameContext = createContext(initialState);

// Provider component
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GameContext.Provider
      value={{
        guessRows: state.guessRows
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
