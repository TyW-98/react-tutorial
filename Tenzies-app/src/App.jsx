import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Header />
      </div>
    </div>
  );
}
