import Carrito from "../carrito";

const NavBar = () => {
    return(
        <header className="header">
            <nav className="navBar container">
                <div className="logo">
                    <a href="">PAKANI</a>
                </div>
                <menu className="menu-navbar">
                    <li className="item-navbar" ><a href="" className="link-navbar">Hombre</a></li>
                    <li className="item-navbar" ><a href="" className="link-navbar">Mujer</a></li>
                    <li className="item-navbar" ><a href="" className="link-navbar">Niños</a></li>
                    <li className="icon-navbar"><a href=""><Carrito/></a></li>
                </menu>
            </nav>
        </header>
        
    );
}

export default NavBar;
