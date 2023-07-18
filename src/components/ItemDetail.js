

function Detalle({ producto }) {
    return (
      <div>
        <h3>{producto.nombre}</h3>
        <img className='fotoProducto' src={producto.imagen} alt="" />
        <p>Precio: ${producto.precio}</p>
        <p>Descripción: {producto.descripcion}</p>
      </div>
    );
  }
  
  export default Detalle;