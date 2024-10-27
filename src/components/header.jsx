import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      <div className="navbar-right">
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <div className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          <nav className="navbar-center">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/about" className="nav-link">
              About Us
            </a>
            <a href="/explore" className="nav-link">
              Explore
            </a>
            <a href="/conservation" className="nav-link">
              Conservation
            </a>
            <a href="/contact" className="nav-link">
              Contact Us
            </a>
          </nav>
          <div className="navbar-buttons">
            <button className="button" onClick={toggleMenu}>
              Login
            </button>
            <button className="button" onClick={toggleMenu}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
