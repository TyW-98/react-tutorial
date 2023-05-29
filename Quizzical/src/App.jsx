import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";

export default function App() {
  const [startGame, setStartGame] = useState(false);

  function handleStartBtn() {
    setStartGame((prevStartGame) => {
      return !prevStartGame;
    });
  }

  return (
    <>
      <div className="top-right-blob"></div>
      {!startGame ? (
        <LandingPage handleStartBtn={handleStartBtn} />
      ) : (
        <QuizPage handleStartBtn={handleStartBtn}/>
      )}
      <div className="bottom-left-blob"></div>
    </>
  );
}
