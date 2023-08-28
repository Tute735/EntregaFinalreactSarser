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
          <Link to="/home">Home</Link>
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
          
        <Link to="/aboutus">AboutUs</Link>
        </li>
        <li className="listNav">
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Box className='ContainerCart'>
    <CartWidget></CartWidget>
    </Box>
    </div>
  
  );
}

export default NavBar