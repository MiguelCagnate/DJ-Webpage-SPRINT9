import React from 'react';
import {  NavLink } from "react-router-dom";

export const Navbar= () =>{
    return (
        <div className='NavbarStyle'>     
        <nav>      
        <NavLink className="btn third" to="/Home">HOME</NavLink>      
        <NavLink className="btn third" to="/About">ABOUT</NavLink>   
         <NavLink className="btn third" to="/Sounds">SOUNDS</NavLink>       
         <NavLink className="btn third" to="/Login">LOGIN</NavLink>   
         <NavLink className="btn third" to="/Register">REGISTER</NavLink>   
        </nav>
      </div>
    );
  }