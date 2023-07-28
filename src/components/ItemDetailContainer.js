import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


function ItemDetailContainer () {
    const { id } = useParams();
    let [datos, setDatos] = useState([]);
    let [producto, setProducto] = useState({});
    let url = "/Inventario.json";
    
    

    useEffect(()=> {
        obtenerDatos();
    }, []);

    const obtenerDatos = ()=> {
        fetch(url)
        .then(respuesta=>respuesta.json())
        .then((datosJson) => {
            const producto = datosJson.monitores.find((monitor) => monitor.id === parseInt(id));
            if(producto){
              setProducto(producto)  
            }
            setDatos(datosJson.monitores); 
        })
        .catch(error=>console.log("Vamilos merga", error))
    }

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
 
};

export default ItemDetailContainer