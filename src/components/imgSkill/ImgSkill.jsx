import "./imgSkill.css";
function ImgSkill({ nameSkill, img, animationAos }) {
  return (
    <div id="skill_img_container">
      <div className="skill_name">{nameSkill}</div>
      <img
        className="skill_img"
        src={img}
        alt={nameSkill}
        data-aos={animationAos}
        data-aos-duration="1500"
        data-aos-once="true"
      />
    </div>
  );
}

export default ImgSkill;