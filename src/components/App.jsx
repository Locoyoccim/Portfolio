import About from "/src/components/About/About.jsx";
import "./App.css";
import Navbar from "/src/components/navbar/Navbar.jsx";
import ProjectArticle from "./ProjectArticle/ProjectArticle.jsx";
import Experience from "/src/components/experience/Experience.jsx";
import Footer from "/src/components/footer/Footer.jsx";
import QuizApp from "/QuizApp.png";
import html from "/Skills/html-5.png";
import GymApp from "/GymApp.png";
import Users from "/Users.png";
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
                            html={Django}
                            css={python}
                            js={ts}
                            reactImg={reactImg}
                            description={
                                "Aplicación web desarrollada con React y TypeScript en el frontend, Python y Django en el backend, utilizando también JWT. Esta WebApp permite registrar los entrenamientos del usuario para posteriormente visualizarlos completos o de manera individual, pensado para uso en dispositivos móviles, para mejor experiencia se recomienda usar un dispositivo Movil!."
                            }
                        />
                        <ProjectArticle
                            imgProject={QuizApp}
                            githubLink={"https://github.com/Locoyoccim/QuizForm_FE"}
                            webLink={"https://quizformfe-production.up.railway.app/"}
                            html={Django}
                            css={python}
                            js={sql}
                            reactImg={reactImg}
                            direction={"reverse"}
                            description={
                                "Desarrollé una aplicación con backend propio y base de datos para gestionar formularios. Los usuarios regulares pueden responder y enviar formularios, además de consultar las respuestas recibidas. Los administradores tienen control completo para crear, editar y administrar formularios, respuestas y usuarios, garantizando un manejo eficiente y seguro de la información."
                            }
                        />
                        <ProjectArticle
                            imgProject={Users}
                            githubLink={
                                "https://github.com/Locoyoccim/FE_Transition_Task4"
                            }
                            webLink={
                                "https://fetransitiontask4-production.up.railway.app/"
                            }
                            html={python}
                            css={Django}
                            js={sql}
                            reactImg={reactImg}
                            description={
                                "Desarrollé una aplicación para gestionar usuarios y sus roles dentro de una empresa, permitiendo visualizar su estado y actualizarlo entre activo y no activo. Toda la información se administra mediante una base de datos con un backend en Django y Python, garantizando seguridad y eficiencia. Para iniciar sesión, por ejemplo, se puede usar el correo elena.cruz@example.com."
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
                                Responsable de garantizar el éxito de los eventos según
                                las solicitudes de los clientes, coordinando y
                                supervisando equipos de entre 1 y 20 meseros, manteniendo
                                una comunicación efectiva y constante con todas las áreas
                                involucradas. Durante este periodo, también asumí
                                funciones como coordinador de restaurante en Antigua
                                Casona, Villa Tequila y la cafetería del centro cultural.
                            </Experience>
                            <Experience job="RECEPCIONISTA – HOTEL SOLAR DE LAS ÁNIMAS">
                                Encargado de realizar procesos de check-in y check-out
                                utilizando el sistema OPERA Full Service, así como de
                                gestionar reservaciones. Brindé apoyo a distintas áreas
                                del hotel, incluyendo el departamento de grupos. También
                                desempeñé funciones de gerente auditor nocturno cubriendo
                                vacaciones y días de descanso del titular.
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
