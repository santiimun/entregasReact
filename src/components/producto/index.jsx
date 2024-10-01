import { Link } from "react-router-dom";

const Producto = ({titulo, precio, img, marca,id,  estado})=>{
    return(
        <article className="producto">
            <Link to={`/detalle/${id}`}>
                <picture className="picture">
                {estado && <span className="producto-span">{estado}</span>}
                    <img className="producto-img-1 " src={img} alt={`${titulo}-img1`} />
                    
                </picture>
                <div className="producto-info">
                    <p className="producto-marca">{marca}</p>
                    <h3 className="producto-titulo">{titulo}</h3>
                    <h4 className="producto-precio">$ {precio}</h4>
                </div>
            </Link>
        </article>
    );
};

export default Producto;