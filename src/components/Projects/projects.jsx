import React from "react";
import "./proj.css";

const Projects = () => {
  return (
    <>
      <div className="back" />
      <div className="gitflex">
        <a href="https://github.com/Vivan-verma1109" target="_blank">
          <img src="images/github-logo.png" className="git" />
        </a>
      </div>
      <div className="linkflex">
        <a href="https://www.linkedin.com/in/vivan-verma05/" target="_blank">
          <img src="images/linkedin-logo.png" className="linked"></img>
        </a>
      </div>
      <div className="resbox">
        <a
          href="https://photos.google.com/photo/AF1QipN28FK0e_n9reuRkJupz4o9RE-8vxJb1JXXmiUP"
          target="_blank"
        >
          <img src="images/resume.png" className="linked" />
        </a>
      </div>
    </>
  );
};

export default Projects;
