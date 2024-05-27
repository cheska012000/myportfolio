/* src/pages/Projects.js */

/**
 * File name: Projects.js
 * Student's Name: Cheska L. Mendoza
 * Student ID: 301352449
 * Date: 05/24/24
 */

import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    id: 1,
    image: project1,
    title: 'Project One',
    description: 'This project involved developing a complex backend system for data management. My role was to design and implement the database architecture, resulting in efficient data processing and storage solutions.',
  },
  {
    id: 2,
    image: project2,
    title: 'Project Two',
    description: 'As the web designer, I was responsible for creating the layout, design, and functionality of the website. The project resulted in a responsive, user-friendly site that enhanced the client’s online presence.',
  },
  {
    id: 3,
    image: project3,
    title: 'Project Three',
    description: 'In this project, I created an online game, focusing on interactive design and seamless user experience. The game achieved high user engagement and positive feedback for its playability and design.',
  },
];

const Projects = () => (
  <div className="projects-container">
    <h1 className="projects-title">My Projects</h1>
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img src={project.image} alt={project.title} className="project-image" />
          <h2 className="project-title">{project.title}</h2>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
