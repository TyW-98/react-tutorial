export default function QuizCard(props) {
  return (
    <div className="quiz-card-container">
      <h3 className="question">{props.question}</h3>
      <div className="answer-container">
        {props.answers.map((answer) => {
          return (
            <button
              type="button"
              className="answer-btn"
              key={props.answers.findIndex((item) => item === answer)}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}
