import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./nav.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <div class="entire">
        <img src="https://static.thenounproject.com/png/992984-200.png" className = "aboutIcon1"/>
      </div>
    </>
  );
};

export default Navigation;
