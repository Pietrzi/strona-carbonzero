import React from 'react';
import Engage from './Engage';
// import arrow from '../assets/arrow-right-solid.svg';

// const myImage = require(‘assets/log.png’);

// import logo from '../assets/log.png';

const Home = () => {
    return (
        <>
            <section className="about-section">
                <div className="about-img-holder">
                    {/* <img src={require('../assets/graf3.jpg')} alt="grafika pompy cieplnej" className="about-img"/> */}
                    <img src={require('../assets/log.png')} alt="logo" className="about-img"/>
                </div>
                <div className="about-text-holder">
                    {/* <p className="about-title">O nas</p> */}
                    <p className="about-text">Od ponad 7 lat CarbonZero promuje rozwiązania przyjazne środowisku i  użytkownikowi.</p>
                    <p className="about-text">Nasz Zespół to LUDZIE z wieloletnim doświadczeniem i ogromną pasją tworzenia nowoczesnych i bezpiecznych rozwiązań.</p>
                    <p className="about-text">Wspólnie tworzymy dla Państwa rozwiązania, które ograniczają koszty ogrzewania i dbają o nasze wspólne środowisko naturalne.</p>
                    <div className="special-text-box">
                        <p className="about-text bold">Nasze instalacje projektujemy razem z Państwem</p>
                        <ol>
                            <li>
                                Zaczynamy od rozmowy z Klientem. Chcemy w pierwszej kolejności poznać Państwa oczekiwania i zapoznać się z projektem Państwa domu
                            </li>
                            <li>
                                W kolejnym etapie projektujemy instalację i przygotowujemy Państwu proponowane rozwiązania do wyboru
                            </li>
                            <li>
                                Po ich akceptacji, przystępujemy do realizacji
                            </li>
                        </ol>
                    </div>
                    <p className="about-text">Nasze rozwiązania opieramy wyłącznie o największych i sprawdzonych producentów w Polsce.</p>
                    <p className="about-text">Rekomendacje naszych dotychczasowych Klientów są potwierdzeniem jakości naszej pracy.</p>
                    <p className="about-text">Zapraszamy do współpracy</p>
                    <p className="about-text">Zespół CarbonZero</p>
                </div>
            </section>
            <Engage />
        </>
    )
}

export default Home;
