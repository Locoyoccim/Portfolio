import About from "/src/components/About/About.jsx";
import "./App.css";
import Navbar from "/src/components/navbar/Navbar.jsx";
import ProjectArticle from "./ProjectArticle/ProjectArticle.jsx";
import Experince from "/src/components/experience/Experience.jsx";
import Footer from "/src/components/footer/Footer.jsx";
import countriesImg from "/Countries.png";
import html from "/Skills/html-5.png";
import FormImg from "/multiStepForm.png";
import TodoAppImg from "/TodoApp.png";
import css from "/Skills/css-3.png";
import JS from "/Skills/js.png";
import reactImg from "/Skills/react-2.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import django from "/Skills/django.svg";
import sql from "/Skills/postgresql.svg";
import python from "/Skills/python-5.svg";
import ts from "/Skills/typescript-2.svg";
import Angular from "/Skills/angular-icon.svg";
import docker from "/Skills/docker-4.svg";
import WebSocketImg from "/Skills/websocket.svg";
import StarAnimation from "/src/components/starAnimation/StarAnimation.jsx";
import Aos from "aos";

function App() {
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
              imgProject={countriesImg}
              githubLink={"https://github.com/Locoyoccim/Countries_JSON"}
              webLink={"https://main--reliable-tanuki-77c097.netlify.app"}
              html={html}
              css={css}
              js={JS}
              reactImg={reactImg}
              description={
                "Aplicación web desarrollada con React que permite a los usuarios explorar banderas de diferentes países del mundo. Utiliza una API externa para obtener información actualizada sobre las banderas. La interfaz es intuitiva y amigable, permitiendo a los usuarios buscar y filtrar países de manera eficiente."
              }
            />
            <ProjectArticle
              imgProject={FormImg}
              githubLink={"https://github.com/Locoyoccim/multi_step_form"}
              webLink={"https://monumental-rugelach-c3a266.netlify.app"}
              html={html}
              css={css}
              js={JS}
              reactImg={reactImg}
              direction={"reverse"}
              description={
                "Aplicación web que permite a los usuarios completar un formulario dividido en múltiples pasos. La aplicación de formulario multi-step proporciona una experiencia de usuario fluida al dividir el proceso en secciones, guiando al usuario paso a paso. Los datos ingresados se guardan en cada paso para asegurar la integridad de la información"
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
              TECNOLOGIAS
            </h2>
            <div className="skills_list">
              <img
                src={reactImg}
                alt="react logo"
                data-aos="fade-right"
                data-aos-duration="1500"
              />
              <img
                src={css}
                alt="css logo"
                data-aos="fade-down"
                data-aos-duration="1500"
              />
              <img
                src={html}
                alt="html logo"
                data-aos="fade-down"
                data-aos-duration="1500"
              />
              <img
                src={JS}
                alt="JS logo"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
              <img
                src={python}
                alt="Python logo"
                data-aos="fade-right"
                data-aos-duration="1500"
              />
              <img
                src={django}
                alt="django logo"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <img
                src={ts}
                alt="ts logo"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
              <img
                src={sql}
                alt="Sql logo"
                data-aos="fade-left"
                data-aos-duration="1500"
              />
            </div>
            <h2 className="sub_tittles">ME GUSTARIA APRENDER!!</h2>
            <div className="To_learn">
              <img
                src={Angular}
                alt="angular logo"
                data-aos="flip-up"
                data-aos-duration="1500"
              />
              <img
                src={docker}
                alt="docker logo"
                data-aos="flip-up"
                data-aos-duration="1500"
              />
              <img
                src={WebSocketImg}
                alt="websocket logo"
                data-aos="flip-up"
                data-aos-duration="1500"
              />
            </div>
            <h2 id="experiencia" className="sub_tittles">
              EXPERIENCIA
            </h2>
            <div className="experience_container">
              <Experince job="COORDINADOR DE BANQUETES Y RESTAURANTE – HACIENDA EL CENTENARIO">
                Funciones principales de lograr el éxito de los eventos de
                acuerdo a las solicitudes, dentro del cual involucramos la
                organización y manejo desde 1 hasta 20 meseros, teniendo una
                gran comunicación y contacto con las áreas involucradas, durante
                esta temporada también asumí responsabilidades de coordinador de
                restaurante en Antigua Casona, Villa Tequila y Cafetería de
                centro cultural.
              </Experince>
              <Experince job="RECEPCIONISTA – HOTEL SOLAR DE LAS ÁNIMAS">
                Funciones principales de dar check in y check out, con el
                sistema OPERA FULL SERVICE, generación de reservaciones, además
                de apoyar a diferentes áreas del hotel como grupos, con la
                creación de PM (Posting Master), además funciones como auditor
                nocturno al cubrir vacaciones y descansos del mismo.
              </Experince>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
