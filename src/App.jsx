import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import React from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {Login} from "./pages/Login";
import {Sounds} from "./pages/Sounds";
import { Register } from "./pages/Register";


export function App() {
 

  return (
    <BrowserRouter>

    <div className="App">
      <div>
      <Navbar/>
       <h1 className='TitleStyle'> MILO BEMBÉ</h1>
      </div>
      <Routes className='TitleStyle'>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Sounds" element={<Sounds />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}


