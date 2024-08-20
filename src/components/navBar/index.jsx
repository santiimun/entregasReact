import Carrito from "../carrito";
import ItemList from "../itemList";

const NavBar = () => {
    return(
        <header className="header">
            <nav className="navBar container">
                <div className="logo">
                    <a href="">PAKANI</a>
                </div>
                <menu className="menu-navbar">
                    <ItemList label="Hombre"/>
                    <ItemList label="Mujer"/>
                    <ItemList label="Niños"/>
                    <li className="icon-navbar"><a href=""><Carrito/></a></li>
                </menu>
            </nav>
        </header>
        
    );
}

export default NavBar;
