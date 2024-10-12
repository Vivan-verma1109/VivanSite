import React, { useState, useEffect } from "react";
import "./ghar.css";

const welcomeTags = [
  "welcome",
  "välkommen",
  "willkommen",
  "bienvenue",
  "benvenuto",
  "bienvenidos",
  "velkominn"
];

const Ghar = () => {
  const [currentTag, setCurrentTag] = useState(welcomeTags[0]);
  const [fadeClass, setFadeClass] = useState("fade");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeClass("fade fade-out");


      setTimeout(() => {
        setCurrentTag(welcomeTags[getRandom(welcomeTags.length - 1)]);
        setFadeClass("fade");
      }, 1000); 
    }, 3000);

    return () => clearInterval(intervalId); 
  }, []);

  function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  return (
    <div className="container">
      <div className={`welcome ${fadeClass}`}>
        <h1>{currentTag} to my portfolio</h1>
      </div>
    </div>
  );
};

export default Ghar;
