import React from "react";
import Item from "./Item";

const ItemList = ({ producto }) => {
  return (
    <>
      {producto.map((producto) => {
        return (
          <Item
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            stock={producto.stock}
            
            categoria={producto.categoria}
          />
        );
      })}
    </>
  );
};

export default ItemList;
