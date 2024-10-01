import { NavLink } from "react-router-dom";

const LinkMenu = ( { clase, label , href } ) => {
    return(
        <li className="item-navbar">
            <NavLink className={clase} to={href}>{label}</NavLink>
        </li>
    )
}

export default LinkMenu;

