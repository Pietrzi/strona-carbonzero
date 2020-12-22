import React from 'react';
import Engage from './Engage';
import { useHistory } from "react-router-dom";

const Gallery1 = () => {

    let history = useHistory();
    return (
        <>
            <section className="inner-gallery">
                <h2 
                className="back"
                onClick={() => history.goBack()}
                >powrót</h2>
                <div className="gallery-section">
                    <img src={require('../assets/pomp1-kopia.jpg')} alt="pompa ciepła1"/>
                    <img src={require('../assets/pomp3-kopia.jpg')} alt="pompa ciepła3"/>
                    <img src={require('../assets/pomp4-kopia.jpg')} alt="pompa ciepła4"/>
                    <img src={require('../assets/ppomp1.jpg')} alt="pompa ciepła5"/>
                    <img src={require('../assets/ppomp2.jpg')} alt="pompa ciepła6"/>
                    <img src={require('../assets/ppomp3.jpg')} alt="pompa ciepła7"/>
                    <img src={require('../assets/ppomp4.jpg')} alt="pompa ciepła8"/>
                    <img src={require('../assets/ppomp5.jpg')} alt="pompa ciepła9"/>
                    <img src={require('../assets/ppomp6.jpg')} alt="pompa ciepła10"/>
                </div>
            </section>
            <Engage />
        </>
    )
}

//export default withRouter(Gallery1);

export default Gallery1;