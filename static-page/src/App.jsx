import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  const [toggleMode, setToggleMode] = useState(false);

  function handleToggle() {
    setToggleMode((prevToggleMode) => {
      return !prevToggleMode;
    });
  }

  return (
    <div className="container">
      <Navbar handleToggle={handleToggle} toggleMode={toggleMode} />
      <Main toggleMode={toggleMode} />
    </div>
  );
}

export default App;
