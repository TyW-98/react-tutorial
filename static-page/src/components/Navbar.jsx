import ReactLogo from "../assets/reactjs-icon.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <img src={ReactLogo} className="react-logo" />
        <h2>ReactFacts</h2>
      </div>

      <h5>React Course - Project 1</h5>
    </div>
  );
}
