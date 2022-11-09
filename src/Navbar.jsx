import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../src/NavbarStyle.css";
import { UserContext } from "./user-context";
import { Weather } from "./components/Weather";

export const Navbar = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className="wrap">
      <nav>
        <Weather />
        <NavLink className="btn-one" to="/Home">
          HOME
        </NavLink>
        <NavLink className="btn-one" to="/About">
          ABOUT
        </NavLink>
        <NavLink className="btn-one" to="/Sounds">
          SOUNDS
        </NavLink>
        {user && (
          <NavLink className="btn-one" to="/PressKit">
            PRESSKIT
          </NavLink>
        )}
        <NavLink className="btn-one" to="/Login">
          LOGIN
        </NavLink>
        <button className="button" onClick={() => navigate("/Register")}>
          REGISTER
        </button>
      </nav>
    </div>
  );
};
