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
            <section className="videos-container">
                <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=P0i7RI_Sy8s&t=5s'
                        width='100%'
                        height='100%'
                        controls={true}
                        />
                </div>
                <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=Hr_qrZSGEpA'
                        width='100%'
                        height='100%'
                        controls={true}
                        />
                </div>
                <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=GPW8HfwZraA'
                        width='100%'
                        height='100%'
                        controls={true}
                        />
                </div>
                <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                        url='videos/evosta.mp4'
                        width='100%'
                        height='100%'
                        controls={true}
                        />
                </div>
            </section>
            <section className="offer-links">
                <div className="offer-links-box">
                    <p className="offer-link-title">Regulator pompy ciepła i jego możliwości</p>
                    <a rel="noopener noreferrer" href="https://simulator.vaillant.com/vrc700_6/pl/" target="_blank">
                        <button>Zobacz</button>
                    </a>
                </div>
                <div className="offer-links-box">
                    <p className="offer-link-title">Sprawdź akustykę powietrznej pompy ciepła</p>
                    <a rel="noopener noreferrer" href="https://simulator.vaillant.com/soundbox/int/?langs=PL&startlang=PL&products=ATS,ATM,ACL,RCE,VTP&startproduct=ATS&theme=VAI&volume=0#!/pl/aroTHERM_55-5/intro" target="_blank">
                        <button>Zobacz</button>
                    </a>
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Offer

