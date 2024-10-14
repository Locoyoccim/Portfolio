import About from "/src/components/About/About.jsx";
import "./App.css";
import Navbar from "/src/components/navbar/Navbar.jsx";
import ProjectArticle from "./ProjectArticle/ProjectArticle.jsx";
import Experience from "/src/components/experience/Experience.jsx";
import Footer from "/src/components/footer/Footer.jsx";
import countriesImg from "/Countries.png";
import html from "/Skills/html-5.png";
import GymApp from "/GymApp.png";
import TodoAppImg from "/TodoApp.png";
import css from "/Skills/css-3.png";
import JS from "/Skills/js.png";
import reactImg from "/Skills/react-2.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Django from "/Skills/django.svg";
import sql from "/Skills/postgresql.svg";
import python from "/Skills/python-5.svg";
import ts from "/Skills/typescript-2.svg";
import Angular from "/Skills/angular-icon.svg";
import docker from "/Skills/docker-4.svg";
import WebSocketImg from "/Skills/websocket.svg";
import StarAnimation from "/src/components/starAnimation/StarAnimation.jsx";
import Aos from "aos";
import ImgSkill from "./imgSkill/ImgSkill.jsx";
import { motion } from "framer-motion";
import { useRef } from "react";

function App() {
  const constraintsRef = useRef(null);
  const constraintsRef2 = useRef(null);

  Aos.init();
  return (
    <div className="initial">
      <StarAnimation />
      <div className="main_container">
        <Navbar />
        <main className="hero">
          <About />
          <div className="sub_container">
            <h2 id="proyectos" className="sub_tittles">
              PROYECTOS
            </h2>
            <ProjectArticle
              imgProject={GymApp}
              githubLink={"https://github.com/Locoyoccim/gym_frontend"}
              webLink={"https://gymapp.up.railway.app/"}
              html={html}
              css={css}
              js={ts}
              reactImg={reactImg}
              description={
                "Aplicación web desarrollada con React y TypeScript en el frontend, Python y Django en el backend, utilizando también JWT. Esta WebApp permite registrar los entrenamientos del usuario para posteriormente visualizarlos completos o de manera individual, pensado para uso en dispositivos móviles, para mejor experiencia se recomienda usar un dispositivo Movil!."
              }
            />
            <ProjectArticle
              imgProject={countriesImg}
              githubLink={"https://github.com/Locoyoccim/Countries_JSON"}
              webLink={"https://main--reliable-tanuki-77c097.netlify.app"}
              html={html}
              css={css}
              js={JS}
              reactImg={reactImg}
              direction={"reverse"}
              description={
                "Aplicación web desarrollada con React que permite a los usuarios explorar banderas de diferentes países del mundo. Utiliza una API externa para obtener información actualizada sobre las banderas. La interfaz es intuitiva y amigable, permitiendo a los usuarios buscar y filtrar países de manera eficiente."
              }
            />
            <ProjectArticle
              imgProject={TodoAppImg}
              githubLink={"https://github.com/Locoyoccim/Todo-App"}
              webLink={"https://silver-stroopwafel-e395c8.netlify.app"}
              html={html}
              css={css}
              js={JS}
              reactImg={reactImg}
              description={
                "Aplicación web desarrollada con React que permite a los usuarios gestionar sus tareas diarias de manera eficiente. La ToDo App proporciona una interfaz amigable para crear, editar, marcar como completadas y eliminar tareas."
              }
            />
            <h2 id="tecnologias" className="sub_tittles">
              TECNOLOGÍAS
            </h2>
            <motion.div className="skills_list" ref={constraintsRef}>
              <ImgSkill
                img={reactImg}
                nameSkill="React"
                drag // Habilitar drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
              <ImgSkill
                img={css}
                nameSkill="CSS"
                drag // Habilitar drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
              <ImgSkill
                img={html}
                nameSkill="HTML"
                drag // Habilitar drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
              <ImgSkill
                img={JS}
                nameSkill="JavaScript"
                drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
              <ImgSkill
                img={python}
                nameSkill="Python"
                drag // Habilitar drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
              <ImgSkill
                img={Django}
                nameSkill="Django"
                drag // Habilitar drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
              <ImgSkill
                img={ts}
                nameSkill="TypeScript"
                drag // Habilitar drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
              <ImgSkill
                img={sql}
                nameSkill="SQL"
                drag // Habilitar drag
                dragConstraints={constraintsRef} // Pasar restricciones
              />
            </motion.div>
            <h2 className="sub_tittles">ME GUSTARÍA APRENDER!!</h2>
            <motion.div className="To_learn" ref={constraintsRef2}>
              <ImgSkill
                img={Angular}
                nameSkill="Angular"
                drag // Habilitar drag
                dragConstraints={constraintsRef2} // Pasar restricciones
              />
              <ImgSkill
                img={docker}
                nameSkill="Docker"
                drag // Habilitar drag
                dragConstraints={constraintsRef2} // Pasar restricciones
              />
              <ImgSkill
                img={WebSocketImg}
                nameSkill="WebSocket"
                drag // Habilitar drag
                dragConstraints={constraintsRef2} // Pasar restricciones
              />
            </motion.div>
            <h2 id="experiencia" className="sub_tittles">
              EXPERIENCIA
            </h2>
            <div className="experience_container">
              <Experience job="COORDINADOR DE BANQUETES Y RESTAURANTE – HACIENDA EL CENTENARIO">
                Funciones principales de lograr el éxito de los eventos de
                acuerdo a las solicitudes, dentro del cual involucramos la
                organización y manejo desde 1 hasta 20 meseros, teniendo una
                gran comunicación y contacto con las áreas involucradas, durante
                esta temporada también asumí responsabilidades de coordinador de
                restaurante en Antigua Casona, Villa Tequila y Cafetería de
                centro cultural.
              </Experience>
              <Experience job="RECEPCIONISTA – HOTEL SOLAR DE LAS ÁNIMAS">
                Funciones principales de dar check in y check out, con el
                sistema OPERA FULL SERVICE, generación de reservaciones, además
                de apoyar a diferentes áreas del hotel como grupos, con la
                creación de PM (Posting Master), además funciones como auditor
                nocturno al cubrir vacaciones y descansos del mismo.
              </Experience>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
