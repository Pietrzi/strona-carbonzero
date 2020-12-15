import React from 'react';
import Engage from './Engage';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
    return (
        <>
            <section className="gallerynav-section">
                <NavLink to='powietrznepompy'>
                    <img src={require('../assets/pomp5.jpg')} alt="powietrzna pompa ciepła" className="ciep-pomp"/>
                    <h5>Powietrzne pompy ciepła</h5>
                </NavLink>
                <NavLink to='gruntowepompy'>
                    <img src={require('../assets/pomp2-kopia.jpg')} alt="gruntowa pompa ciepła"/>
                    <h5>Gruntowe pompy ciepła</h5>
                </NavLink>
                <NavLink to='rekuperacja'>
                    <img src={require('../assets/pomp4-kopia.jpg')} alt="rekuperacja"/>
                    <h5>Rekuperacja</h5>
                </NavLink>
                <NavLink to='ogrzewaniepodlogowe'>
                    <img src={require('../assets/lazienka1-kopia.jpg')} alt="ogrzewanie podłogowe"/>
                    <h5>Ogrzewanie podłogowe</h5>
                </NavLink>
            </section>
            <Engage />
        </>
    )
}

export default Gallery;
