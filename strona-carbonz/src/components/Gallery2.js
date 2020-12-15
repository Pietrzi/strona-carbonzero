import React from 'react';
import Engage from './Engage';
import { useHistory } from "react-router-dom";

const Gallery2 = () => {

    let history = useHistory();
    return (
        <>
            <section className="inner-gallery">
                <h2 
                className="back"
                onClick={() => history.goBack()}
                >powrót</h2>
                <div className="gallery-section">
                    <img src={require('../assets/pomp2-kopia.jpg')} alt="pompa ciepła2"/>
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Gallery2;