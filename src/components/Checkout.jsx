import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [Idcompra, setCompraId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const comprar = (data) => {
    const pedidoCompleto = {
      usuario: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedidoCompleto);
    const pedido = collection(db, "pedido");

    addDoc(pedido, pedidoCompleto).then((doc) => {
      setCompraId(doc.id);
      vaciarCarrito();
    });
  };

  if (Idcompra) {
    return (
      <div className="mensajeCompra">
        <h1 className="tituloCompra">Gracias por comprar en ZNEAKERZ</h1>
        <p className="numPedido">Tu codigo de pedido es: {Idcompra} </p>
        <div className="conteinerButtonCheck"> 
        <Link to = "/home"><button className="buttonCheck">Volver al Home</button></Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 className="titleForm">Formulario de Compra</h1>
      <div className="containerContact">
        <form className="formContact" onSubmit={handleSubmit(comprar)}>
          <input
            className="inputContact"
            type="text"
            placeholder="Nombre"
            {...register("nombre")}
          />
          <input
            className="inputContact"
            type="phone"
            placeholder="Numero"
            {...register("numero")}
          />
          <input
            className="inputContact"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <button className="enviarContact" type="sumbit">
            Completar
          </button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
