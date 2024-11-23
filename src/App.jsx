import React, { Fragment, useState, useRef } from "react";

// componentes
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Portafolio from "./components/Portafolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// iconos
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

// css
import "./styles/base.css";

function App() {
  // estado para cambio de tema
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const inicioRef = useRef(null);
  const portafolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const message = "Hola!! estoy interesado en tus servicios 😀";

  // cambio de tema
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // volver al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <Header
        isDarkTheme={isDarkTheme}
        inicioRef={inicioRef}
        portafolioRef={portafolioRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <main>
        <Inicio
          isDarkTheme={isDarkTheme}
          inicioRef={inicioRef}
          message={message}
        />
        <Portafolio isDarkTheme={isDarkTheme} portafolioRef={portafolioRef} />
        <About isDarkTheme={isDarkTheme} aboutRef={aboutRef} />
        <Contact isDarkTheme={isDarkTheme} contactRef={contactRef} />
      </main>
      <Footer isDarkTheme={isDarkTheme} message={message} />

      <button
        className={`top-button ${isDarkTheme ? "button-dark" : "button-light"}`}
        onClick={scrollToTop}
      >
        <FaChevronUp />
      </button>

      <button
        className={`theme-button ${
          isDarkTheme ? "button-dark" : "button-light"
        }`}
        onClick={toggleTheme}
      >
        {isDarkTheme ? <FaMoon /> : <MdLightMode />}
      </button>
    </div>
  );
}

export default App;
