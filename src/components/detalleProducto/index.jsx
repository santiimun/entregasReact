import ContadorProductos from "../contadorProductos";

const DetalleProducto = ({titulo, img, marca, descripción, precio}) =>{

    return(
        <section className="detalle-producto">
            <picture className="detalle-picture">
                <img className="detalle-img" src={`/${img}`} alt="" />
            </picture>
            <article className="detalle-info"> 
                <p className="detalle-marca">{marca}</p>
                <h2 className="detalle-titulo">{titulo}</h2>
                <p className="detalle-descripcion">{descripción}</p>
                <p className="detalle-precio">$ {precio}</p>
                <div className="form">
                    <ContadorProductos />
                    <input className="detalle-agregar-cart" type="submit" value="Agregar al Carrito"/>
                </div>
            </article>
        </section>
    )
};

export default DetalleProducto;