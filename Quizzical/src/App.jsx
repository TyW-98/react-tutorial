import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";

export default function App() {
  return (
    <>
      <div className="top-right-blob"></div>
      <LandingPage />
      <div className="bottom-left-blob"></div>
    </>
  );
}
