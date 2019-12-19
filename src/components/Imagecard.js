import React from "react";

function Imagecard({ image, onClick }) {
  return (
    <div className="cell small-2">
      <div className="card">
        <img alt={image} src={image} onClick={onClick} />
      </div>
    </div>
  );
}

export default Imagecard;
