import React from "react";
import DareCard from "./darecard";
import Button from "../../components/button";
import { useGame } from "../../context/gameContext";

const GameBoard: React.FC = () => {
  const { players, currentPlayerIndex, nextTurn, getCurrentDare } = useGame();

  if (players.length === 0) {
    return <h2>Please add players before starting the game!</h2>;
  }

  return (
    <div className="game-board">
      <h1 className="game-title">It's {players[currentPlayerIndex]?.name}'s Turn!</h1>
      <DareCard dare={getCurrentDare()} />
      <Button text="Next Player" onClick={nextTurn} type="primary" />
    </div>
  );
};

export default GameBoard;
