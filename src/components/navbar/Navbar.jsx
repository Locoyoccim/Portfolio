import React, { useState } from "react";
import "/src/components/navbar/navbar.css";
function Navbar() {
  const [optionState, SetOptionsState] = useState("");

  const onClick = (newStatus) => {
    SetOptionsState(newStatus);
  };
  return (
    <>
      <header id="navbar_container">
        <nav className="navbar">
          <a href="#sobre_mi" className="logo_container">
            <p>&lt; CAHR &#47;&gt;</p>
          </a>
          <button onClick={() => onClick("show")} className="btn_hamburguer">
            <i className="bi bi-list"></i>
          </button>
          <ul className={`options ${optionState}`}>
            <li className="x">
              <button onClick={() => onClick("")} className="x_btn">
                <i className="bi bi-x"></i>
              </button>
            </li>
            <a onClick={() => onClick("")} href="#sobre_mi">
              <li>Sobre mi</li>
            </a>
            <a onClick={() => onClick("")} href="#proyectos">
              <li>Proyectos</li>
            </a>
            <a onClick={() => onClick("")} href="#tecnologias">
              <li>Tecnologías</li>
            </a>
            <a onClick={() => onClick("")} href="#experiencia">
              <li>Experiencia</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
