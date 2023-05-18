import { useState } from "react";
import "./styling/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="contents">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
