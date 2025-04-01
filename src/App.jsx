import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

// function derivedActivePlayer(gameTurns) {
//   let activePlayer = "X";

//   if (prevTurn.length > 0 && prevTurn[0].player === "X") {
//     activePlayer = "O";
//   }

//   return activePlayer;
// }
function App() {
  const [gameTurns, setGameturns] = useState([]);
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayerSymbol((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );

    setGameturns((prevTurn) => {
      let activePlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "X") {
        activePlayer = "O";
      }
      let updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurn,
      ];

      return updatedTurn;
    });
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            symbol="X"
            initialPlayerName="Player 1"
            isEditing
            isActive={activePlayerSymbol === "X"}
          />
          <Player
            symbol="O"
            initialPlayerName="Player 2"
            isEditing
            isActive={activePlayerSymbol === "O"}
          />
        </ol>
        <GameBoard
          // activePlayer={activePlayerSymbol}
          turns={gameTurns}
          onSelectSquare={handleSelectSquare}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
