import React from "react";
import ItemCount from "./ItemCount";



const ItemDetail = ({ item }) => {

  

  
  
  return (
   <div>
      <div>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>{item.categoria}</p>
        <ItemCount/>
      </div>
      
    </div>
    
  );
  
};

export default ItemDetail;
