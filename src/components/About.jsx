import React, { useState, useRef, useEffect } from "react";

import "../styles/about.css";

const About = ({ isDarkTheme, aboutRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = aboutRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  console.log(isVisible);

  return (
    <div
      ref={aboutRef}
      className={`about-container ${
        isDarkTheme ? "about-container-dark" : "about-container-light"
      } `}
    >
      <div className={`imagen-about-container`}>
        <div
          className={`imagen-about-wrapper ${
            isDarkTheme
              ? "imagen-about-wrapper-dark"
              : "imagen-about-wrapper-light"
          } ${isVisible ? "imagen-about-animation" : ""}`}
        >
          <img
            src="/assets/img/imagen-personal.png"
            alt="Imagen personal"
            className={"imagen-personal"}
          />
        </div>
      </div>
      <div
        className={`descripcion-about-container ${
          isVisible && "descripcion-about-animation"
        } ${
          isDarkTheme
            ? "descripcion-about-container-dark"
            : "descripcion-about-container-light"
        }`}
      >
        <p
          className={`about-titulo ${
            isDarkTheme ? "about-titulo-dark" : "about-titulo-light"
          }`}
        >
          Hola, soy Alejandro velasquez
        </p>
        <p
          className={`about-descripcion ${
            isDarkTheme ? "about-descripcion-dark" : "about-descripcion-light"
          }`}
        >
          Soy desarrollador web apasionado por crear experiencias digitales
          únicas. Me especializo en{" "}
          <span className="tecnologias">
            [como React, JavaScript, Python y muchas mas]
          </span>{" "}
          y disfruto de los desafíos que permiten transformar ideas en
          soluciones funcionales y visualmente atractivas. Mi enfoque siempre
          está en el detalle, la usabilidad y en asegurar que cada proyecto
          tenga un impacto positivo para el usuario.
        </p>
      </div>
    </div>
  );
};

export default About;
