import React from "react";
import "./Modal.css";

function Modal({ handleClose, show, score, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="callout modal-container">
        {children}
        <button type="button" class="alert button" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
