import React from "react";
import { Link } from "react-router-dom";
import '../css/item.css'

const Item = ( producto ) => {
  return (

  
    <>
      <section className="cards">
        <div>
          <img className="imgcard" src={producto.imagen} alt="" />
        </div>
        <div>
          <h2 className="tituloProd">{producto.nombre}</h2>
        </div>
        <div>
          <p className="precioCard">${producto.precio}</p>
        </div>
        <div className="contDetail">
          <button className="buttonDetail" >
            <Link to={`/item/${producto.id}`}>Mostrar</Link>
          </button>
        </div>
      </section>
    </>
  
  );
};

export default Item;                      
