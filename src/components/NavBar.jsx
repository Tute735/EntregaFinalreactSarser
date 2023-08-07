import React from 'react'
import CartWidget from './CartWidget';
import { Box } from '@chakra-ui/react';
import { Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="navBar">
      <div className="Brand"><Link to={"/"}>ZneakerZ</Link></div>
      <ul className='NavbarLists'>
      <li className="listNav">
          <a href="/home">Home</a>
        </li>
        <li className="menuDesplegable">
         <Link to={"/"}>
          Store
         </Link>
          <ul className='marcas'>
            <Link to={"/categoria/Nike"}>
            <li>Nike</li>
            </Link>
            <Link to={"/categoria/Adidas"}>
            <li>Adidas</li>
            </Link>
            <Link to={`/categoria/Puma`}>
            <li>Puma</li>
            </Link>
          </ul>

        </li>
      
        <li className="listNav">
          
          <a href="">About Us</a>
        </li>
        <li className="listNav">
          <a href="">Contact</a>
        </li>
      </ul>
      <Box className='ContainerCart'>
    <CartWidget></CartWidget>
    </Box>
    </div>
  
  );
}

export default NavBar