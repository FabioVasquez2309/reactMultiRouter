import { useContext } from "react";
import { NavLink, replace, useNavigate } from "react-router-dom"
import Context from "../contexto/Context";

const NavBar = () => {
    const navegacion=useNavigate();
    const {deslogearse}=useContext(Context)
    const logout=()=>{
      navegacion('/login', {replace:true})
      deslogearse();
    }
  return (
    <>
      <nav>
        <nav>
            <NavLink to="/cp">Capital y Patagonia</NavLink>
            <NavLink to="/no">Norte y Este</NavLink>
            <NavLink to="/viaje">Mi Viaje</NavLink>
        </nav> 
        <button onClick={logout}>Logout</button>
      </nav>
    </>
  )
}

export default NavBar
