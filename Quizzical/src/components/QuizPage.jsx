import { useState, useEffect } from "react";
import QuizCard from "./QuizCard";
import { nanoid } from "nanoid";

export default function QuizPage(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(
          data.results.map((q) => ({
            ...q,
            id: nanoid(),
            options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
          }))
        );
      });
  }, []);

  function handleCheckAnswers(event) {
    event.preventDefault();
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  console.log(questions[0].correct_answer);

  return (
    <div className="quiz-container">
      <h5 className="back-btn" onClick={props.handleStartBtn}>
        ← Back
      </h5>
      {questions.map((q) => (
        <QuizCard key={q.id} question={q.question} answers={q.options} />
      ))}
      <div className="check-answers-btn-container">
        <button
          type="button"
          className="check-answers-btn"
          onClick={(event) => handleCheckAnswers(event)}
        >
          Check answers
        </button>
      </div>
    </div>
  );
}
