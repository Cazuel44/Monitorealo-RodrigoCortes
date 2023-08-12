import {useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Detalle from "./ItemDetail";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config"

function ItemCategoryContainer() {
  const { marca } = useParams();  
  let [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, [marca]);

  async function obtenerDatos() {
    try {
      const q = marca ? query(collection(db, "productos"), where("marca", "==", marca)) : collection(db, "productos");
      const querySnapshot = await getDocs(q);
      const datosFiltrados = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDatos(datosFiltrados);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

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