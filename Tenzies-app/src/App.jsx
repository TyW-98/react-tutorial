import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Header />
        <Game />
      </div>
    </div>
  );
}
