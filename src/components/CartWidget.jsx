import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'



const CartWidget = () => {
  const {cantidadNumero} = useContext(CartContext)
  return (
    <div className='carrito'>
      <Link to={"/cart"}><i className="bi bi-bag"></i>
        <span className="numero">{cantidadNumero()}</span>
      </Link>

    </div>
    
  )
}

export default CartWidget