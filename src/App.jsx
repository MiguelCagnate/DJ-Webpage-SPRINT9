import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import "../src/SocialMedia.css";
import "../src/ButtonStyle.css";
import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Sounds } from "./pages/Sounds";
import { Register } from "./pages/Register";
import { PressKit } from "./pages/PressKit";
import { SocialMedia } from "./components/SocialMedia";

import { UserContext } from "./user-context";

export function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="ContentStyle">
      <BrowserRouter>
     
        <UserContext.Provider value={{ user, setUser }}>

          <Navbar />       

          <Routes className="TitleStyle">
          
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Sounds" element={<Sounds />} />
            <Route path="/PressKit" element={<PressKit user={user} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </UserContext.Provider>
        <footer className="FooterStyle">
          <SocialMedia />
        </footer>
      </BrowserRouter>
    </div>
  );
}
