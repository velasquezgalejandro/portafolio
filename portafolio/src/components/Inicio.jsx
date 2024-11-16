import React from "react";
import "../styles/inicio.css";

const Inicio = ({ isDarkTheme }) => {
  return (
    <div
      className={`inicio-container ${
        isDarkTheme ? "container-dark" : "container-light"
      }`}
    >
      <div>nombre y descripcion</div>
      <div>Imagen</div>
    </div>
  );
};

export default Inicio;
