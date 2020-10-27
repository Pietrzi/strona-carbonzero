import React from 'react'

const Cookies = (props) => {
    return (
        <div className="cookie-container">
            <p>Strona Carbonzero korzysta z plików cookies w celu przeglądania jej zawartości.</p>
            <button onClick={props.click} className="button-accept">Akceptuję</button>
            <button onClick={props.click} className="button-reject">Odrzucam</button>
        </div>
    )
}

export default Cookies
