import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <h1 className="titleForm">Contact Us</h1>
      <div className="containerContact">
        <form className="formContact">
          <input className="inputContact" type="text" placeholder="Nombre" />
          <input className="inputContact" type="phone" placeholder="Numero" />
          <input className="inputContact" type="email" placeholder="Email" />
          <div className="conteinerButtonContact">
            <button className="enviarContact" type="sumbit">
              Completar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
