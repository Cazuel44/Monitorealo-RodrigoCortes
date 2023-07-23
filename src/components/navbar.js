import CartWidget from "./iconocarrito";
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
                    <CartWidget/>

                </span>
            </div>
        </nav>
    );
};

export default Navbarindex


/* <NavLink to="/">Inicio</NavLink>
<NavLink to="/Monitores/:marca">AOC</NavLink>
<NavLink to="/Monitores/:marca">Apple</NavLink>
<NavLink to="/Monitores/:marca">ASUS</NavLink>
<NavLink to="/Monitores/:marca">LG</NavLink>
<NavLink to="/Monitores/:marca">Samsung</NavLink> */