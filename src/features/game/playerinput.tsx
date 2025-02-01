import React, { useState } from "react";
import Button from "../../components/button";
import { useGame } from "../../context/gameContext";

const PlayerInput: React.FC = () => {
  const [name, setName] = useState("");
  const { players, addPlayer } = useGame();

  const handleAddPlayer = () => {
    if (name.trim()) {
      addPlayer(name);
      setName(""); // Clear input field after adding a player
    }
  };

  return (
    <div className="player-input">
      <h2 className="player-title">Add Players</h2>
      <input
        type="text"
        className="player-input-field"
        placeholder="Enter player name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button text="Add Player" onClick={handleAddPlayer} type="primary" />

      {/* Display added players */}
      {players.length > 0 && (
        <ul className="player-list">
          {players.map((player: any) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlayerInput;
