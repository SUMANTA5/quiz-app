import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "What language is spoken in Brasil?",
    answerOptions: [
      { answerText: "Portugues", isCorrect: true },
      { answerText: "English", isCorrect: false },
      { answerText: "French", isCorrect: false },
      { answerText: "German", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which countries have the highest and lowest life expentancy in the world?",
    answerOptions: [
      { answerText: "Australia and Afghanistan", isCorrect: true },
      { answerText: "Japan and Sierra", isCorrect: false },
      { answerText: "Italy and Chile", isCorrect: false },
      { answerText: "Brasil and Congo", isCorrect: false },
    ],
  },
  {
    questionText: "Which company created the Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How to learn to program?",
    answerOptions: [
      { answerText: "Practising what you learn", isCorrect: true },
      { answerText: "Watching video", isCorrect: false },
      { answerText: "Reading", isCorrect: false },
      { answerText: "Writing", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      setRight(right + 25);
    } else {
      setWrong(wrong + 25);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You Scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <h5>Right Ans</h5>
            <div className="prog">
              <div className="progress w-50" style={{ height: 20 }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: right }}
                  aria-valuemax="100"
                >
                  {right}%
                </div>
              </div>
            </div>

            <h5>Wrong Ans</h5>
            <div className="prog">
              <div className="progress w-50" style={{ height: 20 }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: wrong }}
                  aria-valuemax="100"
                >
                  {wrong}%
                </div>
              </div>
            </div>

            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
