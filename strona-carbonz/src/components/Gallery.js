import React from 'react';
import Engage from './Engage';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
    return (
        <>
            <section className="gallerynav-section">
                <NavLink to='powietrznepompy'>
                    <img src={require('../assets/lazienka1.jpg')} alt="lazienka"/>
                    <h5>Powietrzne pompy</h5>
                </NavLink>
                <NavLink to='gruntowepompy'>
                    <img src={require('../assets/pomp1.jpg')} alt="pompa ciepła1"/>
                    <h5>Gruntowe pompy</h5>
                </NavLink>
                <NavLink to='rekuperacja'>
                    <img src={require('../assets/pomp2.jpg')} alt="pompa ciepła2"/>
                    <h5>Rekuperacja</h5>
                </NavLink>
                <NavLink to='ogrzewaniepodlogowe'>
                    <img src={require('../assets/pomp3.jpg')} alt="pompa ciepła3"/>
                    <h5>Ogrzewanie podłogowe</h5>
                </NavLink>
                    {/* <img src={require('../assets/pomp4.jpg')} alt="pompa ciepła4"/>
                    <img src={require('../assets/salon1.jpg')} alt="salon1"/>
                    <img src={require('../assets/salon2.jpg')} alt="salon2"/> */}
            </section>
            <Engage />
        </>
    )
}

export default Gallery;
