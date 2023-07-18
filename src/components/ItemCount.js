import { useState } from "react";


function Contador(props) {
    // estados
    let [contador, setContador] = useState(0) 


    // Efectos


    //Acciones

    function handleSuma() {
       /*  if (contador <= props.stock) {
            
        } */
        setContador(contador + 1)
    }

    function handleResta() {
        if (contador > 0) {
            setContador(contador - 1)
        } 
        
    }

    function handleLimpiar() {
        setContador(contador = 0)
    }




    //vista

    return(
        <div className="contadorIndex">
            <h3>producto</h3>
            <p>{contador}</p>
            <div>
                <button onClick={handleSuma} className="btnContador">Sumar</button>
                <button onClick={handleResta} className="btnContador">Restar</button>
                <button onClick={handleLimpiar} className="btnContador">Limpiar</button>
            </div>
        </div>
    );
};

export default Contador