import React from "react";
import Ghar from "./components/homepage/ghar";
import About from "./components/Information/About";
import Navigation from "./components/Navbar/Navigation";
import Projects from "./components/Projects/projects";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {

  return (
    <>
      <div className="background"></div>
      <div className="pageMain">
        <br />

        <img src = "https://assetsio.gnwcdn.com/elden-ring-all-site-of-grace-locations-8042-1648646338309.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp" className = "navGrace"/>


        <Navigation />
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
