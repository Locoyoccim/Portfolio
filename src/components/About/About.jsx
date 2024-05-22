import React from "react";
import "/src/components/About/about.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useScramble } from "use-scramble";

function About() {

  const {ref, replay} = useScramble({
    text: 'carlos antonio hernandez robles',
    speed: 0.45,
    tick: 1,
    overflow: true,
  })
  return (
    <>
      <section id="sobre_mi">
        <div className="performance">
          <h1 className="name" ref={ref} onMouseOver={replay}></h1>
          <p className="contact_details">
            carlos_360@outlook.es | Tequila, Jal, Mexico
          </p>
          <div className="social">
            <a href="https://github.com/Locoyoccim" target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/carlos-antonio-hernandez-robles-1990021a4/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="/Hoja_de_Vida_Carlos.pdf" target="_blank" download>
              <i className="bi bi-file-earmark-person-fill"></i>
            </a>
          </div>
        </div>
        <div className="img_performance">
          <img className="male_computer" src="/developer_male.jpg" alt="developer" />
        </div>
      </section>
      <div className="description">
        <p>
          Soy un desarrollador con experiencia en tecnologias front-end y
          back-end, especializado en <span className="blue_text">ReactJS</span>
          ,<span className="blue_text"> HTML5</span>, 
          <span className="blue_text"> CSS</span> y 
          <span className="blue_text"> JavaScript.</span> He trabajado en roles
          de coordinacion y atencion al cliente, lo cual me ha permitido
          desarrollar mis habilidades en solucion de problemas, gestion de
          equipos y comunicación efectiva.
        </p>
      </div>
    </>
  );
}

export default About;
