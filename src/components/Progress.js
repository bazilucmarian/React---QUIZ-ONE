import React from "react";

const Progress = ({ startPosition, endPosition }) => {
  return (
    <h1>
      Question {startPosition} of {endPosition}
    </h1>
  );
};

export default Progress;
