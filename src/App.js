import { Tile } from "./components/Tile";
import { Row } from "./components/Row";
import "./styles.css";
import { useEffect, useState } from "react";
import { GameProvider } from "./contexts/GameState";

export default function App() {
  const [guessRows, setGuessRows] = useState([]);
  const [activeRow, setActiveRow] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const rowCount = 6;
  const letterCount = 5;
  const targetWord = "hello";

  useEffect(() => {
    let buildGuessRows = [];
    for (let i = 0; i < rowCount; i++) {
      buildGuessRows.push({
        letters: "",
        complete: false
      });
    }
    setGuessRows(buildGuessRows);
  }, []);

  useEffect(() => {
    if (activeRow === rowCount) {
      alert("You lose :(");
    }
  }, [activeRow]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentGuess.length !== letterCount) {
      return;
    }

    // perform word check / validation here...
    // ...

    if (currentGuess.toLowerCase() === targetWord) {
      alert("Game over! You win.");
      // implement some game reset
    } else {
      const newGuessRows = guessRows;
      newGuessRows[activeRow] = {
        letters: currentGuess,
        complete: true
      };

      setGuessRows(newGuessRows);
      setActiveRow(activeRow + 1);
      setCurrentGuess("");
    }
  };

  return (
    <GameProvider>
      <div className="App">
        Buffer: {currentGuess}
        <br />
        Active Row: {activeRow}
        <hr />
        <div className="Grid">
          {guessRows.map((guess) => {
            return <Row letters={guess.letters} />;
          })}
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            maxLength={letterCount}
            type="text"
            value={currentGuess}
            onChange={(e) => setCurrentGuess(e.target.value)}
            placeholder="Enter your guess! ex: HELLO"
          />
        </form>
      </div>
    </GameProvider>
  );
}
