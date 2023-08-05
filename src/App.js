import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCategoryContainer from "./components/ItemCategoryContainer";
import { CarritoContext } from "./context/CarritoContex";
import Carrito from "./components/Carrito";
import { CarrtProvider } from "./context/CarritoContex";
<source />

function App() {
  /* let [carrito, setCarrito] = useState([]);
  function handleClickAgregarAlCarrito(producto, contador) {
    const itemAgregado = {...producto, contador};
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)

    if(estaEnElCarrito){
        estaEnElCarrito.contador += contador;
    } else {
        nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
    
  };

  const cantidadCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.contador, 0);
  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.contador, 0); 
  }

  const limpiarCarrito = () => {
    setCarrito([]);
  } */


  return (
    <>
      <CarrtProvider> {/* cantidad carrito no funciona */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} /> 
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route path="/Monitores/:marca" element={<ItemCategoryContainer/>} />
            <Route path="/Carrito" element={<Carrito/>} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </CarrtProvider>
    </>
  );
}

export default App;