import React from "react";
import ReactLogo from "../assets/reactjs-icon.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <img src={ReactLogo} className="react-logo" />
        <h2>ReactFacts</h2>
      </div>
      <div className="switch">
        <p>Light</p>
        <label className="switch-toggle">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p>Dark</p>
      </div>
    </div>
  );
}
