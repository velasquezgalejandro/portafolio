import React, { Fragment, useState, useRef } from "react";

// componentes
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Portafolio from "./components/Portafolio";
import About from "./components/About";
import Contact from "./components/Contact";

// iconos
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

// css
import "./styles/base.css";

function App() {
  // estado para cambio de tema
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const inicioRef = useRef(null);
  const portafolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // cambio de tema
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
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
        <Inicio isDarkTheme={isDarkTheme} inicioRef={inicioRef} />
        <Portafolio isDarkTheme={isDarkTheme} portafolioRef={portafolioRef} />
        <About isDarkTheme={isDarkTheme} aboutRef={aboutRef} />
        <Contact isDarkTheme={isDarkTheme} contactRef={contactRef} />
      </main>

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
