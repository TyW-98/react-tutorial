import QuizCard from "./QuizCard";

export default function QuizPage(props) {
  return (
    <div className="quiz-container" onClick={props.handleStartBtn}>
      <h5 className="back-btn">← Back</h5>
      <QuizCard />
      <div className="check-answers-btn-container">
        <button type="button" className="check-answers-btn">
          Check answers
        </button>
      </div>
    </div>
  );
}
