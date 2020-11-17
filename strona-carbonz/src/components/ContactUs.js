import React from 'react';
import emailjs from 'emailjs-com';

// import './ContactUs.css';

export default function ContactUs() {

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
    }).catch()

  //   emailjs.sendForm('service_cr64cbs', 'template_9gomud5', 'Pietrzi')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type='hidden' name="to_name" value="Michał" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}