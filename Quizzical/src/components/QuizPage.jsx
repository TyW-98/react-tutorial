import QuizCard from "./QuizCard";

export default function QuizPage() {
  return (
    <div className="quiz-container">
      <QuizCard />
      <div className="check-answers-btn-container">
        <button type="button" className="check-answers-btn">
          Check answers
        </button>
      </div>
    </div>
  );
}
