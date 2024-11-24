import React from "react";

// icons
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import "../styles/footer.css";

const Footer = ({ isDarkTheme, message }) => {
  // render
  const renderIconButton = (icon, link) => {
    return (
      <a href={link} target="_blank">
        <button className={`boton-redes-footer`}>{icon}</button>
      </a>
    );
  };

  //componente
  return (
    <footer
      className={`footer ${isDarkTheme ? "footer-dark" : "footer-light"}`}
    >
      <p
        className={`frase-final ${
          isDarkTheme ? "frase-final-dark" : "frase-final-light"
        }`}
      >
        Siempre en busca de nuevos desafíos.
      </p>
      <div className={`redes-container`}>
        {renderIconButton(
          <FaGithub />,
          "https://github.com/velasquezgalejandro"
        )}
        {renderIconButton(<FaXTwitter />, "https://x.com/alejand91422268?s=09")}
        {renderIconButton(<FaLinkedin />, "https://co.linkedin.com/")}
        {renderIconButton(
          <FaWhatsapp />,
          `https://wa.me/3004074477?text=${encodeURIComponent(message)}`
        )}
      </div>
      <p className="copyright">
        <span className="bold">&copy; 2024 Alejandro V DEV.</span> Todos los
        derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
