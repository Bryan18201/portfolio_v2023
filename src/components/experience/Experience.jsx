import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiJava } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { DiPhp } from "react-icons/di";

import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Qué dominios tengo</h5>
      <h2>Mi experiencia</h2>

      <div
        className="container experience__container"
        data-aos="fade-down"
        data-aos-duration="3000"
      >
        <div className="experience__frontend">
          <h3>Stack</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiJava className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <DiPhp className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3Full className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>


            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <SiOracle className="experience__details-icon" />
              <div>
                <h4>Oracle</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>



            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div
          className="experience__backend"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <h3>Otras habilidades</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Reparación de computadoras </h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Instalación de Software</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Manejo de Office</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Optimización de equipos informáticos</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Manejo de Redes Sociales</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Conocimientos de diseño</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
