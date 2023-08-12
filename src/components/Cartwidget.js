import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContex";

function  CartWidget () {
    const {cantidadCarrito} = useContext(CarritoContext);
    
    return (
        <div>
            <i className="fas fa-shopping-cart icono-carrito"></i>
            {cantidadCarrito() > 0 && <span className="notificacionCart">{cantidadCarrito()} </span>}  
        </div> 
    );
};

export default CartWidget