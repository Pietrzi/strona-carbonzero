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
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Gallery3;