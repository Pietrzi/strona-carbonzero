import React from 'react'

const Partners = () => {
    return (
        <section className="partners-section">
            <h2>Nasza firma współpracuje z takimi partnerami jak:</h2>
            <div className="logos-container">
            <img src={require('../assets/comp1.png')} alt="logo"/>
            <img src={require('../assets/comp2.png')} alt="logo"/>
            <img src={require('../assets/comp3.png')} alt="logo"/>
            <img src={require('../assets/comp4.png')} alt="logo"/>
            <img src={require('../assets/comp5.png')} alt="logo"/>
            <img src={require('../assets/comp6.png')} alt="logo"/>
            <img src={require('../assets/comp7.png')} alt="logo"/>
            <img src={require('../assets/comp8.png')} alt="logo"/>
            <img src={require('../assets/comp9.png')} alt="logo"/>
            <img src={require('../assets/comp10.png')} alt="logo"/>
            </div>
        </section>
    )
}

export default Partners
