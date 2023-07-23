import { useParams, useLocation } from "react-router-dom";

function Detalle() {
  const { id } = useParams();
  const location = useLocation();
  const { datos } = location.state;
  const producto = datos.find((dato) => dato.id === parseInt(id));
  const rutaImagen = `../${producto.imagen}`;

  console.log(datos)
  // buscar porque me da undefined y explota todo
  if (!datos) {
    return <div>Los datos están siendo cargados...</div>;
  }

  return (
    <div className="cardProductos">
      <h3>{producto.nombre}</h3>
      <img className="fotoProducto" src={rutaImagen} alt="" />
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>
    </div>
  );
}

export default Detalle;