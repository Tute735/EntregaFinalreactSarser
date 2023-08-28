import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../css/cart.css'
import { Link } from 'react-router-dom'


const Cart = () => {
  const{carrito, precioTotal, vaciarCarrito}=useContext(CartContext)
  const vaciar = () =>{
    vaciarCarrito()
  }
  return (
    <div className='containerCart'>
    <div >
      <h1 className='tituloCart'>Mi Carrito</h1>
      {
            carrito.map((prod) => (
                <div className='datosCart' key={prod.id}>
                  
                    <img className='imgCart' src={prod.imagen} alt="" />
                    <h2 className='nombreCart'>{prod.nombre}</h2>
                    <p className='precioCart'>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p className='cantCart'>Cant: {prod.cantidad}</p>
                </div>
            ))
        }
    </div>
    <div className='finalizarCompra'>
      <h2 className='precioTotal'>Precio Total: ${precioTotal()}</h2>
      <div className='comprarCart'>
      <button onClick><Link to ="/checkout">Finalizar Compra</Link></button>
      </div>
      <div className='vaciarCart'>
      <button  onClick={vaciar}>Vaciar Carrito</button>
      </div>
    </div>
    </div>
    
    
  )
}

export default Cart