import React, { useState } from "react";
import "./header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

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
        <div className="navbar-auth">
          <button className="button">Login</button>
          <button className="button">Sign Up</button>
        </div>
      </nav>

      <div className="navbar-right">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
