import React from 'react';
import { NavLink } from 'react-router-dom';

const Engage = () => {
    return (
        <div className="engage-container">
            <h2>Chcesz wiedzieć wiecej</h2>
            <div className="buttons-wrapper">
                <div>
                    <h4>Masz pytanie o ofertę</h4>
                    <NavLink to='/zapytanie'><p>Zpaytanie ofertowe</p></NavLink>
                </div>
                <div>
                    <h4>Zgłoś prośbę o serwis</h4>
                    <NavLink to='/serwis'><p>Zgłoszenie serwisowe</p></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Engage;
