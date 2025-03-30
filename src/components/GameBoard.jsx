import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ activePlayer }) {
  const [currentBoard, setCurrentBoard] = useState(initialGameBoard);
  const handleOnClick = (row, col) => {
    setCurrentBoard((prevBoard) => {
      let newBoard = [...prevBoard.map((row) => [...row])];
      newBoard[row][col] = "X";
      return newBoard;
    });
  };

  return (
    <ol id="game-board">
      {currentBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleOnClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
