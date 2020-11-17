import React from 'react';
import emailjs from 'emailjs-com';


export default function AskForm() {


    function sendEmail(e) {
        e.preventDefault();
    
    
    // emailjs.send("service_cr64cbs","template_9gomud5",{
    //   from_name: "sdaf ",
    //   to_name: "asf sd",
    //   message: "asfd asd",
    //   user_email: "pietrzi@op.pl",
    //   },
    //   'user_HPWhFktehby6V0OYeTy01'
    //   ).then(res => {
    //     console.log(res);
    //   })
    
    emailjs.sendForm("service_cr64cbs","template_9gomud5", e.target,
        'user_HPWhFktehby6V0OYeTy01'
        ).then(res => {
        console.log(res);
        })
    
    //   emailjs.sendForm('service_cr64cbs', 'template_9gomud5', 'Pietrzi')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    
    }


    return (

        // <form className="contact-form" onSubmit={sendEmail}>
        //     <input type='hidden' name="to_name" value="CarbonZero" />
        //     <label>Imię i Nazwisko</label>
        //     <input type="text" name="from_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>
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
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" name="message"></textarea>
                            <label htmlFor="textarea1" className="active">Treść wiadomości</label>
                        </div>
                    </div>
                    <label>
                        <input type="checkbox" className="filled-in"/>
                        <span>Korzystając z formularza zgadzasz się na przechowywanie i przetwarzanie twoich danych przez tę witrynę.</span>
                    </label>
                    <input type="submit" value="Send" className="btn darken-3 z-depth-0 adjust send-btn"/>
                    {/* <div className="input-field">
                        <button className="btn darken-3 z-depth-0 adjust">wyślij</button>
                    </div> */}
                </form>
        </div>
    );
}

