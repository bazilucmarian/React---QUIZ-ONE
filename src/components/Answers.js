import React from "react";
import Answer from "./Answer";

const Answers = ({ question, currentAnswer, handleClick }) => {
  return (
    <>
      <Answer
        variantResponse={question.answer_a}
        letter="a"
        selected={currentAnswer == "a"}
        currentAnswer={currentAnswer}
        handleClick={handleClick}
      />
      <Answer
        variantResponse={question.answer_b}
        letter="b"
        selected={currentAnswer == "b"}
        currentAnswer={currentAnswer}
        handleClick={handleClick}
      />
      <Answer
        variantResponse={question.answer_c}
        letter="c"
        selected={currentAnswer == "c"}
        currentAnswer={currentAnswer}
        handleClick={handleClick}
      />
      <Answer
        variantResponse={question.answer_d}
        letter="d"
        selected={currentAnswer == "d"}
        currentAnswer={currentAnswer}
        handleClick={handleClick}
      />
    </>
  );
};

export default Answers;
