import React from "react";

function Navbar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <h4 className="menu-text">Clicky Game</h4>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <h5>
              Score:<span></span>
            </h5>
          </li>
          <li>
            <h5>
              High Score:<span></span>
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
