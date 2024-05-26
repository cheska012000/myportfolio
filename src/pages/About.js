
import React from 'react';
import './About.css'; // Make sure you have a corresponding CSS file for styling
import profilePicture from '../assets/photo.png'; // Adjust the path according to your project structure
import resume from '../assets/resume.pdf'; // Adjust the path according to your project structure

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <img src={profilePicture} alt="Cheska Mendoza" className="profile-picture" />
      <p className="about-description">
      My name is Cheska Mendoza. I am a Software Engineering Technician with a deep passion for technology and creativity.
        I am enthusiastic about learning and growing in this field. Currently, I am in my third semester of studying Software Engineering.
        I strive to inspire and innovate through exceptional design and technology solutions.
      </p>
      <a href={resume} className="resume-link" target="_blank" rel="noopener noreferrer">View My Resume (PDF)</a>
    </div>
  );
}

export default About;


