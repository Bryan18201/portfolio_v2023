/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
// React icons imports
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id="footer">
    <footer>
      <a href="#" className="footer__logo">
        Bryan Mañon
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
     
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
       
        <li>
          <a href="#contact">Contactos</a>
        </li>
      </ul>

      <div className="footer__socials"> 
        <a href="https://web.facebook.com/profile.php?id=100008166887256" target='_blank' rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/bryan_jose18/" target='_blank' rel="noreferrer">
          <FiInstagram />
        </a>
        <a  href="https://api.whatsapp.com/send?phone=18098202485" target='_blank' rel="noreferrer">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bryan José Mañon. Todos los derechos reservados</small>
      </div>
    </footer>
    </section>
  );
};

export default Footer;