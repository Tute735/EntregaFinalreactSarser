import React from 'react'
import ItemList from './ItemList'
import imagen from '../assets/img/producto1.jpg'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import obtenerDatos from '../helpers/obtenerDatos';



const ItemListContainer = () => {
  const categoria = useParams().categoria;
  const [productos, setProductos] = useState([]);


useEffect(() => {

obtenerDatos()
  .then((res)=>{
    if(categoria){
      setProductos(res.filter((prod)=> prod.categoria===categoria))
    } else{
      setProductos(res)
    }
  })
},[categoria])
return (
  <>
<ItemList
producto={productos}
/>

</>

)
}



export default ItemListContainer