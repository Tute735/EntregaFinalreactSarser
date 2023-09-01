import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerDatos } from "../helpers/obtenerDatos";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config.js";
import Footer from "./Footer";

const ItemListContainer = () => {
  const categoria = useParams().categoria;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const collectionProd = collection(db, "zapatillas");
    const q = categoria
      ? query(collectionProd, where("categoria", "==", categoria))
      : collectionProd;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);
  return (
    <>
      <>
        <ItemList producto={productos} />
      </>
      <>
        <Footer />
      </>
    </>
  );
};
export default ItemListContainer;
