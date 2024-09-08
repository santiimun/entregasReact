
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
                    <LinkMenu label="INICIO" href={'/'}/>
                    <LinkMenu label="TIENDA" href={'/tienda'}/>
                    <LinkMenu label="CONTACTO" href={'/contacto'}/>
                    <li className="icon-navbar"><a href="/carrito"><Carrito/></a></li>
                </menu>
            </nav>
        </header>
    );
}

export default NavBar;
