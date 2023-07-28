import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Detalle({ producto }) {
  

  

 /*  if (!producto) {
    return <div>Los datos están siendo cargados...</div>;
  } */

  /* const producto = datos; */
  /* const producto = datos.find((producto) => producto.id === parseInt(id)); */


  /* const handleClickAgregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  }; */


  if (!producto) {
    return <div>Producto no encontrado</div>;
  }


  return (
    <div key={producto.id} className="cardProductos">
      <img className="fotoProducto" src={"/"+producto.imagen} alt=""/>
      <h3>{producto.nombre}</h3>
      <p className="parrafoCard">PRECIO $:{producto.precio} <button className="btnDetalle btnagregar" >
        <Link to={`/detalle/${producto.id}`} className="btnDetalle btnagregar">Detalle</Link>
      </button> <button className="btnDetalle btnagregar" /* onClick={()=>handleClickAgregarAlCarrito(producto)} */ > agregar al carro</button></p>
        
    </div>
  );
}

export default Detalle;