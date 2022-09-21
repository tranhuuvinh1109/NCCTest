import { NavLink } from "react-router-dom"
import './SideBar.css'

function SideBar({ openSideBar, handleChange }) {
    return (
        <ul className="menu-side-bar">
            {
                openSideBar &&
                <li className="button item" onClick={handleChange}>
                    &times;
                </li>
            }

            <li className="item" onClick={handleChange}>
                <NavLink to="/" className="item-link">
                    Home
                </NavLink>
            </li>
            <li className="item" onClick={handleChange}>
                <NavLink to="/services" className="item-link">
                    Servies
                </NavLink>
            </li>
            <li className="item" onClick={handleChange}>
                <NavLink to="/news" className="item-link">
                    News
                </NavLink>
            </li>
            <li className="item" onClick={handleChange}>
                <NavLink to="/blog" className="item-link">
                    Blog
                </NavLink>
            </li>
            <li className="item" onClick={handleChange}>
                <NavLink to="/contact" className="item-link">
                    Contact
                </NavLink>
            </li>
        </ul>

    );
}

export default SideBar;