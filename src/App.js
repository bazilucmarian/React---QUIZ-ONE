import React, { useState } from "react";
import "./App.css";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";
import ButtonConfirm from "./components/ButtonConfirm";
import Error from "./components/Error";

const App = () => {
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allAnswers, setAllAnswers] = useState([]);
  const [error, setError] = useState("");

  const questions = [
    {
      id: 1,
      question: "Which statement about Hooks is not true?",
      answer_a:
        "Hooks are 100% backwards-compatible and can be used side by side with classes",
      answer_b: "Hooks are still in beta and not available yet",
      answer_c:
        "Hooks are completely opt-in, there's no need to rewrite existing code",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answer_a: "useState()",
      answer_b: "useConst()",
      answer_c: "useReducer()",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answer_a: "useDataFetching()",
      answer_b: "useApi()",
      answer_c: "useEffect()",
      answer_d: "useRequest()",
      correct_answer: "c",
    },
  ];

  const startQuestion = questions[currentIndex];

  const handleClickAnswer = (e) => {
    setCurrentAnswer(e.target.value);
  };

  const nextQuestion = () => {
    setCurrentAnswer("");
    if (!currentAnswer) {
      setError("Please, select a variant !");
      return;
    }
    setError("");

    if (currentIndex < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setAllAnswers([
        ...allAnswers,
        { answerId: startQuestion.id, response: currentAnswer },
      ]);
    }
  };

  const renderResultsMark = (question, answer) => {
    if (question.correct_answer === answer.response) {
      return <span className="correct">True</span>;
    } else {
      return <span className="failed">False</span>;
    }
  };

  const displayAllUserAnswers = () => {
    return allAnswers.map((answer) => {
      const findQuestion = questions.find(
        (question) => question.id === answer.answerId
      );

      return (
        <div key={answer.answerId}>
          {findQuestion.question} - {renderResultsMark(findQuestion, answer)}
        </div>
      );
    });
  };

  const handleRestart = () => {
    setCurrentAnswer("");
    setCurrentIndex(0);
    setAllAnswers([]);
    setError("");
  };

  if (currentIndex === questions.length) {
    return (
      <div className="container results">
        <h2>Results</h2>
        <ul>{displayAllUserAnswers()} </ul>

        <ButtonConfirm text="Restart" handleAction={handleRestart} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Progress
          startPosition={startQuestion.id}
          endPosition={questions.length}
        />
        <Question question={startQuestion.question} />
        {error && <Error errorMessage={error} />}
        <Answers
          question={startQuestion}
          handleClick={handleClickAnswer}
          currentAnswer={currentAnswer}
        />
        <ButtonConfirm
          handleAction={nextQuestion}
          text="Confirm And Continue"
        />
      </div>
    );
  }
};

export default App;
