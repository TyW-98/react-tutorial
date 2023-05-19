import earthIcon from "../assets/earth-icon.svg";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <img src={earthIcon} className="navbar-icon" />
        <h4>My Travel Journal</h4>
      </div>
    </div>
  );
}
