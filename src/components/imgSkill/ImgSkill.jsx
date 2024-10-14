import { easeIn, easeInOut, motion } from "framer-motion";
import "./imgSkill.css";

function ImgSkill({ nameSkill, img, drag, dragConstraints }) {
  return (
    <motion.div
      id="skill_img_container"
      drag={drag} // Aplicar drag
      dragConstraints={dragConstraints} // Aplicar los límites de arrastre
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{ type: "spring" }}
      viewport={{once: true}}
      whileHover={{scale: 1.1}}
    >
      <img className="skill_img" src={img} alt={nameSkill} />
      <div className="skill_name">{nameSkill}</div>
    </motion.div>
  );
}

export default ImgSkill;
