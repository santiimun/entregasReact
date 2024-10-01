import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetalleProducto from "../../components/detalleProducto";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import Spinner from "../../components/cargando";
import LinkMenu from "../../components/linkMenu";

const Detalle = () => {
    const { id } = useParams();
    let [producto, setProducto] = useState(null);
    let [cargando, setCargando] = useState(false);
    let [fallback, setFallback] = useState(false);

    useEffect(() => {
        setCargando(true);
        
        const docRef = doc(db, 'items', id);
        getDoc(docRef)
            .then(snapshot => snapshot.exists()
        ? setProducto({id : snapshot.id, ...snapshot.data()})
        : setFallback(true))
        .catch(e => setFallback(true))
        .finally(()=> setCargando(false));
    },[])
    return(
        <main>
            {cargando ? (
                <div className="cargando">
                    <Spinner />
                </div>
            ): fallback 
            ?(
                <div className="error">
                    <h2>PRODUCTO NO ENCONTRADO</h2>
                    <LinkMenu clase={"error-link"} label={"IR A TIENDA"} href={"/tienda"} />
                </div>
            )    
            :(
                    <DetalleProducto {...producto}/>
                )}
        </main>
    )
};

export default Detalle;
