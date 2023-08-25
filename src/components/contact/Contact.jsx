import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// Email js required
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_73c7bvt",
      "template_kgcm3bq",
      form.current,
      "wWYXDrbniV7iBzpUl"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>¡Dame un toque!</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container" data-aos="zoom-in" data-aos-duration="3000">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Gmail</h4>
            <h5>Jose446533</h5>
            <a
              href="mailto:jose446533@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Mándame un mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Bryan Mañon</h5>
            <a href="https://m.me/MañonColonBryan" target={"_blank"} rel="noreferrer">
              Mándame un mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+1 809-820-2485</h5>
            <a
              href="https://api.whatsapp.com/send?phone=18098202485"
              target={"_blank"}
              rel="noreferrer"
            >
              Mándame un mensaje
            </a>
          </article>
        </div>
        {/* END of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={`Nombre`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={`Email`}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={`Mensaje`}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact