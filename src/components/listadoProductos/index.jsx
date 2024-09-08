import { useState, useEffect } from "react";
import Producto from "../producto";

const ListadoProductos = () => {
    let [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/src/datos/productos.json')
        .then(res => res.json())
        .then(data => setProductos(data))
    },[]);

    return(
        <section className="items-container">
            {productos.map((producto, i) => <Producto key={i} {...producto} />)}
        </section>
    );
}

export default ListadoProductos;