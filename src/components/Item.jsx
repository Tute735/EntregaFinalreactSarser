import React from "react";
import { Link } from "react-router-dom";
import '../css/item.css'

const Item = ({ nombre, descripcion, stock, imagen, id }) => {
  return (
    <>
      <section className="cards">
        
        <div>
          <h2 className="tituloProd">{nombre}</h2>
        </div>
        <div>
          <p className="descripcion">{descripcion}</p>
        </div>
        <div className="contDetail">
          <button className="buttonDetail" >
            <Link to={`/item/:${id}`}>Mostrar</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default Item;  
