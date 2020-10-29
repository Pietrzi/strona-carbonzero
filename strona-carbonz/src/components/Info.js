import React from 'react';
import { NavLink } from 'react-router-dom';

const Info = () => {
    return (
        <section className="info-container">
            <div className="info-section-box">
                <p className="info-title">Dane kontaktowe</p>
                <p className="info-name">EKO SERWIS Szymon Barciński</p>
                <p className="info-text">ul. Młodzieżowa 31P/15</p>
                <p className="info-text margbot">09-100 Płońsk</p>
                <p className="info-text"> NIP: 567-171-10-09</p>
                <p className="info-text margbot">REGON: 367897610</p>
                <p className="info-text margbot">e-mail: biuro@carbonzero.pl</p>
                <p className="info-text">POMPY CIEPŁA I REKUPERACJA:</p><span>+48 603 756 412</span>
                <p className="info-text">SERWIS: +48 608 387 064</p>
            </div>
            <div className="info-section-box altalign">
                <p className="info-title">Przejdź do</p>
                <NavLink to='/'><p>Home</p></NavLink>
                <NavLink to='/onas'><p>O nas</p></NavLink>
                <NavLink to='/oferta'><p>Oferta</p></NavLink>
                <NavLink to='/galeria'><p>Galeria</p></NavLink>
                <NavLink to='/aktualnosci'><p>Aktualności</p></NavLink>
                <NavLink to='/dotacje'><p>Dotacje</p></NavLink>
                <NavLink to='/kontakt'><p>Kontakt</p></NavLink>
            </div>
            <div className="info-section-box altalign">
                <p className="info-title">Dołącz do nas</p>
                <p className="info-text"> ikonki social media</p>
            </div>
        </section>
    )
}

export default Info
