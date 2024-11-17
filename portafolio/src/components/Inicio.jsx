import React from "react";

// icons
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import "../styles/inicio.css";

const Inicio = ({ isDarkTheme }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assests/pdfs/dummy.pdf";
    link.download = "dummy.pdf";
    link.click();
  };

  const renderIconButton = (icon) => {
    return (
      <button
        className={`boton-redes ${
          isDarkTheme ? "boton-redes-dark" : "boton-redes-light"
        }`}
      >
        {icon}
      </button>
    );
  };

  return (
    <div
      className={`inicio-container ${
        isDarkTheme ? "container-dark" : "container-light"
      }`}
    >
      <div className={`titulo-container`}>
        <p className={`titulo ${isDarkTheme ? "titulo-dark" : "titulo-light"}`}>
          Alejandro V. Dev
        </p>
        <p
          className={`descripcion ${
            isDarkTheme ? "descripcion-dark" : "descripcion-light"
          }`}
        >
          Mi enfoque es crear soluciones creativas y efectivas para ayudarte a
          destacar. Explora mi trabajo y descubre cómo puedo ayudarte a llevar
          tu proyecto al siguiente nivel.
        </p>
        <div className={"botones-container"}>
          <button
            onClick={handleDownload}
            className={`boton-curriculum ${
              isDarkTheme ? "boton-curriculum-dark" : "boton-curriculum-light"
            }`}
          >
            curriculum <FaDownload />
          </button>
          {renderIconButton(<FaGithub />)}
          {renderIconButton(<FaXTwitter />)}
          {renderIconButton(<FaLinkedin />)}
        </div>
      </div>
      <div className={`imagen-container`}>Imagen</div>
    </div>
  );
};

export default Inicio;
