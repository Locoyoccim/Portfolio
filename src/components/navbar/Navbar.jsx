import React, { useState } from "react";
import "/src/components/navbar/navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const hamburgerBtn = "bi bi-list";
  const closeBtn = "bi bi-x";
  const [btn, setBtn] = useState(hamburgerBtn);
  const [isOpen, setIsOpen] = useState(false);
  const variantNav = {
    visible: { x: 0 },
    hidden: { x: 800 },
  };
  const variantLi = {
    visible: { x: 0, display: 1 },
    hidden: { x: 200, display: 0 },
  };

  const onClick = () => {
    if (window.innerWidth <= 769) {
      setBtn(btn === closeBtn ? hamburgerBtn : closeBtn);
      setIsOpen(isOpen ? false : true);
    }
  };

  return (
    <>
      <header id="navbar_container">
        <nav className="navbar">
          <a href="#sobre_mi" className="logo_container">
            <p>&lt; CAHR &#47;&gt;</p>
          </a>
          <button onClick={() => onClick()} className="btn_hamburger">
            <i className={btn}></i>
          </button>
          <motion.ul
            className={`options`}
            variants={variantNav}
            animate={isOpen ? "visible" : "hidden"}
            transition={{ ease: "easeInOut", duration: 0.8 }}
          >
            <a onClick={() => onClick()} href="#sobre_mi">
              <motion.li
                variants={variantLi}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
              >
                Sobre mi
              </motion.li>
            </a>
            <a onClick={() => onClick()} href="#proyectos">
              <motion.li
                variants={variantLi}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
              >
                Proyectos
              </motion.li>
            </a>
            <a onClick={() => onClick()} href="#tecnologias">
              <motion.li
                variants={variantLi}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
              >
                Tecnologías
              </motion.li>
            </a>
            <a onClick={() => onClick()} href="#experiencia">
              <motion.li
                variants={variantLi}
                animate={isOpen ? "visible" : "hidden"}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
              >
                Experiencia
              </motion.li>
            </a>
          </motion.ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
