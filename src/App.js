import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import "./css/button.css";
import MatchGame from "./components/MatchGame.js";
import Home from "./components/Home.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/matchgame" element={<MatchGame />} />
      </Routes>
    </div>
  );
}

export default App;
