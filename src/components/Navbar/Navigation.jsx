import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./nav.css";

const Navigation = ({ showNavigation }) => {


  return (
    <>
      <div className="entire">
        <NavLink to="/about">
          <img
            src="https://static.thenounproject.com/png/992984-200.png"
            className={showNavigation ? "aboutIcon1" : "aboutIcon2"}
          />
        </NavLink>
        <NavLink to="/projects">
          <img
            src="https://i.pinimg.com/originals/71/c4/14/71c41419a3a25b09742aaf3dc648bb11.png"
            className={showNavigation ? "proj1" : "proj2"}
          />
        </NavLink>
        <NavLink to="/">
          <img
            src="https://cdn-icons-png.freepik.com/512/2/2144.png"
            className={showNavigation ? "home1" : "home2"}
          />
        </NavLink>
      </div>
    </>
  );
};

export default Navigation;
