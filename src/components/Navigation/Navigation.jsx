import logo from "../../assets/shared/logo.svg";
import "./navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Space Tourism Logo" />
        </NavLink>
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <span className="overlay-list-number">00</span>HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <span className="overlay-list-number">01</span>DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <span className="overlay-list-number">02</span>CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <span className="overlay-list-number">03</span>TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
