import React, { useState } from 'react'
import NavBar from './components/NavBar'
import './index.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
import { CartContext } from './context/CartContext'
import Checkout from './components/Checkout'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
const App = () => {
  const [carrito, setCarrito] = useState([]);
  const agregar = (item, cantidad) =>{
    const itemAgregado ={...item, cantidad}
    const carritoNuevo = [...carrito]
    const prodYaAgregado = carritoNuevo.find((producto)=>producto.id === itemAgregado.id);
    
    if (prodYaAgregado){
      prodYaAgregado.cantidad+=cantidad;
      
    } else{
      carritoNuevo.push(itemAgregado)
      
    }
    setCarrito (carritoNuevo)
    
  }
  const cantidadNumero = () =>{
    return carrito.reduce((acc, prod)=> acc +prod.cantidad, 0)
  }
  const precioTotal = ()=>{
    return carrito.reduce ((acc, prod)=> acc + prod.precio * prod.cantidad, 0)
  }
  const vaciarCarrito= () =>{
    setCarrito([])

  }
  return (
    <CartContext.Provider value={{carrito, agregar, cantidadNumero,precioTotal,vaciarCarrito}}>
    <BrowserRouter>

    <NavBar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path="/store" element={<ItemListContainer />}/>
      <Route exact path="/home" element ={<Home/>}/>
      <Route exact path="/aboutus" element ={<AboutUs/>}/>
      <Route exact path="/contact" element ={<Contact/>}/>
      <Route exact path="/cart" element ={<Cart/>}/>
      <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element ={<ItemDetailContainer/>}/>
      <Route exact path="/checkout" element ={<Checkout/>}/>
   
    </Routes>
    </BrowserRouter>
    </CartContext.Provider>
 
  )
}

export default App