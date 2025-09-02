import logo from "../../assets/shared/logo.svg";
import "./navigation.css";
import React from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="Space Tourism Logo" />
        </a>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <div className={`navbar-overlay ${isOpen ? "open" : ""}`}>
        <div className="navbar-close">
          <button
            className="navbar-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">
              <span className="overlay-list-number">00</span>HOME
            </a>
          </li>
          <li>
            <a href="#destinations">
              <span className="overlay-list-number">01</span>DESTINATIONS
            </a>
          </li>
          <li>
            <a href="#crew">
              <span className="overlay-list-number">02</span>CREW
            </a>
          </li>
          <li>
            <a href="#technology">
              <span className="overlay-list-number">03</span>TECHNOLOGY
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
