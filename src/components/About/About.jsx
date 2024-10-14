import "/src/components/About/about.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useScramble } from "use-scramble";
import mentor from "/frontendmentor-svgrepo-com.svg";
import { motion } from "framer-motion";
import { useRef } from "react";

function About() {
  const constraintsRef = useRef(null);
  const { ref, replay } = useScramble({
    text: "Carlos Antonio Hernandez robles",
    speed: 0.45,
    tick: 1,
    overflow: true,
  });
  return (
    <>
      <section id="sobre_mi">
        <div className="performance">
          <h1 className="name" ref={ref} onMouseOver={replay}></h1>
          <p className="contact_details">
            carlos_360@outlook.es | 374 107 7582 | Tequila, Jal, Mexico
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
            <a href="/Hoja_de_Vida_Carlos.pdf" target="_blank">
              <i className="bi bi-file-earmark-person-fill"></i>
            </a>
            <a
              href="https://www.frontendmentor.io/profile/Locoyoccim"
              target="_blank"
            >
              <img
                src={mentor}
                alt="FrontEndMentor"
                className="frontEndMentor"
              />
            </a>
          </div>
        </div>
        <motion.div ref={constraintsRef} className="img_performance">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }} 
            transition={{
              duration: 0.6,
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.05 }}
            drag
            dragConstraints={constraintsRef}
            className="male_computer"
            src="/developer_male.jpg"
            alt="developer"
          />
        </motion.div>
      </section>
      <div className="description">
        <p>
          Soy un desarrollador con experiencia en tecnologías front-end y
          back-end, especializado en <span className="blue_text">ReactJS</span>,
          <span className="blue_text"> HTML5</span>,
          <span className="blue_text"> CSS</span> y
          <span className="blue_text"> JavaScript.</span> He trabajado en roles
          de coordinación y atención al cliente, lo cual me ha permitido
          desarrollar mis habilidades en solución de problemas, gestión de
          equipos y comunicación efectiva.
        </p>
      </div>
    </>
  );
}

export default About;
