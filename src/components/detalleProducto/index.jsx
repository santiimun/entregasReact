import { CarritoContext } from "../../context/carritoContext";
import { useContext } from "react";
import LinkMenu from "../linkMenu";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetalleProducto = ({id,titulo, img, marca, descripcion, precio}) =>{
    const {AgregarProducto} =  useContext(CarritoContext);
    const ParaAgregar = () =>{
        AgregarProducto({id,titulo, img, marca, descripcion, precio});
        toast.success("Producto agregado al carrito.", {
            position: "bottom-right",
            autoClose: 1000, 
            closeOnClick: true, 
            draggable: true, 
            className: 'alert'
        });
    }
    return(
        <div className="detalle-general"> 
            <div className="rutas-detalle">
                <LinkMenu clase= "breadcrumbs" href={"/"} label = {"INICIO"}/>
                <p>/</p>
                <LinkMenu clase= "breadcrumbs" href={"/tienda"} label = {"TIENDA"}/>
                <p>/</p>
                <LinkMenu clase= "breadcrumbs"  label = {titulo}/>
            </div>

            <section className="detalle-producto">
                <picture className="detalle-picture">
                    <img className="detalle-img" src={`${img}`} alt="" />
                </picture>
                <article className="detalle-info"> 
                    <p className="detalle-marca">{marca}</p>
                    <h2 className="detalle-titulo">{titulo}</h2>
                    <p className="detalle-descripcion">{descripcion}</p>
                    <div className="form">
                        <p className="detalle-precio">$ {precio}</p>
                        <input className="detalle-agregar-cart" type="button"  value="Agregar al Carrito" onClick={ParaAgregar}/>
                    </div>
                    <ToastContainer/>
                </article>
            </section>
    </div>
    )
}

export default DetalleProducto;