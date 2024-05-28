/* src/pages/Services.js */

/**
 * File name: Services.js
 * Student's Name: Cheska L. Mendoza
 * Student ID: 301352449
 * Date: 05/24/24
 */

import React from 'react';
import './Services.css'; 

const services = [
  {
    title: "General Programming",
    description: "Offering versatile programming solutions across multiple languages including Java, C#, Python, and JavaScript. Expertise in full-stack development, database management, and cloud integration.",
    image: "programming.jpg", 
  },
  {
    title: "Web Development",
    description: "Creating modern, responsive websites with a focus on user experience and performance. Specializing in HTML, CSS, JavaScript, React, and backend solutions with Node.js",
    image: "webdevelopment.jpg", 
  },
  {
    title: "Mobile Apps",
    description: "Designing and developing intuitive mobile applications for both Android and iOS platforms. Proficient in Swift, Kotlin, Flutter, and React Native, ensuring seamless performance and user-friendly interfaces.",
    image: "mobileapps.jpg", 
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">My Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={require(`../assets/${service.image}`)} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

