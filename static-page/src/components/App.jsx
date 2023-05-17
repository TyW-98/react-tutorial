import { useState } from "react";
import "./styling/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
