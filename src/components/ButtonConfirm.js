import React from "react";

const ButtonConfirm = ({ handleAction, text }) => {
  return (
    <button onClick={handleAction} className="btn btn-primary">
      {text}
    </button>
  );
};

export default ButtonConfirm;
