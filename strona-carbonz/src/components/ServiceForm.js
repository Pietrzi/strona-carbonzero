import React from 'react'

const ServiceForm = () => {
    return (
        <div className="form-section">
                <form class="col s12 form">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="first_name" type="text" class="validate" />
                            <label for="first_name" class="active">Imię i nazwisko</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12" >
                        <input id="email" type="email" class="validate" />
                        <label for="email" class="active">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea"></textarea>
                            <label for="textarea1" class="active">Treść wiadomości</label>
                        </div>
                    </div>
                    <label>
                        <input type="checkbox" class="filled-in"/>
                        <span>Korzystając z formularza zgadzasz się na przechowywanie i przetwarzanie twoich danych przez tę witrynę.</span>
                    </label>
                    <div className="input-field">
                        <button className="btn darken-3 z-depth-0 adjust">wyślij</button>
                    </div>
                </form>
        </div>
    )
}

export default ServiceForm
