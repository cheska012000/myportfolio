/* src/pages/Home.js */

/**
 * File name: Home.js
 * Student's Name: Cheska L. Mendoza
 * Student ID: 301352449
 * Date: 05/24/24
 */

import React from 'react';
import './Home.css';
import logo from '../assets/logo.png'; 

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="home-logo" />
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-mission">
        My mission is to inspire and innovate through exceptional design and technology solutions. I strive to empower individuals and businesses to reach their full creative potential.</p>
      <a href="/about" className="home-button">Learn More About Me</a>
    </div>
  );
}

export default Home;
