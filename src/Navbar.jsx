import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../src/NavbarStyle.css"

import {UserContext} from './user-context'
import "../src/NavbarStyle.css"

export const Navbar = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div >
      <nav  className="wrap" >
        <div>
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
