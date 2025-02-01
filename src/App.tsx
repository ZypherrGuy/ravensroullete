import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.page";
import Game from "./pages/Game.page";
import MainLayout from "./layouts/main.layout";
import { GameProvider } from "./context/gameContext";

const App = () => {
  return (
    <GameProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </MainLayout>
      </Router>
    </GameProvider>
  );
};

export default App;
