import React, { useState } from 'react';
import contact1 from "./2.png"
import "./Contact.css"
import emailjs from "emailjs-com"
import swal from 'sweetalert';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sbptq2k', 'template_kbim219', e.target, 'JtN5WZTNKLoyopiBS')
      .then((result) => {
        swal({
          title:"OK",
          text:"Su mensaje fue enviado correctamente..!",
          icon:"success" 
        });
      }, (error) => {
        swal({
          title:"Oopss..",
          text:"Su mensaje no fue enviado ",
          icon:"error"
        });
      });
      e.target.reset()
  };

  
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACTO</h4>
            <h1>Comunícate Conmigo</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Jefferson Itas</h1>
                  <p>Ingeniero en Informática y Sistemas Computacionales.</p>
                  <p>Comunícate conmigo:</p> <br />
                  <p>Celular: +593 962764718</p>
                  <p>Email: xavi30a@gmail.com</p> <br />
                  <span>Redes Sociales</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'><a href="https://www.facebook.com/jefferson.javierI"> 
                      <i className='fab fa-facebook-f'></i></a>
                    </button>
                    <button className='btn_shadow'><a href="https://www.instagram.com/accounts/login/?next=/jefferson30n/">
                      <i className='fab fa-instagram'></i></a>
                    </button>
                    <button className='btn_shadow'><a href="https://twitter.com/isjeff96">
                      <i className='fab fa-twitter'></i></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
                <form ref={Contact} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required/>
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required/>
                <input type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact 
