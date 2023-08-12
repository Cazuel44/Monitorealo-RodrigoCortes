import React, { useState } from 'react'
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContex';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { toast } from 'react-toastify';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("")
    const {carrito, precioTotal, limpiarCarrito} = useContext(CarritoContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
       
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        } 
        console.log(pedido);
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc)=> {
                setPedidoId(doc.id);
                limpiarCarrito();
            })
        toast.success("Tu compra ha sido confirmada con exito");

    }

    if(pedidoId) {
        return (
            <div>
                <h1 className="">gracias por comprar en Monitorealo</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Confirma tu compra!</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
                <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} />
                <button className="btnComprar" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout