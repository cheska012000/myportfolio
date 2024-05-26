import React from 'react';
import './Home.css';
import logo from '../assets/logo.png'; // Adjust the path based on your project structure

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="home-logo" />
      <h1 className="home-title">Welcome to My Portfolio</h1>
      <p className="home-mission">My mission is to inspire and innovate through exceptional design and technology solutions. We strive to empower individuals and businesses to reach their full creative potential.</p>
      <a href="/about" className="home-button">Learn More About Me</a>
    </div>
  );
}

export default Home;
