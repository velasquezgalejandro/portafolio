import React, { useState } from "react";

import "../styles/contact.css";

const Contact = ({ isDarkTheme, contactRef }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderLabel = (nombre) => {
    return (
      <label
        className={`form-label ${
          isDarkTheme ? "form-label-dark" : "form-label-light"
        }`}
        htmlFor={nombre}
      >
        {nombre}
      </label>
    );
  };

  const renderInput = (nombre, type, value, placeholder = "") => {
    return (
      <div className={`input-wrapper`}>
        {renderLabel(nombre)}
        <input
          className={`contact-input ${
            isDarkTheme ? "contact-input-dark" : "contact-input-light"
          }`}
          type={type}
          id={nombre}
          name={nombre}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      </div>
    );
  };

  const renderTextArea = (nombre, type, value, placeholder = "") => {
    return (
      <div className={`input-wrapper`}>
        {renderLabel(nombre)}
        <textarea
          className={`contact-textarea ${
            isDarkTheme ? "contact-textarea-dark" : "contact-textarea-light"
          }`}
          rows={6}
          type={type}
          id={nombre}
          name={nombre}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      </div>
    );
  };

  return (
    <div
      ref={contactRef}
      className={`contact-container ${
        isDarkTheme ? "contact-container-dark" : "contact-container-light"
      }`}
    >
      <div
        className={`contact-card ${
          isDarkTheme ? "contact-card-dark" : "contact-card-light"
        }`}
      >
        <form action="POST">
          <p
            className={`titulo-form ${
              isDarkTheme ? "titulo-form-dark" : "titulo-form-light"
            }`}
          >
            Contactanos
          </p>
          {renderInput("nombre", "text", formData.nombre)}
          {renderInput("email", "mail", formData.email)}
          {renderInput("asunto", "text", formData.asunto)}
          {renderTextArea("mensaje", "mensaje", formData.mensaje, "test")}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;