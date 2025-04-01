export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            <h3>
              {turn.player} selected {turn.square.row},{turn.square.col}
            </h3>
          </li>
        );
      })}
    </ol>
  );
}
