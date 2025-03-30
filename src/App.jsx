import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
function App() {
  const [activePlayerSymbol, setActivePlayerSymbol] = useState("X");
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player symbol="X" initialPlayerName="Player 1" isEditing />
          <Player symbol="O" initialPlayerName="Player 2" isEditing />
        </ol>
        <GameBoard activePlayer={activePlayerSymbol} />
      </div>
    </main>
  );
}

export default App;
