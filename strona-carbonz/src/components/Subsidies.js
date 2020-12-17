import React from 'react';
import Engage from './Engage';

const Subsidies = () => {
    return (
        <>
            <section className="subsidies-section">
                <div className="subsidies-box">
                    <p className="subsidies-text">
                        Popieramy Kampanię społeczną"DOM BEZ RACHUNKÓW"
                    </p>
                    <a href="https://dombezrachunkow.com/" rel="noopener noreferrer" target="_blank">
                        <button>Sprawdź</button>
                    </a>
                    <hr></hr>
                    <p className="subsidies-text">
                        Program Czyste Powietrze
                    </p>
                    <a href="https://czystepowietrze.gov.pl/" rel="noopener noreferrer" target="_blank">
                        <button>Sprawdź</button>
                    </a>
                    <hr></hr>
                    <p className="subsidies-text">
                        Program Mój Prąd
                    </p>
                    <a href="https://mojprad.gov.pl/" rel="noopener noreferrer" target="_blank">
                        <button>Sprawdź</button>
                    </a>
                    <hr></hr>
                    <p className="subsidies-text">
                        Dotacja do 100% na wymianę starego kotła w Warszawie
                    </p>
                    <a href="https://zielona.um.warszawa.pl/dotacje-dla-mieszka-c-w-na-inwestycje-ekologiczne" rel="noopener noreferrer" target="_blank">
                        <button>Sprawdź</button>
                    </a>
                    <hr></hr>
                    <p className="subsidies-text">
                        Wymóg wymiany kotłów stałopalnych poniżej 3 klasy "kopciuchów" do końca 2022 roku:
                    </p>
                    <a href="https://www.mazovia.pl/komunikaty--konsultacje-spoleczne/komunikaty/art,2671,przypomnienie-o-koniecznosci-wymiany-do-konca-2022-r-pozaklasowych-kotlow-tzw-kopciuchow.html" rel="noopener noreferrer" target="_blank">
                        <button>Sprawdź</button>
                    </a>
                </div>
            </section>
            <Engage />
        </>    
    )
}

export default Subsidies
