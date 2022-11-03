import React from 'react';
import {  NavLink } from "react-router-dom";

export const Navbar= () =>{
    return (
        <div>     
        <nav>      
        <NavLink style={{marginLeft:"2%", padding: "2%", color:"#00A9FF", fontSize:"19px", textShadow: "2px 2px 5px #0087cc"}} 
        to="/Home">HOME</NavLink>      
        <NavLink style={{marginLeft:"2%", padding: "2%", color:"#00A9FF", fontSize:"19px", textShadow: "2px 2px 5px #0087cc"}} 
        to="/About">ABOUT</NavLink>   
         <NavLink style={{marginLeft:"2%", padding: "2%", color:"#00A9FF", fontSize:"19px", textShadow: "2px 2px 5px #0087cc"}} 
        to="/Sounds">SOUNDS</NavLink>       
         <NavLink style={{marginLeft:"2%", padding: "2%", color:"#00A9FF", fontSize:"19px", textShadow: "2px 2px 5px #0087cc"}} 
        to="/Login">LOGIN</NavLink>   
         <NavLink style={{marginLeft:"2%", padding: "2%", color:"#00A9FF", fontSize:"19px", textShadow: "2px 2px 5px #0087cc"}} 
        to="/Register">REGISTER</NavLink>   
        </nav>
      </div>
    );
  }