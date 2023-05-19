import trollFaceIcon from "../assets/troll-icon.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-branding">
        <img src={trollFaceIcon} className="navbar-icon" />
        <h3>Image Generator</h3>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
}
