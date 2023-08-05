import { useContext } from "react";
import Carrito from "./Carrito";
import { CarritoContext } from "../context/CarritoContex";
import { NavLink } from "react-router-dom";


function  CartWidget () {

    const {catidadCarrito} = useContext(CarritoContext);

    return (
        <div>
            <NavLink className="menu-link" to="/carrito">
                <i className="fas fa-shopping-cart icono-carrito"></i>
                <span className="notificacionCart">{/* {catidadCarrito()} */} 1</span>
            </NavLink>
        </div>

        
    );
};

export default CartWidget