import { useParams } from "react-router-dom";


function Detalle({ datos }) {
  const { id } = useParams();

  console.log(datos);

  if (!datos) {
    return <div>Los datos están siendo cargados...</div>;
  }


  const producto = datos.find((producto) => producto.id === parseInt(id));


  /* const handleClickAgregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  }; */


  return (
    <div className="cardProductos">
      <h3>{producto.nombre}</h3>
      <img className="fotoProducto" src={"/"+producto.imagen} alt="" />
        <div>
        <button className="btnDetalle btnagregar" /* onClick={()=>handleClickAgregarAlCarrito(dato)} */ > agregar al carro</button> 
        </div>
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>

    </div>
  );
}

export default Detalle;