import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./nav.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <div className="Nav">
        <NavLink exact to='/' className='Navbar_element'>Home</NavLink>
        <NavLink to='/about' className='Navbar_element'>About Me</NavLink>
        <NavLink to='/projects' className='Navbar_element'>Projects</NavLink>
      </div>
      <div className="square"></div>
    </>
  );
};

export default Navigation;
