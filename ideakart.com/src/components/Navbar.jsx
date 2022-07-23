import { ButtonGroup, ChakraProvider } from "@chakra-ui/react";
import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";
import SearchInput, { createFilter } from "react-search-input";
// import { IconName } from "react-icons/fa";
import "./Navbar.css"
import { Link } from "react-router-dom";


const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <ChakraProvider>
    <nav className="navbar">

      <Link to='/'><h1 className="navbar-logo">
        IDEAKART 
      </h1>
     </Link>
      <div style={{marginTop:"-20px"}} className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        <div style={{display:"flex"}}>
        
        <SearchInput 
        
              className="search-input"
            />
              
              <Button colorScheme='blue'>Save</Button>
     
              </div>
        {menuItems.map((item, index) => {
          return (
            
            <li key={index}>
                
              <Link to={item.path} className={item.cName}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
     
    </nav>
    </ChakraProvider>
  );
};

export default Navbar;
