import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {UserContext} from './user-context'

export const Navbar = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <div className="wrap">
          <NavLink className="btn third" to="/Home">
            HOME
          </NavLink>
          <NavLink className="btn third" to="/About">
            ABOUT
          </NavLink>
          <NavLink className="btn third" to="/Sounds">
            SOUNDS
          </NavLink>
          {user && (
            <NavLink className="btn third" to="/PressKit">
              PRESS KIT
            </NavLink>
          )}
          <NavLink className="btn third" to="/Login">
            LOGIN
          </NavLink>
          <button className="button" onClick={() => navigate("/Register")}>
            REGISTER
          </button>
        </div>
      </nav>
    </div>
  );
};
