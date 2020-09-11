import React from 'react';
import { NavLink } from 'react-router-dom';

const Engage = () => {
    return (
        <div>
            <div>
                <NavLink to='/zapytanie'>Zpaytanie ofertowe</NavLink>
            </div>
            <div>
                <NavLink to='/serwis'>Zgłoszenie serwisowe</NavLink>
            </div>
        </div>
    )
}

export default Engage;
