import React from 'react'

const Partners = () => {
    return (
        <section className="partners-section">
            <h2>Nasza firma współpracuje z takimi partnerami jak:</h2>
            <div className="logos-container">
            <img src={require('../assets/comp1.png')} alt="logo1" className="logo1"/>
            <img src={require('../assets/comp2.png')} alt="logo2" className="logo2"/>
            <img src={require('../assets/comp3.png')} alt="logo3" className="logo3"/>
            <img src={require('../assets/comp4.png')} alt="logo4" className="logo4"/>
            <img src={require('../assets/comp5.png')} alt="logo5" className="logo5"/>
            <img src={require('../assets/comp6.png')} alt="logo6" className="logo6"/>
            <img src={require('../assets/comp7.png')} alt="logo7" className="logo7"/>
            <img src={require('../assets/comp8.png')} alt="logo8" className="logo8"/>
            <img src={require('../assets/comp9.png')} alt="logo9" className="logo9"/>
            <img src={require('../assets/comp10.png')} alt="logo10" className="logo10"/>
            </div>
        </section>
    )
}

export default Partners


// "homepage": "https://pietrzi.github.io/strona-carbonzero",
// "deploy": "gh-pages -d build"