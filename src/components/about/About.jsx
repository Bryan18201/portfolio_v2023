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
                +2 años de experiencia estudiando y practicando código
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
              <small>+30 proyectos completados</small>
            </article>
          </div>
          <p>
            Egresado del Instituto Tecnológico de las Américas en la carrera de
            Tecnólogo en Software, Joven programador con habilidades sólidas en
            tecnologías de la informática y desarrollo de software. Con una
            pasión por resolver problemas y aprender continuamente, ansioso por
            aplicar sus conocimientos y habilidades en un entorno de trabajo
            desafiante y colaborativo.
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
