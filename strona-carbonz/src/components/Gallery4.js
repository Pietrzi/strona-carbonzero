import React from 'react';
import Engage from './Engage';
import { useHistory } from "react-router-dom";

const Galler4 = () => {

    let history = useHistory();
    return (
        <>
            <section className="inner-gallery">
                <h2 
                className="back"
                onClick={() => history.goBack()}
                >powrót</h2>
                <div className="gallery-section">
                    <img src={require('../assets/salon2-kopia.jpg')} alt="salon2"/>
                    <img src={require('../assets/salon1-kopia.jpg')} alt="salon1"/>
                    <img src={require('../assets/lazienka1-kopia.jpg')} alt="lazienka"/>
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Galler4;