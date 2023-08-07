import React from 'react'
import NavBar from './components/NavBar'
import './index.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/Cart'
const App = () => {
  return (
    
    <BrowserRouter>

    <NavBar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer />}/>
      <Route exact path="/store" element={<ItemListContainer />}/>
      <Route exact path="/home" element ={<Home/>}/>
      <Route exact path="/cart" element ={<Cart/>}/>
      <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element ={<ItemDetailContainer/>}/>
   
    </Routes>
    </BrowserRouter>
 
  )
}

export default App