import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetalleProducto from "../../components/detalleProducto";

const Detalle = () => {
    const { id } = useParams();
    let [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch('/src/datos/productos.json')
        .then(res => res.json())
        .then(data => setProducto(data.find(producto => producto.id == id)))
    },[]);

    return(
        <DetalleProducto {...producto}/>
    )
};

export default Detalle;
