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
            <button type="button" className="large_button">
              Match Game
            </button>
          </div>
        </Link>
        <Link to="/">
          <div>
            <button type="button" className="large_button disabled">
              Word Game
            </button>
          </div>
        </Link>
        <Link to="/">
          <div>
            <button type="button" className="large_button disabled">
              Spelling Game
            </button>
          </div>
        </Link>
        <Link to="/">
          <div>
            <button type="button" className="large_button disabled">
              Math Game
            </button>
          </div>
        </Link>
      </div>
    </main>
  );
}

export default Home;
