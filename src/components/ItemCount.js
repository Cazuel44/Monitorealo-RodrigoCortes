


function Contador({contador, handleSuma, handleResta, handleLimpiar, handleClickAgregarAlCarrito}) {
    // estados
     


    // Efectos


    //Acciones

   



    //vista

    return(
        <div className="contadorIndex">
            {/* <h3>producto</h3> */}
            
            <div>
                <button onClick={handleSuma} className="btnContador">+</button>
                <button onClick={handleResta} className="btnContador">-</button>
                <p>Cantidad {contador}</p>
                <button onClick={handleLimpiar} className="btnContador">Limpiar</button>
            </div>
            <button className="btnContador" onClick={handleClickAgregarAlCarrito}>Agregar al carrito</button>            
        </div>
    );
};

export default Contador