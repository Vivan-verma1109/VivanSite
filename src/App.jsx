import React, { useState } from "react";
import Ghar from "./components/homepage/ghar";
import About from "./components/Information/About";
import Navigation from "./components/Navbar/Navigation";
import Projects from "./components/Projects/projects";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import bonfire from "/images/bonfire.gif";

const welcomeTags = ["welcome", "välkommen", "willkommen", "bienvenue", "benvenuto", "bienvenidos", "velkominn"]

function getRandom(max){
  return Math.floor(Math.random() * (max + 1))
}

const App = () => {
  const [showNavigation, setShowNavigation] = useState(true);
  const [showSquare, setShowSquare] = useState(false);
  const [isHidingSquare, setIsHidingSquare] = useState(false);
  const [clickCount, setClickCount] = useState(-1);

  const clickTest = () => {
    setClickCount((prevCount) => prevCount + 1);
    setShowSquare((prevShowSquare) => !prevShowSquare);
    setShowNavigation((prevShowNavigation) => !prevShowNavigation);
    if (showSquare && isHidingSquare) {
      setIsHidingSquare(false);
    }
  };
  return (
    <>
      <div className="background" />
      <div className="container">
        <div className="welcome">
          <h1>{welcomeTags[getRandom(6)]} to my portfolio</h1>
        </div>
      </div>

      <img src={bonfire} onClick={clickTest} className="bonfire" />

      <div
        className={`square ${isHidingSquare ? "hidden" : ""} ${
          clickCount % 2 === 0 ? "even-click" : "odd-click"
        }`}
      ></div>
      {<Navigation showNavigation={showNavigation} />}

      <div className="pageMain">
        <br />

        <Routes>
          <Route path="/" element={<Ghar />}/>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
