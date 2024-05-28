import React from 'react';
import Ghar from './components/homepage/ghar';
import About from './components/Information/About';
import Navigation from './components/Navbar/Navigation';
import Projects from './components/Projects/projects';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import graceImage from '/images/grace-removebg.png';

const App = () => {
  const clickTest = () => {
    console.log("Button Clicked");
  }

  return (
    <div className="background">
      <div className="pageMain">
        <br />
        <button className="butt">
          <img src={graceImage} onClick={clickTest} className="navGrace"/>
        </button>
        <Navigation />
        <Routes>
          <Route path="/" element={<Ghar />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;