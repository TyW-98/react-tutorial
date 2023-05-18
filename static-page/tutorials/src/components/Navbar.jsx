export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="react-logo"
          />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
