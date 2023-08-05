import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarrtProvider = ({children}) => {
    let [carrito, setCarrito] = useState([]);

    function handleClickAgregarAlCarrito(producto, contador) {
        const itemAgregado = { ...producto, contador };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
        estaEnElCarrito.contador += contador;
        } else {
        nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
        /* console.log(nuevoCarrito) */
    };

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.contador, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.contador, 0);
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{carrito, handleClickAgregarAlCarrito, cantidadCarrito, precioTotal, limpiarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
