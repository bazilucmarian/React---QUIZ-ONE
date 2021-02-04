import React from "react";

const Answer = ({
  variantResponse,
  letter,
  selected,
  currentAnswer,
  handleClick,
}) => {
  return (
    <button
      value={letter}
      selected={selected}
      className={currentAnswer == letter ? "answer selected" : "answer"}
      onClick={handleClick}
    >
      <span className="letter">{letter}</span> - {variantResponse}
    </button>
  );
};

export default Answer;
