import { useState } from "react";
import { dares } from "../data/dares";

export const useGameLogic = () => {
  const [players, setPlayers] = useState<{ id: number; name: string }[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const addPlayer = (name: string) => {
    if (name.trim() && !players.some(player => player.name === name)) {
      setPlayers([...players, { id: players.length + 1, name }]);
    }
  };

  const removePlayer = (id: number) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const nextTurn = () => {
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
  };

  const getCurrentDare = () => {
    const randomDare = dares[Math.floor(Math.random() * dares.length)];
    return { type: randomDare.type, text: randomDare.text };
  };
  

  return { players, addPlayer, removePlayer, currentPlayerIndex, nextTurn, getCurrentDare };
};
