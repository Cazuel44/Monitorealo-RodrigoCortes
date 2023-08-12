import { useState, useEffect} from "react";
import Detalle from "./ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config.js";
import Loader from "./Loader";

function ItemListContainer () {
   
    let [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const productosRef = collection(db, "productos");

        setTimeout(() => {
            getDocs(productosRef)
              .then((respuesta) => {
                setDatos(
                  respuesta.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                  })
                );
                
              })
              .catch((error) => {
                console.error("GG base de datos", error);
              })
              .finally(()=> {
                setLoading(false)
              });
        }, 1000);      
    }, []);

    if (loading) {
        return (
            <Loader/>
        )
    } else {
        return (
            <div className="containerProductos">
                <h2 className="tituloProductos">!Productos!</h2>
                {datos.map(producto=>(
                    <Detalle key={producto.id} producto={producto}/>
                    
                ))}
            </div>
        )
    } 
};

export default ItemListContainer