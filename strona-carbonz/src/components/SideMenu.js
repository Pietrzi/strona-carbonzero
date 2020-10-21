import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = (props) => {

    let sideMenuClasses = 'side__menu'
    if (props.show) {
        sideMenuClasses = 'side__menu open'
    }

    return (
        <div className={sideMenuClasses}>
            <ul>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='/'>Home</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='onas'>O nas</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='oferta'>Oferta</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='galeria'>Galeria</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='aktualnosci'>Aktualności</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='dotacje'>Dotacje</NavLink>
                </li>
                <li onClick={props.click}>
                    <NavLink className="menu__link__element" to='kontakt'>Kontakt</NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export default SideMenu;