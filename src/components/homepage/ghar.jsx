import React from "react";
import "./ghar.css";

const welcomeTags = ["welcome", "välkommen", "willkommen", "bienvenue", "benvenuto", "bienvenidos", "velkominn"]

function getRandom(max){
  return Math.floor(Math.random() * (max + 1))
}

const Ghar = () => {
  return (
    <>
      <div className="container">
        <div className="welcome">
          <h1>{welcomeTags[getRandom(6)]} to my portfolio</h1>
        </div>
      </div>
    </>
  );
};

export default Ghar;
