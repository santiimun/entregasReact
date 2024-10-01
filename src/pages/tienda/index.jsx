import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListadoProductos from "../../components/listadoProductos";
import Spinner from "../../components/cargando";
import LinkMenu from "../../components/linkMenu";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const Tienda = () => {
    const { categoria } = useParams();
    let [productos, setProductos] = useState([]);
    let [cargando, setCargando] = useState(false);
    let [fallback, setFallback] = useState(false);

    useEffect(() => {
        setCargando(true);
        setFallback(false); 
        const coleccionProd = categoria
            ? query(collection(db, 'items'), where('categoria', '==', categoria))
            : collection(db, 'items');

        getDocs(coleccionProd)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    setFallback(true); 
                } else {
                    setProductos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                }
            })
            .finally(() => setCargando(false));
    }, [categoria]); 

    return (
        <main className="tienda">
            {cargando ? (
                <Spinner />
            ) : fallback ? (
                <div className="error">
                    <h2>PRODUCTOS NO ENCONTRADOS</h2>
                    <LinkMenu clase={"error-link"} label={"IR A TIENDA"} href={"/tienda"} />
                </div>
            ) : (
                <>
                    <section className="tienda-container">
                        <aside className="filtros">
                            <h3>FILTRAR POR CATEGORIA</h3>
                            <a  href="/tienda/Calzado">
                                <p className="categoria">Calzado</p>
                                <div className="linea"></div>
                            </a>
                            <a  href="/tienda/Indumentaria">
                                <p className="categoria">Indumentaria</p>
                                <div className="linea"></div>
                            </a>
                            <a  href="/tienda/Accesorio">
                                <p className="categoria">Accesorio</p>
                                <div className="linea"></div>
                            </a>
                            <a  href="/tienda">
                                <p className="categoria">Todos los productos</p>
                                <div className="linea"></div>
                            </a>
                        </aside>
                        <div>
                            <h2 className="name-categoria">{categoria}</h2>
                            <ListadoProductos className="productos-tienda" productos={productos} />
                        </div>
                    </section>
                </>
            )}
        </main>
    );
};

export default Tienda;
