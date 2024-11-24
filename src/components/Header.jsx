import React, { useState } from "react";
import "../styles/header.css";

const Header = ({
  isDarkTheme,
  inicioRef,
  portafolioRef,
  aboutRef,
  contactRef,
}) => {
  // estados
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // funciones
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // componente
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
            <a onClick={() => scrollToSection(inicioRef)} href="#inicio">
              Inicio
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection(portafolioRef)}
              href="#portafolio"
            >
              Portafolio
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection(aboutRef)} href="#sobre-mi">
              Sobre mi
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection(contactRef)} href="#contacto">
              Contacto
            </a>
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
