import React from "react";

// iconos
import { FaDocker } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

import "../styles/portafolio.css";

const Portafolio = ({ isDarkTheme }) => {
  const tecnologiaCard = (icon, nombre, link) => {
    return (
      <a href={link} target="_blank">
        <div
          className={`tecnologia-div ${
            isDarkTheme ? "tecnologia-div-dark" : "tecnologia-dark-light"
          } ${nombre}`}
        >
          <div>{icon}</div>
          <div>{nombre}</div>
        </div>
      </a>
    );
  };

  const proyectoCard = (titulo, descripcion, link) => {
    return (
      <div
        className={`proyecto-card ${
          isDarkTheme ? "proyecto-card-dark" : "proyecto-card-light"
        }`}
      >
        <p className={`proyecto-title`}>{titulo}</p>
        <p className={`proyecto-description`}>{descripcion}</p>
        <a href={link} target="_blank">
          <button
            className={`proyecto-boton ${
              isDarkTheme ? "proyecto-boton-dark" : "proyecto-boton-light"
            }`}
          >
            Ver mas <FaExternalLinkAlt />
          </button>
        </a>
      </div>
    );
  };

  return (
    <div
      className={`portafolio-container ${
        isDarkTheme ? "portafolio-container-dark" : "portafolio-container-light"
      }`}
    >
      <div className="stack-wrapper">
        <p className={`stack-titulo`}>Stack de Desarrollo</p>
        <div className={`tecnologias-container`}>
          {tecnologiaCard(<FaDocker />, "docker", "https://www.docker.com/")}
          {tecnologiaCard(<FaGithub />, "git", "https://github.com/")}
          {tecnologiaCard(
            <IoLogoJavascript />,
            "javascript",
            "https://developer.mozilla.org/es/docs/Web/JavaScript"
          )}
          {tecnologiaCard(<FaPython />, "python", "https://www.python.org/")}
          {tecnologiaCard(
            <SiDjango />,
            "django",
            "https://www.djangoproject.com/"
          )}
          {tecnologiaCard(<FaReact />, "react", "https://es.react.dev/")}
          {tecnologiaCard(
            <FaHtml5 />,
            "html",
            "https://developer.mozilla.org/es/docs/Web/HTML"
          )}
          {tecnologiaCard(
            <FaCss3Alt />,
            "css",
            "https://developer.mozilla.org/es/docs/Web/CSS"
          )}
        </div>
      </div>
      <div className="proyectos-wrapper">
        <p className={`stack-titulo`}>Proyectos</p>
        <div className="proyectos-container">
          {proyectoCard(
            "anki project",
            "Aqui encontraras un proyecto para crear tarjetas de anki desde un script",
            "https://github.com/velasquezgalejandro/anki-project"
          )}
          {proyectoCard(
            "imdb clone",
            "Aqui encontraras un proyecto que clona la pagina de imdb dockerizada",
            "https://github.com/velasquezgalejandro/imdb-clone"
          )}
          {proyectoCard(
            "pyGames test",
            "Aqui encontraras el codigo de un juego creado en la libreria pygames",
            "https://github.com/velasquezgalejandro/py_games_test"
          )}
          {proyectoCard(
            "Otros mas...",
            "Aqui encontraras muchos mas proyectos realizados por este humilde servidor",
            "https://github.com/velasquezgalejandro?tab=repositories"
          )}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
