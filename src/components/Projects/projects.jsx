import React from "react";
import "./proj.css";
import { PROJECTS } from "./data.js";

function Proj(props) {
  return (
    <li className="proj-item">
      <a href = "https://github.com/Vivan-verma1109"><img src={props.image} alt={props.title} className="proj-image" /></a>
      <h3 className="proj-title">{props.title}</h3>
      <p className="proj-description">{props.description}</p>
    </li>
  );
}

const Projects = () => {
  return (
    <>
      <div className="back" />

      <div className="boxing">
        <section id="proj">
          <ul>
            <Proj
              title={PROJECTS[0].title}
              image={PROJECTS[0].image}
              description={PROJECTS[0].description}
            />
            <Proj {...PROJECTS[1]} />
            <Proj {...PROJECTS[2]} />
          </ul>
        </section>
      </div>
    </>
  );
};

export default Projects;
