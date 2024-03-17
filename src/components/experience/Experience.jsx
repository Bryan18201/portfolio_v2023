import React from "react";
import "./experience.css";

//Front
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiVuejsLine } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";

//Back
import { SiOracle } from "react-icons/si";
import { DiPhp } from "react-icons/di";
import { SiJava } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";

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
          <h3>Front-End</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Avanzado</small>
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
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>

            <article className="experience__details">
              <TbBrandNextjs className="experience__details-icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <RiVuejsLine className="experience__details-icon" />
              <div>
                <h4>Vue JS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <FaAngular className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Básico</small>
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
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiJava className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Avanzado</small>
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
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
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
              <FaPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMicrosoftsqlserver className="experience__details-icon" />
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
