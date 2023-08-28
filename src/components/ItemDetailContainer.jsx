import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { obtenerId } from '../helpers/obtenerDatos'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from "firebase/firestore"
import {db} from "../firebase/config.js"

const ItemDetailContainer = () => {
const [item, setItem]=useState(null)
const id = useParams().id;
    useEffect(()=>{
      const docRef = doc(db, "zapatillas", id)
      getDoc(docRef)
      .then((resp)=>{
         setItem(
            {...resp.data(), id: resp.id}
         )
      })
    },[id])

    return (
        <>
        {item && <ItemDetail item={item}/>}
    
        </>
  )
}

export default ItemDetailContainer