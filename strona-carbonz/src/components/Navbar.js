import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/onas'>O nas</NavLink>
                </li>
                <li>
                    <NavLink to='/oferta'>Oferta</NavLink>
                </li>
                <li>
                    <NavLink to='/galeria'>Galeria</NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
