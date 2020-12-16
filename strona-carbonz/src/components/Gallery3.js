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
                    <img src={require('../assets/rekupa1.jpg')} alt="rekuperacja 1"/>
                    <img src={require('../assets/rekupa2.jpg')} alt="rekuperacja 2"/>
                    <img src={require('../assets/rekupa3.jpg')} alt="rekuperacja 3"/>
                    <img src={require('../assets/rekupa4.jpg')} alt="rekuperacja 4"/>
                    <img src={require('../assets/rekupa5.jpg')} alt="rekuperacja 5"/>
                    <img src={require('../assets/rekupa6.jpg')} alt="rekuperacja 6"/>
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Gallery3;