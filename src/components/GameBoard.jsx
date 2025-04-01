// import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ turns, onSelectSquare }) {
  // const [currentBoard, setCurrentBoard] = useState(initialGameBoard);
  // const handleOnClick = (row, col) => {
  // setCurrentBoard((prevBoard) => {
  //   let newBoard = [...prevBoard.map((row) => [...row])];
  //   newBoard[row][col] = activePlayer;
  //   return newBoard;
  // });
  // onSelectSquare();
  // };

  let currentBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    console.log(row, col);

    currentBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {currentBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
