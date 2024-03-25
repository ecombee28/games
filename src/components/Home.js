import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import "../css/button.css";
function Home() {
  return (
    <main className="container">
      <div className="main_selection">
        <div>
          <h1>Select which game you want to play</h1>
        </div>

        <Link to="/matchgame">
          <div>
            <button className="large_button">Match Game</button>
          </div>
        </Link>
        <Link to="/">
          <div>
            <button className="large_button">Word Game</button>
          </div>
        </Link>
        <Link to="/">
          <div>
            <button className="large_button">Spelling Game</button>
          </div>
        </Link>
        <Link to="/">
          <div>
            <button className="large_button">Math Game</button>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Home;
