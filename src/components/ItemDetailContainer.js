import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import Contador from "./ItemCount";
import Carrito from "./Carrito";
import { CarritoContext } from "../context/CarritoContex";


function ItemDetailContainer () {
    const { id } = useParams();
    let [datos, setDatos] = useState([]);
    let [producto, setProducto] = useState({});
    let url = "/Inventario.json";
    let [contador, setContador] = useState(1);
    const {carrito, handleClickAgregarAlCarrito} = useContext(CarritoContext)
    console.log(carrito)




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
    };


    function handleSuma() {
        /* if (contador <= datos.stock) {
             
        } */
        setContador(contador + 1) 
    };

    function handleResta() {
        if (contador > 1) {
            setContador(contador - 1)
        } 
    };

    function handleLimpiar() {
        setContador(contador = 0)
    };

    


    return (
        <div className="cardProductos">
            <h3>{producto.nombre}</h3>
            <img className="fotoProducto" src={"/"+producto.imagen} alt="" />
            
            <p>Precio: ${producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>

            <Contador contador={contador} handleSuma={handleSuma} handleResta={handleResta} handleLimpiar={handleLimpiar} handleClickAgregarAlCarrito={() => {handleClickAgregarAlCarrito(producto, contador)}}/>
        </div>    
    );
 
};

export default ItemDetailContainer