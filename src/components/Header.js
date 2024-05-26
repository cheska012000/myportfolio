// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image1';
import './Header.css';

const Header = () => (
  <header className="header">
    <img src={logo} alt="Logo" className="logo" />
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
