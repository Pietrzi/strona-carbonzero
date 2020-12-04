import React from 'react';
import Engage from './Engage';
import { useHistory } from "react-router-dom";

const Gallery3 = () => {

    let history = useHistory();
    return (
        <>
            <section className="inner-gallery">
                <h2 
                className="back"
                onClick={() => history.goBack()}
                >powrót</h2>
                <div className="gallery-section">
                    <img src={require('../assets/pomp2.jpg')} alt="pompa ciepła2"/>
                    <img src={require('../assets/pomp1.jpg')} alt="pompa ciepła1"/>
                    <img src={require('../assets/pomp3.jpg')} alt="pompa ciepła3"/>
                    <img src={require('../assets/pomp4.jpg')} alt="pompa ciepła4"/>
                    <img src={require('../assets/salon1.jpg')} alt="salon1"/>
                    <img src={require('../assets/salon2.jpg')} alt="salon2"/>
                    <img src={require('../assets/lazienka1.jpg')} alt="lazienka"/>
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Gallery3;