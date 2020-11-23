import React from 'react'

const Partners = () => {
    return (
        <section className="partners-section">
            <h2>Wspierają nas</h2>
            <div className="logos-container">
            <a href="https://www.vaillant.pl/" target="_blank">
                <img src={require('../assets/comp1.png')} alt="logo1" className="logo1"/>   
            </a>
            <a href="https://www.saunierduval.pl/" target="_blank">
                <img src={require('../assets/comp2.png')} alt="logo2" className="logo2"/>
            </a>
            <a href="https://www.nibe.pl/" target="_blank">
                <img src={require('../assets/comp3.png')} alt="logo3" className="logo3"/>
            </a>
            <a href="http://ventilus.pl/" target="_blank">
                <img src={require('../assets/comp4.png')} alt="logo4" className="logo4"/>
            </a>
            <a href="https://www.zehnder.pl/" target="_blank">
                <img src={require('../assets/comp5.png')} alt="logo5" className="logo5"/>
            </a>
            <a href="https://heiztechnik.pl/" target="_blank">
                <img src={require('../assets/comp6.png')} alt="logo6" className="logo6"/>
            </a>
            <a href="https://fernox.com.pl/" target="_blank">
                <img src={require('../assets/comp7.png')} alt="logo7" className="logo7"/>
            </a>
            <a href="http://www.dabpumps.com.pl/" target="_blank">
                <img src={require('../assets/comp8.png')} alt="logo8" className="logo8"/>
            </a>
            <a href="http://pl.kan-therm.com/" target="_blank">
                <img src={require('../assets/comp9.png')} alt="logo9" className="logo9"/>
            </a>
            <a href="https://afriso.pl/" target="_blank">
                <img src={require('../assets/comp10.png')} alt="logo10" className="logo10"/>
            </a>
            </div>
        </section>
    )
}

export default Partners
