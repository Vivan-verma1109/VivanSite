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
          className={showNavigation ? "aboutIcon1" : "aboutIcon2"}
        />
      </div>
    </>
  );
};

export default Navigation;
