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
    default:
      return state;
  }
};
