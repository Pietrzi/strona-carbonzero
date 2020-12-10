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
                </div>
            </section>
            <Engage />
        </>
    )
}

//export default withRouter(Gallery1);

export default Gallery1;