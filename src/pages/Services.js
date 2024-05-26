import React from 'react';
import './Services.css'; 

const services = [
  {
    title: "General Programming",
    description: "Providing comprehensive programming solutions across various languages and platforms.",
    image: "programming.jpg", 
  },
  {
    title: "Web Development",
    description: "Creating responsive and modern websites tailored to your needs.",
    image: "webdevelopment.jpg", 
  },
  {
    title: "Mobile Apps",
    description: "Designing and developing user-friendly mobile applications for Android and iOS.",
    image: "mobileapps.jpg", 
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Services</h1>
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
