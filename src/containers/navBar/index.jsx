
import Carrito from "../../components/carrito";
import LinkMenu from "../../components/linkMenu";

const NavBar = () => {
    return(
        <header className="header">
            <div className="header-superior">
                <p>ENVÍO GRATIS EN COMPRAS SUPERIORES A $199.999</p>
            </div>
            <nav className="navBar container">
                <div className="logo">
                    <a href="/">PAKANI</a>
                </div>
                <menu className="menu-navbar">
                    <LinkMenu clase="link-navbar" label="INICIO" href={'/'}/>
                    <LinkMenu clase="link-navbar" label="TIENDA" href={'/tienda'}/>
                    <LinkMenu clase="link-navbar" label="CONTACTO" href={'/contacto'}/>
                    <LinkMenu label={<Carrito/>} className="icon-navbar" href={"/carrito"}/>
                </menu>
            </nav>
        </header>
    );
}

export default NavBar;
