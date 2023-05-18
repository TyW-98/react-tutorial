import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";

export default function App() {
  return (
    <>
      <Info />
      <About />
      <Interest />
    </>
  );
}
