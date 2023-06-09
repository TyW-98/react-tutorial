import { useState, useEffect } from "react";
import QuizCard from "./QuizCard";
import { nanoid } from "nanoid";
import BeatLoader from "react-spinners/BeatLoader";
import { decode } from "html-entities";

export default function QuizPage(props) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameStatus, setGameStatus] = useState(false);
  const [score, setScore] = useState(0);
  const [allAnswerSelected, setAllAnswerSelected] = useState(false);

  useEffect(() => {
    console.log("useEffect running");
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(
          data.results.map((q) => ({
            ...q,
            id: nanoid(),
            options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
            question: decode(q.question),
            selectedOption: null,
          }))
        );
      })
      .then(() => setLoading(false));
  }, []);

  function handleCheckAnswers() {
    questions.every((q) => q.answered)
      ? (setGameStatus(true), setAllAnswerSelected(false), calculateScore())
      : setAllAnswerSelected(true);
  }

  function resetGame() {
    console.log("resetgame running");
    setScore(0);
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(
          data.results.map((q) => ({
            ...q,
            id: nanoid(),
            options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
            question: decode(q.question),
            selectedOption: null,
          }))
        );
      })
      .then(() => setGameStatus(false))
      .then(() => setLoading(false));
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleAnswers(event, questionId, answerId) {
    event.preventDefault();
    setQuestions((prevQuestions) => {
      return prevQuestions.map((q) => {
        return q.id === questionId
          ? {
              ...q,
              selectedOption: answerId,
              answered: true,
            }
          : q;
      });
    });
  }

  function calculateScore() {
    setScore((prevScore) => {
      let newScore = prevScore;
      questions.map((q) => {
        if (q.correct_answer === q.options[q.selectedOption]) {
          newScore++;
        }
      });
      return newScore;
    });
  }

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <div className="loading-component">
            <BeatLoader color="#2019a8" size={25} speedMultiplier={0.6} />
          </div>
        </div>
      ) : (
        <div className="quiz-container">
          <h5 className="back-btn" onClick={props.handleStartBtn}>
            ← Back
          </h5>
          {questions.map((q) => (
            <QuizCard
              key={q.id}
              data={q}
              question={q.question}
              answers={q.options}
              gameStatus={gameStatus}
              handleAnswers={handleAnswers}
            />
          ))}
          <div className="check-answers-btn-container">
            {gameStatus ? <h3>You scored {score}/5</h3> : ""}
            <button
              type="button"
              className="check-answers-btn"
              onClick={
                !gameStatus ? () => handleCheckAnswers() : () => resetGame()
              }
            >
              {gameStatus ? "Play Again" : "Check Answers"}
            </button>
          </div>
          {allAnswerSelected && (
            <h3 className="warning-msg">
              You have to select one option for each question
            </h3>
          )}
        </div>
      )}
    </div>
  );
}
// *TODO: Set style when option is clicked & Check if answer is correct or not
