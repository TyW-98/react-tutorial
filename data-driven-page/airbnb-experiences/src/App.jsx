import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
    </>
  );
}
