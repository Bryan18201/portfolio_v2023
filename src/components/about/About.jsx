import React from "react";
import "./about.css";
import ME from "../../assets/yo.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Dame un toque</h5>
      <h2>Sobre mí</h2>

      <div
        className="container about__container"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="about__me" data-aos="fade-up" data-aos-duration="3000">
          <div className="about__me-image">
            <img src={ME} alt="ACERCA IMAGEN" />
          </div>
        </div>

        <div className="about__content" data-aos="fade-up" data-aos-duration="3000" >
          <div className="about__cards" >
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experiencia</h5>
              <small>
                +3 años de experiencia practicando código
              </small>
            </article>

            <article className="about__card" > 
              <FiUsers className="about__icon"> </FiUsers>
              <h5>Fortalezas</h5>
              <small>
                - Pensamiento analítico <br />
                - Proactividad
                <br />
                - Atención al detalle
                <br />
              </small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about__icon"></BsFolderCheck>
              <h5>Proyectos</h5>
              <small>+40 proyectos completados</small>
            </article>
          </div>
          <p>
          Egresado del Instituto Tecnológico de las Américas en la carrera de Tecnólogo en Software, soy un joven programador con habilidades sólidas en tecnologías 
          de la informática y desarrollo de software. Mi pasión por resolver problemas y aprender continuamente me ha llevado a encontrar oportunidades desafiantes 
          donde puedo aplicar y desarrollar mis conocimientos.<br/> Actualmente, colaboro en el equipo de desarrollo del BanReservas como desarrollador junior, contribuyendo con 
          mi experiencia y creatividad en soluciones innovadoras para el sector financiero.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contáctame!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
