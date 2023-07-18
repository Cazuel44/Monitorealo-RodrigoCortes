
import ItemListContainer from "./components/ItemListContainer";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";

<source />





function App() {
  return (
    <>  
      <BrowserRouter>

        <Header/>
        <Main/>
        <Routes>
          
          <Route path="/" element={<p>inicio</p>}/>
          {/* <Route path="/categoria/:nombre" element={</>}/> */}
          <Route/>
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


