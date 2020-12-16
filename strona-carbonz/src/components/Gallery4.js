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
                    <img src={require('../assets/salon2-kopia.jpg')} alt="ogrzewanie podłogowe"/>
                    <img src={require('../assets/salon1-kopia.jpg')} alt="ogrzewanie podłogowe"/>
                    <img src={require('../assets/podlo1.jpg')} alt="ogrzewanie podłogowe"/>
                    <img src={require('../assets/podlo2.jpg')} alt="ogrzewanie podłogowe"/>
                    <img src={require('../assets/podlo3.jpg')} alt="ogrzewanie podłogowe"/>
                    <img src={require('../assets/podlo4.jpg')} alt="ogrzewanie podłogowe"/>
                    <img src={require('../assets/podlo5.jpg')} alt="ogrzewanie podłogowe"/>
                    <img src={require('../assets/podlo6.jpg')} alt="ogrzewanie podłogowe"/>
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Galler4;