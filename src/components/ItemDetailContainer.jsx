import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import obtenerId from '../helpers/obtenerDatos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
const [item, setItem]=useState(null)
const id = useParams().id;
    useEffect(()=>{
        obtenerId(Number(id))
            .then((res)=>{
                setItem(res)
            })
    },[id])

    return (
        <>
        {item && <ItemDetail item={item}/>}
    
        </>
  )
}

export default ItemDetailContainer