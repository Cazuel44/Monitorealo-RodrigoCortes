import {useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Detalle from "./ItemDetail";

function ItemCategoryContainer() {
  const { marca } = useParams();  
  let [datos, setDatos] = useState([]);
  let url = "/Inventario.json";

  useEffect(()=> {
    obtenerDatos();
  }, [marca]);



  const obtenerDatos = ()=> {

      fetch(url)
      .then(respuesta=>respuesta.json())
      .then((datosJson) => {
        const datosFiltrados = datosJson.monitores.filter((monitor) => monitor.marca === marca);
        if(datosFiltrados){
          setDatos(datosFiltrados);
        }  
      })
      .catch(error=>console.log("Vamilos merga", error))
  }

 

  if (!datos) {
    return <div>Los datos están siendo cargados...</div>;
  };  

  
 

 

  return (
    <div className="containerProductos">
      <h2 className="tituloProductos">Productos de {marca}</h2>
      {datos.map((producto) => (
        <Detalle key={producto.id} producto={producto}/>
      ))}
    </div>
  );
}

export default ItemCategoryContainer;