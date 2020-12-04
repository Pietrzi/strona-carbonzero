import React from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            {/* <img src={require('../assets/log.png')} alt="grafika pompy cieplnej" className="about-img"/> */}
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/onas'>O nas</NavLink>
                </li> */}
                <li>
                    <NavLink to='/oferta'>Oferta</NavLink>
                </li>
                <li>
                    <NavLink to='/galeria'>Galerie</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/aktualnosci'>Aktualności</NavLink>
                </li> */}
                {/* <li>
                    <NavLink to='/dotacje'>Dotacje</NavLink>
                </li> */}
                <li>
                    <NavLink to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
            <Hamburger click={props.menuHandler}/>
        </nav>
    )
}

export default Navbar;
