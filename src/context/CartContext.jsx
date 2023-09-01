import React, { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregar = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const carritoNuevo = [...carrito];
    const prodYaAgregado = carritoNuevo.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (prodYaAgregado) {
      prodYaAgregado.cantidad += cantidad;
    } else {
      carritoNuevo.push(itemAgregado);
    }
    setCarrito(carritoNuevo);
  };
  const eliminarProducto = (productoId) => {
    const carritoActualizado = carrito.filter(
      (producto) => producto.id !== productoId
    );
    setCarrito(carritoActualizado);
  };

  const cantidadNumero = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregar,
        cantidadNumero,
        precioTotal,
        vaciarCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
