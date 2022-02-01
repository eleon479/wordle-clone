import { Tile } from "./components/Tile";
import { Row } from "./components/Row";
import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [currentGuess, setCurrentGuess] = useState("");
  const [guessRows, setGuessRows] = useState([]);
  const [activeRow, setActiveRow] = useState(0);
  const rowCount = 5;

  const handleSubmit = (event) => {
    event.preventDefault();

    // perform word check / validation here...
    // ...

    const newGuessRows = guessRows;
    newGuessRows[activeRow] = {
      letters: currentGuess,
      complete: true
    };

    setGuessRows(newGuessRows);
    setActiveRow(activeRow + 1);
    setCurrentGuess("");
  };

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

  // useEffect({});

  return (
    <div className="App">
      Buffer: {currentGuess}
      <br />
      Guess Count:
      <hr />
      <div className="Grid">
        {guessRows.map((guess) => {
          return <Row letters={guess.letters} />;
        })}
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          maxLength="5"
          type="text"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
      </form>
    </div>
  );
}
