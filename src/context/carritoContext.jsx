import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoContextProvider = ({ children }) => {
    const [carritoProductos, setCarritoProd] = useState([]);

    const AgregarProducto = (producto) => {
        const existeProd = carritoProductos.find(prodActual => prodActual.id === producto.id);
        
        if (existeProd) {
            setCarritoProd(carritoProductos.map(prodActual => {
                if (prodActual.id === producto.id) {
                    return { ...prodActual, quantity: prodActual.quantity + 1 };
                }
                return prodActual;
            }));
        } else {
            setCarritoProd([...carritoProductos, { ...producto, quantity: 1 }]);
        }
    };

    const EliminarProd = (id) => {
        setCarritoProd(carritoProductos.filter(prodActual => prodActual.id !== id))
    };

    const LimpiarCarrito = () => {
        setCarritoProd([]);
    };
    const ActualizarCantidad = (id, cantidad) => {
        setCarritoProd(carritoProductos.map(producto =>
            producto.id === id ? {...producto,quantity: cantidad} : producto
        )
        )
    }

    return (
        <CarritoContext.Provider value={{ carritoProductos, AgregarProducto, EliminarProd, LimpiarCarrito, ActualizarCantidad }}>
            {children}
        </CarritoContext.Provider>
    );
};




