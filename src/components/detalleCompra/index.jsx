import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/carritoContext";
import ContadorProductos from "../contadorProductos";
import { Icon } from "@iconify/react/dist/iconify.js";

const DetalleCompra = (producto) => {
    const {EliminarProd, ActualizarCantidad} = useContext(CarritoContext);
    const [count, setCount] = useState(producto.quantity)
    
    useEffect(()=>{
        ActualizarCantidad(producto.id, count);
    }, [count, producto.id])
    return(
        <div>
            <div className="compra-producto">
                    <img  className="img-compra" src={producto.img} alt={producto.titulo} />
                    <h4 className="titulo-compra">{producto.titulo}</h4>
                    <p className="precio-compra">Precio Unitario <span className="precio"> {producto.precio}</span></p>
                    <div className="detalle-boton">
                    <ContadorProductos count={count} setCount={setCount}/>
                </div>
                    <p className="subtotal-compra">Subtotal <span className="precio"> {producto.precio * count}</span></p>
                    <Icon className="icon-eliminar" icon="ic:baseline-delete" onClick={() => EliminarProd(producto.id)} />
            </div>
        </div>
    )
}

export default DetalleCompra;