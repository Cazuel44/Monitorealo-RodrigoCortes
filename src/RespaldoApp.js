import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
/* import { useState, useEffect } from "react"; */
import ItemListContainer from "./components/ItemListContainer";

<source />

function App() {


 /*  let [datos, setDatos] = useState([]);
  let url = "/Inventario.json";

  useEffect(() => {
    obtenerDatos();
  }, []);


  const obtenerDatos = () => {
    fetch(url)
      .then(respuesta => respuesta.json())
      .then((datosJson) => {
        setDatos(datosJson.monitores);

      })
    .catch(error => console.log("Vamilos merga", error))
  }
 */
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<ItemListContainer/>} /> 
          <Route path="/detalle/:id" element={<Detalle /* datos={datos} */ />} />
          <Route path="/Monitores/:marca" element={<ItemDetailContainer /* datos={datos}  *//>} />
          <Route />
          <Route />
          <Route />
        </Routes>



        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;