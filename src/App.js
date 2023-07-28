import Header from "./components/Header";
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import ItemCategoryContainer from "./components/ItemCategoryContainer";
<source />

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} /> 
          <Route path="/detalle/:id" element={<ItemDetailContainer/>} />
          <Route path="/Monitores/:marca" element={<ItemCategoryContainer/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;