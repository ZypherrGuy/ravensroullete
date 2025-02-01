import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1 className="logo" onClick={() => navigate("#")}>Raven's Roulette</h1>
    </header>
  );
};

export default Header;
