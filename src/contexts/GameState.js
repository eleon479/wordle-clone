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
  ],
  activeRow: 0,
  rowCount: 6,
  letterCount: 5,
  targetWord: 'hello'
};

// Create context
export const GameContext = createContext(initialState);

// Provider component
export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addGuess(guess) {
    dispatch({
      type: 'ADD_GUESS',
      payload: guess
    })
  }

  return (
    <GameContext.Provider
      value={{
        guessRows: state.guessRows,
        activeRow: state.activeRow,
        rowCount: state.rowCount,
        letterCount: state.letterCount,
        targetWord: state.targetWord,
        addGuess
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
