import Producto from "../producto";

const ListadoProductos = ({productos}) => {
    return(
        <section className="items-container">
            {productos.map((producto, i) => <Producto key={i} {...producto} />)}
        </section>
    );
}

export default ListadoProductos;