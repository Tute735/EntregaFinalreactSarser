import React from 'react'
import { useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'

const Checkout = () => {
  const{carrito, precioTotal, vaciarCarrito}=useContext(CartContext)
  const{register, handleSubmit}= useForm()
  const comprar = (data) => {
    const pedidoCompleto ={usuario:data, productos:carrito, total:precioTotal()}
    console.log(pedidoCompleto)
  }
  
  
  return (
    <div className='formCheck'>
      <h1 className='titleForm'>Formulario de Compra</h1>
      <form onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Nombre'{...register("nombre")} />
        <input type="phone" placeholder='Numero'{...register("numero")} />
        <input type="email" placeholder='Email'{...register("email")} />
        <button className='ComprarForm' type='sumbit'>Completar</button>
      </form>
    </div>
  )
}

export default Checkout