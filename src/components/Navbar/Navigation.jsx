import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./nav.css";

const Navigation = ({ showNavigation }) => {
  const location = useLocation();

  return (
    <>
      <div className="entire">
        <img
          src="https://static.thenounproject.com/png/992984-200.png"
          className={showNavigation ? "aboutIcon2" : "aboutIcon1"}
        />
        <img
          src="https://i.pinimg.com/originals/71/c4/14/71c41419a3a25b09742aaf3dc648bb11.png"
          className={showNavigation ? "proj2" : "proj1"}
        />
        <img
          src="https://cdn-icons-png.freepik.com/512/2/2144.png"
          className={showNavigation ? "home2" : "home1"}
        />
      </div>
    </>
  );
};

export default Navigation;
