import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChoosePokemon from "./pages/ChoosePokemon";
import BattleArena from "./pages/BattleArena";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose" element={<ChoosePokemon />} />
        <Route path="/arena" element={<BattleArena />} />
      </Routes>
    </Router>
  );
}

export default App;
