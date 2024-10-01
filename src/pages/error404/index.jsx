import LinkMenu  from "../../components/linkMenu"
import { Icon } from "@iconify/react/dist/iconify.js";

const Error404 = () => {
    return(
        <section className="error">
            <Icon className="icono" icon="mdi:error" />
            <h2 className="texto">NO ENCONTRAMOS LO QUE BUSCABA</h2>
            <LinkMenu clase="error-link" label = {"VOLVER AL INICIO"} href = {"/"} />
        </section>
    )
} 

export default Error404;