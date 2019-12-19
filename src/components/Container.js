import React from "react";

function Container(props) {
  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">{props.children}</div>
    </div>
  );
}

export default Container;
