import CartWidget from "./Cartwidget";
import { NavLink } from "react-router-dom";


function Navbarindex () {

    
    return (
        
        <nav className="navbar bg-body-tertiary">
            
            <div className="container-fluid">
                <span className="navbar-text">
                    
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/Monitores/AOC">AOC</NavLink>
                    <NavLink to="/Monitores/Apple">Apple</NavLink>
                    <NavLink to="/Monitores/ASUS">ASUS</NavLink>
                    <NavLink to="/Monitores/LG">LG</NavLink>
                    <NavLink to="/Monitores/Samsung">Samsung</NavLink>
                    <NavLink to="/Carrito"><CartWidget/></NavLink>

                </span>
            </div>
        </nav>
    );
};

export default Navbarindex


