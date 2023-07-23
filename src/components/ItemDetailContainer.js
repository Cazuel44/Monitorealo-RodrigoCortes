import { useParams } from "react-router-dom";

function ItemDetailContainer({ datos }) {
  const { marca } = useParams();  
  
  

  console.log(datos);   

  if (!datos) {
    return <div>Los datos están siendo cargados...</div>;
  };  

  
  const productosFiltrados = datos.filter((producto) => producto.marca === marca);  

 

  return (
    <div className="containerProductos">
      <h2 className="tituloProductos">Productos de {marca}</h2>
      {productosFiltrados.map((producto) => (
        <div key={producto.id} className="cardProductos">
          <img className="fotoProducto" src={"/"+producto.imagen} alt="" />
          <h3>{producto.nombre}</h3>
          <p>PRECIO $:{producto.precio}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemDetailContainer;