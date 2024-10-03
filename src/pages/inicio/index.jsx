import { useEffect, useState } from "react";
import ListadoProductos from "../../components/listadoProductos";
import Spinner from "../../components/cargando";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import Error404 from "../error404";

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [fallback, setFallback] = useState(false);

    useEffect(() => {
        const cargarProductos = async () => {
            setCargando(true);
            setFallback(false);
            try {
                const snapshot = await getDocs(collection(db, 'items'));
                if (snapshot.size === 0) {
                    setFallback(true);
                } else {
                    
                    const productosActivos = snapshot.docs
                        .map(doc => ({ id: doc.id, ...doc.data() }))
                        .filter(producto => producto.estado === "NUEVO");
                    setProductos(productosActivos);
                }
            } catch (error) {
                console.error("Error al cargar los productos: ", error);
                setFallback(true);
            } finally {
                setCargando(false);
            }
        };

        cargarProductos();
    }, []);


    return (
        <main className="main-inicio">
            {cargando ? (
                <Spinner />
            ) : fallback ? (
                <Error404/>
            ) :(
            <div>
            <div className="conteiner-carrousel">
                <div className="slide">
                    <ul className="ul-slide">
                        <li><img className="img-slide"  src="/img/carrousel/carrousel-1.jpeg" alt="" /></li>
                        <li><img className="img-slide" src="/img/carrousel/carrousel-2.jpeg" alt="" /></li>
                        <li><img className="img-slide" src="/img/carrousel/carrousel-4.jpg" alt="" /></li>
                        <li><img className="img-slide" src="/img/carrousel/carrousel-3.jpeg" alt="" /></li>
                    </ul>
                </div>
            </div>
            <section className="productos-nuevos">
                <h2 className="nuevos-h2">NUEVOS LANZAMIENTOS</h2>
                <ListadoProductos productos={productos}/>
            </section>
            </div>

        )}
        </main>
    )
};

export default Inicio;