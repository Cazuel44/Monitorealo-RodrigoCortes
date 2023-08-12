import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import Contador from "./ItemCount";
import { CarritoContext } from "../context/CarritoContex";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config"
import { toast } from "react-toastify";


function ItemDetailContainer () {
    const { id } = useParams();
    let [producto, setProducto] = useState({});
    let [contador, setContador] = useState(1);
    const {handleClickAgregarAlCarrito} = useContext(CarritoContext);
    
    useEffect(()=> {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((respuesta)=> {

                const producto = respuesta.data();
                if(producto){
                  setProducto(producto);  
                }
            })
    }, []);

    function handleSuma() {
        setContador(contador + 1) 
    };

    function handleResta() {
        if (contador > 1) {
            setContador(contador - 1)
        } 
    };

    function handleLimpiar() {
        setContador(contador = 1)
        toast.success("Cantidad 1")
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