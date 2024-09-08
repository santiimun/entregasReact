import { NavLink } from "react-router-dom";

const LinkMenu = ( { label , href } ) => {
    return(
        <li className="item-navbar">
            <NavLink className="link-navbar" to={href}>{label}</NavLink>
        </li>
    )
}

export default LinkMenu;

