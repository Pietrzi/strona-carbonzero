import React from 'react';
import Engage from './Engage';
import logo from '../assetes/CarbonZero-logo.png';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-logo">
                <img src={logo} alt="logo CarbonZero"/>
            </div>
            <Engage />
        </div>
    )
}

export default Home

