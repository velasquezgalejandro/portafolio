import React from "react";

// icons
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import "../styles/inicio.css";

const Inicio = ({ isDarkTheme, inicioRef }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assests/pdfs/dummy.pdf";
    link.download = "dummy.pdf";
    link.click();
  };

  const renderIconButton = (icon, link) => {
    return (
      <a href={link} target="_blank">
        <button
          className={`boton-redes ${
            isDarkTheme ? "boton-redes-dark" : "boton-redes-light"
          }`}
        >
          {icon}
        </button>
      </a>
    );
  };

  return (
    <div
      ref={inicioRef}
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
          {renderIconButton(
            <FaGithub />,
            "https://github.com/velasquezgalejandro"
          )}
          {renderIconButton(
            <FaXTwitter />,
            "https://x.com/alejand91422268?s=09"
          )}
          {renderIconButton(<FaLinkedin />, "https://co.linkedin.com/")}
        </div>
      </div>
      <div className={`imagen-container`}>
        <div className={"imagen-wrapper"}>
          <img
            className={"imagen-codigo"}
            src="/assets/img/carbon.png"
            alt="Imagen con codigo"
          />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
