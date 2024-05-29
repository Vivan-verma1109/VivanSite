import React, { useState } from "react";
import Ghar from "./components/homepage/ghar";
import About from "./components/Information/About";
import Navigation from "./components/Navbar/Navigation";
import Projects from "./components/Projects/projects";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import graceImage from "/images/grace-removebg.png";

const App = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const clickTest = () => {
    setShowNavigation((prevState) => !prevState);
  };

  return (
    <>
      <div className="background" />

      <div className="container">
        <div className="welcome">
          <h1>welcome to my portfolio</h1>
        </div>
      </div>

      <div className="buttons">
        <button>
          <img src={graceImage} onClick={clickTest} className="navGrace" />
        </button>
      </div>
      {showNavigation && <Navigation />}
      <div className="pageMain">
        <br />

        <Routes>
          <Route path="/" element={<Ghar />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
