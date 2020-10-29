import React from 'react'

const Cookies = (props) => {
    return (
        <div className="cookie-container">
            <p>Poruszając się po tej stronie wyrażasz zgodę na korzystanie z plików cookies w celu przeglądania jej zawartości.</p>
            <button onClick={props.click} className="button-accept">Akceptuję</button>
            <button onClick={props.click} className="button-reject">Odrzucam</button>
        </div>
    )
}

export default Cookies
