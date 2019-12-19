import React from "react";

function Navbar({ score, highScore }) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <h4 className="menu-text">Clicky Game</h4>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <h5 className="menu-text">
              Score: <span>{score}</span>
            </h5>
          </li>
          <li>
            <h5 className="menu-text">
              High Score: <span>{highScore}</span>
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
