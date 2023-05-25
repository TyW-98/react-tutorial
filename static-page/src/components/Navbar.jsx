import React from "react";
import ReactLogo from "../assets/reactjs-icon.svg";

export default function Navbar(props) {
  return (
    <div
      className={`navbar-container ${
        props.toggleMode ? "navbar-darkmode" : "navbar-lightmode"
      }`}
    >
      <div>
        <img src={ReactLogo} className="react-logo" />
        <h2>ReactFacts</h2>
      </div>
      <div
        className={`switch ${
          props.toggleMode ? "switch-dark-mode" : "switch-light-mode"
        }`}
      >
        <p>Light</p>
        <label className="switch-toggle">
          <input type="checkbox" />
          <span
            className="slider round"
            onClick={props.handleToggle}
            value={props.toggleMode}
          ></span>
        </label>
        <p>Dark</p>
      </div>
    </div>
  );
}
