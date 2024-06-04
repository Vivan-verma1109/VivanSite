import React from "react";
import "./proj.css";
import { PROJECTS } from "./data.js";

function Proj(props) {
  return (
    <li>
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

const Projects = () => {
  return (
    <>
      <div className="back" />

      <div className="boxing">
        <section id="proj">
          <h2>Personal Projects</h2>
          <ul>
            <Proj
              title={PROJECTS[0].title}
              img={PROJECTS[0].image}
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
