import React from 'react';
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';


const AskForm = (props) =>{

    const history = useHistory();

    const navigate = () => {
        history.push("/send")
    }

    function sendEmail(e) {
        e.preventDefault();
    
    
    emailjs.sendForm("service_cr64cbs","template_9gomud5", e.target,
        'user_HPWhFktehby6V0OYeTy01'
        ).then(navigate)
    
    }


    return (

        <div className="form-section">
                <form className="col s12 form" onSubmit={sendEmail}>
                    <input type='hidden' name="to_name" value="CarbonZero" />
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" name="from_name" />
                            <label htmlFor="first_name" className="active">Imię i nazwisko</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12" >
                        <input id="email" type="email" className="validate" name="user_email" />
                        <label htmlFor="email" className="active">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12" >
                        <input id="phone" type="tel" className="validate" name="phone_number" />
                        <label htmlFor="phone" className="active">Telefon</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" name="message"></textarea>
                            <label htmlFor="textarea1" className="active">Treść wiadomości</label>
                        </div>
                    </div>
                    <label>
                        <input 
                            name="dataChecked" 
                            type="checkbox"
                            checked={props.checked}
                            onChange={props.handle}
                            className="filled-in"
                            />
                        <span>Korzystając z formularza zgadzasz się na przechowywanie i przetwarzanie twoich danych przez tę witrynę.</span>
                    </label>
                    <input disabled={!props.checked} type="submit" value="Send" className="btn darken-3 z-depth-0 adjust send-btn"/>
                </form>
        </div>
    );
}

export default AskForm;
