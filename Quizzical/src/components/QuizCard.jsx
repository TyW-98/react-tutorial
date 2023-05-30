import { useState, useEffect } from "react";
import { decode } from "html-entities";

export default function QuizCard(props) {
  function findOptionIndex(answer) {
    return (
      props.answers.findIndex((item) => item === answer) ===
      props.data.selectedOption
    );
  }

  return (
    <div className="quiz-card-container">
      <h3 className="question">{props.question}</h3>
      <div className="answer-container">
        {props.answers.map((answer) => {
          return (
            <button
              type="button"
              className={`answer-btn ${
                props.gameStatus
                  ? props.data.correct_answer ===
                    props.data.options[props.data.selectedOption]
                    ? findOptionIndex(answer)
                      ? "correct-answer"
                      : ""
                    : findOptionIndex(answer)
                    ? "wrong-answer"
                    : answer === props.data.correct_answer
                    ? "corrected-answer"
                    : ""
                  : findOptionIndex(answer)
                  ? "selected-answer"
                  : ""
              }`}
              key={props.answers.findIndex((item) => item === answer)}
              onClick={(event) =>
                props.handleAnswers(
                  event,
                  props.data.id,
                  props.answers.findIndex((item) => item === answer)
                )
              }
            >
              {decode(answer)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
