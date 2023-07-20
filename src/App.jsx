import React from 'react'
import NavBar from './components/NavBar'
import './index.css'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer
    greeting="Bienvenidos a ZneakerZ"
    />
    </>

    
  )
}

export default App