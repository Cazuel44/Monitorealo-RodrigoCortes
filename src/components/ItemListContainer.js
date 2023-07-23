import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Itemlist from "./itemlist";
import Detalle from "./ItemDetail";
/* import Detalle from "./ItemDetail"; */








function ItemListContainer () {
   
    let [datos, setDatos] = useState([]);

    let url = "/Inventario.json";

    let [carrito, setCarrito] = useState([]);
    console.log(carrito)

    /* const [detalleProducto, setDetalleProducto] = useState(null); */

    
    /* const [detalleProducto, setDetalleProducto] = useState(null); */

   /*  const navigate = useNavigate(); */

    
    

    

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

    /* const handleMostrarDetalle = (producto) => {
        setDetalleProducto(producto);
    }; */
    /* const handleMostrarDetalle = (id) => {
        navigate(`/detalle/${id}`);
    }; */

    

    

    return (
        <div className="containerProductos">
            <h2 className="tituloProductos">!Productos!</h2>
            {datos.map(dato=>(
                <div key={dato.id} className="cardProductos">
                    <img className="fotoProducto" src={dato.imagen} alt=""/>
                    <h3>{dato.nombre}</h3>
                    <p>PRECIO $:{dato.precio} <button className="btnDetalle btnagregar" ><Link to={`/detalle/${datos.id}`} className="btnDetalle btnagregar">Detalle</Link></button> <button className="btnDetalle btnagregar" onClick={()=>handleClickAgregarAlCarrito(dato)} > agregar al carro</button></p>
                    
                </div>
            ))}
            
           {/*  {detalleProducto && <Detalle datos={datos} />} */}
            
            
           <Itemlist datos={datos}/>
           
        </div>
    );
    
    
    
    
    
};

export default ItemListContainer