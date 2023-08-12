import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCategoryContainer from "./components/ItemCategoryContainer";
import Carrito from "./components/Carrito";
import { CarrtProvider } from "./context/CarritoContex";
import Checkout from "./components/Checkout";
import { ToastContainer } from "react-toastify";


<source />

function App() {
 
  return (
    <>
      <CarrtProvider> 
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer/>} /> 
            <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
            <Route path="/Monitores/:marca" element={<ItemCategoryContainer/>} />
            <Route path="/Carrito" element={<Carrito/>} /> 
            <Route path="/Checkout" element={<Checkout/>} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </CarrtProvider>
      <ToastContainer/>
    </>
  );
}

export default App;