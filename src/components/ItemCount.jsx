
import React, { useState } from 'react'

const ItemCount = () => {
    const [cantidad, setCantidad]= useState(1)
    const sumar = () =>{
        cantidad < 1 && setCantidad(cantidad+1)
    }
    const restar = () =>{
        cantidad > 1 && setCantidad(cantidad-1)
    }
  return (
    <div>
        <button onClick={sumar}>+</button>
        <p>{cantidad}</p>
        <button onClick={restar}>-</button>
    </div>
  )
}

export default ItemCount