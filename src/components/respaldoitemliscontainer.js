import { useState, useEffect} from "react";
import { useNavigate} from "react-router-dom";

/* import Detalle from "./ItemDetail"; */








function ItemListContainer () {
   
    let [datos, setDatos] = useState([]);

    let url = "/Inventario.json";

    let [carrito, setCarrito] = useState([]);
    console.log(carrito)

    
    /* const [detalleProducto, setDetalleProducto] = useState(null); */

    const navigate = useNavigate();

    
    

    

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
    }


    const handleClickAgregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const handleMostrarDetalle = (producto) => {
        navigate(`/detalle/${producto.id}`, { state: { datos: datos } });
    };

    

    

    return (
        <div className="containerProductos">
            <h2 className="tituloProductos">!Productos!</h2>
            {datos.map(dato=>(
                <div key={dato.id} className="cardProductos">
                    <img className="fotoProducto" src={dato.imagen} alt=""/>
                    <h3>{dato.nombre}</h3>
                    <p>PRECIO $:{dato.precio} <button className="btnDetalle btnagregar" onClick={() => handleMostrarDetalle(dato)}>Detalle</button> <button className="btnDetalle btnagregar" onClick={()=>handleClickAgregarAlCarrito(dato)} > agregar al carro</button></p>
                    
                </div>
            ))}
            
           {/*  {detalleProducto && <Detalle datos={datos} />} */}
            
            
            
        </div>
    );
    
    
    
    
    
};

export default ItemListContainer