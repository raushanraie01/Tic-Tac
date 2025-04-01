import { useState } from "react";

export default function Player({ symbol, initialPlayerName, isActive }) {
  const [isEditing, setIsEdiiting] = useState(false);
  const [PlayerName, setPlayerName] = useState(initialPlayerName);
  const handleOnClick = () => {
    setIsEdiiting((prev) => !prev);
  };

  const handleOnChange = (e) => {
    setPlayerName(e.target.value);
  };

  let name = <span className="player-name">{PlayerName}</span>;
  if (isEditing) {
    name = (
      <input
        type="text"
        required
        value={PlayerName}
        onChange={handleOnChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleOnClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
