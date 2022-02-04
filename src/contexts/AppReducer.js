export default (state, action) => {
  switch (action.type) {
    case 'ADD_GUESS':
      return {
        ...state,
        guessRows: state.guessRows.map(guess => {
          if (guess.id === state.activeRow) {
            return {
              id: guess.id,
              letters: action.payload,
              complete: true
            }
          } else {
            return guess
          }
        }),
        activeRow: state.activeRow + 1,
        gameOver: state.activeRow + 1 >= state.rowCount
      }
    case 'END_GAME':
      return {
        ...state,
        gameOver: true,
        message: 'Game over!'
      }
    case 'ADD_LETTER':
      return {
        ...state,
        guessBuffer: state.guessBuffer + action.payload,
        activeLetter: state.activeLetter + 1
      }
    case 'REMOVE_LETTER':
      return {
        ...state,
        guessBuffer: state.guessBuffer.slice(0, -1),
        activeLetter: state.activeLetter - 1
      }
    case 'ENTER_GUESS':
      return {
        ...state,
        // come back to this later and use addGuess for now
      }
    case 'RESET_BUFFER':
      return {
        ...state,
        guessBuffer: ''
      }
    default:
      return state;
  }
};
