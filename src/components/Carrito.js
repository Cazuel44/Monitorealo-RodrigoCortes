

function Carrito({carrito = []}) {

    
    

    

    /* const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter((producto) => producto.id !== id)
        setCarrito(nuevoCarrito);
    }

    const vaciarCarrito = ()=> {
        setCarrito([]);
    } */

    /* console.log(carrito) */

    return (
        <div className='containerProductos'>
            <h2 className='tituloProductos'>Tu Carrito</h2>
            {carrito.length === 0 ? (
                <p>Tu carrito de compras esta vacío</p>
            ) : (
                <div>
                {carrito.map((producto)=>(
                    <div key={producto.id} className='cardProductos'>
                        {/* <img className='fotoProducto' src={producto.imagen} alt=""/> */}
                        <h3>{producto.nombre}</h3>
                        <p>PRECIO $:{producto.precio}</p>
                        
                    </div>
                ))}
                </div>
                
            )
            }
        </div>
    )

}


export default Carrito;
