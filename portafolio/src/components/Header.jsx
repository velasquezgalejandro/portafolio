import React, { useState } from "react";
import "../styles/header.css";

const Header = ({ isDarkTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`header ${isDarkTheme ? "header-dark" : "header-light"}`}
    >
      <div className="title">Alejandro V. DEV</div>
      <nav
        className={`nav ${isMenuOpen ? "open" : ""} ${
          isDarkTheme ? "nav-dark" : "nav-light"
        }`}
      >
        <ul>
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#portafolio">Portafolio</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mi</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
