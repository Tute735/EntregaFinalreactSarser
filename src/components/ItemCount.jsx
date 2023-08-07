import '../css/itemcount.css'
import React, { useState } from 'react';

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const restar = () => {
    cantidad >= 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className='count'>
      <button className='botonSumar' onClick={sumar}>+</button>
      <p className='cantidad'>{cantidad}</p>
      <button className='botonRestar' onClick={restar}>-</button>
    </div>
  );
};

export default ItemCount;