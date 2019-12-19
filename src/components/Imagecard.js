import React from "react";

function Imagecard({ image }) {
  return (
    <div class="cell small-2">
      <div className="card">
        <img alt={image} src={image} />
      </div>
    </div>
  );
}

export default Imagecard;
