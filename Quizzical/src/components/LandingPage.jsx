export default function LandingPage(props) {
  return (
    <div className="landing-page-container">
      <h1>Quizzical</h1>
      <h5>
        Ignite your intellect with Quizzical's single-player quizzes and embark
        on a solo journey of knowledge and fun.
      </h5>
      <button
        type="submit"
        className="start-btn"
        onClick={props.handleStartBtn}
      >
        Start Quiz
      </button>
    </div>
  );
}
