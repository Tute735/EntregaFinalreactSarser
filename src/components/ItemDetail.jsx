import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import "../css/detail.css";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregar } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const restar = () => {
    cantidad >= 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="containerDetail">
      <div>
        <h2 className="nombreDetail">{item.nombre}</h2>
        <img className="imgDetail" src={item.imagen} alt="" />
      </div>
      <div className="ContainerDatos">
        <p className="descripcionDetail">{item.descripcion}</p>
        <p className="categoriaDetail">Marca: {item.categoria}</p>
        <ItemCount
          cantidad={cantidad}
          sumar={sumar}
          restar={restar}
          agregar={() => {
            agregar(item, cantidad);
          }}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
