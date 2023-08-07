import React from "react";
import ItemCount from "./ItemCount";
import '../css/detail.css'



const ItemDetail = ({ item }) => {

  

  
  
  return (
   <div className="conteinerDetail">
      <div>
        <h2 className="nombreDetail">{item.nombre}</h2>
        <p className="descripcionDetail">{item.descripcion}</p>
        <p className="categoriaDetail">Marca: {item.categoria}</p>
        <ItemCount/>
      </div>
      
    </div>
    
  );
  
};

export default ItemDetail;
