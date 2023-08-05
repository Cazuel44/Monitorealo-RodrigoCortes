import { useState, useEffect} from "react";

import Detalle from "./ItemDetail";


function ItemListContainer () {
   
    let [datos, setDatos] = useState([]);

    let url = "/Inventario.json";

    


    useEffect(()=> {
        obtenerDatos();
    }, []);

    
    const obtenerDatos = ()=> {
       
        fetch(url)
        .then(respuesta=>respuesta.json())
        .then((datosJson) => {
            console.log(datosJson);
            console.log(Array.isArray(datosJson.monitores));
            setDatos(datosJson.monitores);
            
        })
        .catch(error=>console.log("Vamilos merga", error))
    };


    return (
        <div className="containerProductos">
            <h2 className="tituloProductos">!Productos!</h2>
            {datos.map(producto=>(
                <Detalle key={producto.id} producto={producto}/>
            ))}
            
            
        </div>
        
    );
    
};

export default ItemListContainer