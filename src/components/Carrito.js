import { useContext} from "react";
import { CarritoContext } from "../context/CarritoContex";
import Contador from "./ItemCount";


function Carrito(/* {carrito = []} */) {
    
    const {carrito, precioTotal, limpiarCarrito} = useContext(CarritoContext);

    const handleLimpiar = () => {
        limpiarCarrito()
    }

    
    return (
        <div className='containerProductosCarrito'>
            <h2 className='tituloProductos'>Tu Carrito</h2>
            {carrito.length === 0 ? (
                <p>Tu carrito de compras esta vacío</p>
            ) : (
                <div>
                {carrito.map((producto)=>(
                    <div key={producto.id} className='cardProductosCarrito'>
                        {/* <img className='fotoProducto' src={producto.imagen} alt=""/> */}
                        <h3>{producto.nombre}</h3>
                        <p>PRECIO $: {producto.precio}</p>
                        <p>PRECIO PRODUCTOS $: {producto.precio * producto.contador}</p>
                        <p>Cant: {producto.contador}</p>
                    </div>
                ))}
                </div>
                
            )
            }
            { carrito.length > 0 && 
            <> 
                <h3>Valor TOTAL $:{precioTotal()}</h3> 
                <button className="btnContador" onClick={handleLimpiar}>Limpiar carrito</button>
            </>}
            
        </div>
    )

};


export default Carrito;
