import React from "react";
import "/src/components/ProjectArticle/projectArticle.css";
import Aos from "aos";

function ProjectArticle({
  imgProject,
  description,
  githubLink,
  webLink,
  html,
  css,
  js,
  reactImg,
  direction,
}) {
  Aos.init();
  return (
    <>
      {/* direction, "reverse", especifica el sentido que tomara el contenido e la tarjeta */}
      <article
        id="article_container"
        className={direction}
      >
        <div className="project_preview_img">
          <img src={imgProject} alt="project img preview" />
        </div>
        <div className="project_details">
          <p className="project_description">{description}</p>
          <div className="skills_links_container">
            <div className="skills">
              <img src={html} alt="html_img" />
              <img src={css} alt="css_img" />
              <img src={js} alt="JS_img" />
              <img src={reactImg} alt="react_logo" />
            </div>
          </div>
          <div className="links">
            <a href={githubLink} target="_blank">
              <i className="bi bi-github"></i>
            </a>
            <a href={webLink} target="_blank">
              <i className="bi bi-link"></i>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default ProjectArticle;
