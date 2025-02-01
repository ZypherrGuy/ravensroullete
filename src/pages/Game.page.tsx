import Button from "../components/button";
import Header from "../components/header";
import { useGame } from "../context/gameContext";

const Game = () => {
  const { players, currentPlayerIndex, nextTurn, getCurrentDare } = useGame();
  const currentDare = getCurrentDare(); // Gets both type and text

  return (
    <div className="game-container">
      <Header />

      <div className="game-content">
        <h2 className="game-player-name">
          {players[currentPlayerIndex]?.name || "Waiting for players..."}
        </h2>
        
        <div className="dare-card">
          <p className="dare-type">{currentDare.type}</p> {/* Displays Dare Type */}
          <p className="dare-content">{currentDare.text}</p> {/* Displays Dare Text */}
        </div>

        <Button
          className="next-turn-btn"
          text="Next Turn"
          onClick={nextTurn}
          type="primary"
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Game;
