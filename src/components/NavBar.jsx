import React from 'react'
import CartWidget from './CartWidget';
import { Box } from '@chakra-ui/react';


const NavBar = () => {
  return (
    <div className="navBar">
      <div className="Brand">ZneakerZ</div>
      <ul className='NavbarLists'>
        
        <li className="listNav">
          <a href=""> Store</a>
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