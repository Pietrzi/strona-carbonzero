import React from 'react';
import Engage from './Engage';

// const myImage = require(‘assets/log.png’);

// import logo from '../assets/log.png';

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-logo">
                {/* <div className="img"></div> */}
                {/* <img src={require('../assets/log.png')} alt="logo CarbonZero"/> */}
                <h1>Najlepsze pompy ciepła</h1>
            </div>
            <Engage />
        </div>
    )
}

export default Home;
