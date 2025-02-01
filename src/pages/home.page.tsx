import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/gameContext";
import Button from "../components/button";

const Home = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const { players, addPlayer, removePlayer } = useGame();
  const navigate = useNavigate();

  const handleAddPlayer = () => {
    if (!name.trim()) {
      setError("Name cannot be empty!");
      return;
    }
    setError("");
    addPlayer(name);
    setName("");
  };

  const handleStartGame = () => {
    if (players.length > 0) {
      navigate("/game");
    }
  };

  return (
    <div className="home-container">
      {/* Logo */}
      <div className="logo-container">
        <img src="/raven-logo.png" alt="Raven's Roulette Logo" className="game-logo" />
      </div>

      {/* Start Game Button */}
      <Button 
        className="start-game-btn" 
        text="Start Game" 
        onClick={handleStartGame} 
        type="primary" 
        disabled={players.length === 0} 
      />

      {/* Input with Add Button */}
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter player name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <button className="add-btn" onClick={handleAddPlayer}>+</button>
      </div>
      {error && <p className="input-error-message">{error}</p>}

      {/* Player List Container */}
      <div className="player-list-wrapper">
        {players.length > 0 && (
          <div className="player-list-container">
            {players.map((player) => (
              <div key={player.id} className="player-item">
                {player.name}
                <button onClick={() => removePlayer(player.id)} className="remove-btn">❌</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
