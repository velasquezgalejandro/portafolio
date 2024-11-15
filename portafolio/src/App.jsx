import React, { Fragment, useState } from "react";

// componentes
import Header from "./components/Header";
import Inicio from "./components/Inicio";

// iconos
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

// css
import "./styles/base.css";

function App() {
  // estado para cambio de tema
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // cambio de tema
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="container">
      <Header isDarkTheme={isDarkTheme} />
      <main>
        <Inicio isDarkTheme={isDarkTheme} />
        <button
          className={`theme-button ${
            isDarkTheme ? "button-dark" : "button-light"
          }`}
          onClick={toggleTheme}
        >
          {isDarkTheme ? <FaMoon /> : <MdLightMode />}
        </button>
      </main>
    </div>
  );
}

export default App;
