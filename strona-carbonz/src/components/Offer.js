import React from 'react';
import Engage from './Engage';
import ReactPlayer from 'react-player';

const Offer = () => {
    return (
        <>
            <section className="offer-section">
                <div className="offer-text-container">
                    <h5>Pompy ciepła</h5>
                    <h5>Rekuperacja</h5>
                    <h5>Projektowanie instalacji</h5>
                    <h5>Doradztwo</h5>
                    <h5>Inne:</h5>
                    <h6> - instalacje wod-kan</h6>
                    <h6> - kotły na pellet</h6>
                    <h6> - kotły gazowe</h6>
                    <h6> - stacje uzdatniania wody</h6>
                    <h6> - serwis przydomowych oczyszczalni ścieków</h6>
                </div>
            </section>
            <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=P0i7RI_Sy8s&t=5s'
                    width='100%'
                    height='100%'
                    controls={true}
                    />
            </div>
            <Engage />
        </>
    )
}

export default Offer

