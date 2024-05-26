// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Ensure the path to your logo is correct
import './Navigation.css'; // Ensure the path to your CSS file is correct

const Navigation = () => (
  <nav className="navigation">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navigation;