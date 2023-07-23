import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";

<source />





function App() {
  return (
    <>  
      <BrowserRouter>

        <Header/>
        
        <Routes>
          
          <Route path="/" element={<Main/>}/>
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/Monitores/:marca" element={<ItemDetailContainer />}/>
          <Route/>
          <Route/>
          <Route/>
        </Routes> 

        
        
        <Footer/>

      </BrowserRouter>

    </>
  );
}

export default App;


