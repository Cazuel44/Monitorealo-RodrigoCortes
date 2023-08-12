
function Contador({contador, handleSuma, handleResta, handleLimpiar, handleClickAgregarAlCarrito}) {

    return(
        <div className="contadorIndex">
            <div>
                <button onClick={handleResta} className="btnContador">-</button>
                <button onClick={handleSuma} className="btnContador">+</button>
                <p>Cantidad {contador}</p>
                <button onClick={handleLimpiar} className="btnContador">Limpiar</button>
            </div>
            <button className="btnContador" onClick={handleClickAgregarAlCarrito}>Agregar al carrito</button>            
        </div>
    );
};

export default Contador