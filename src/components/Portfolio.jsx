import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Portfolio.css';
import pizzaAppImg from '../assets/pizzaapp.jpg.png';
import shopmeniaImg from '../assets/shopmenia.jpg.png';
import weatherAppImg from '../assets/weatherapp.jpg.png';
import bhagavadGitaImg from '../assets/123.png';
import eventscheduler from '../assets/eventscheduler.png';
import evecafe from '../assets/evecafe.png';

const projects = [
  {
    id: 2,
    title: 'SHOPER',
    description: 'A full-featured e-commerce website with product listings, a shopping cart, and a secure checkout process.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/RAMANP-007/shopmenia.git',
    imageUrl: shopmeniaImg,
  },
  {
    id: 3,
    title: 'Bhagavad Gita Verse Explainer',
    description: 'An app that provides explanations for verses from the Bhagavad Gita.',
    tech: ['React', 'JavaScript', 'API'],
    githubUrl: 'https://github.com/RAMANP-007/bhagwat_geeta_verse_explainer.git',
    imageUrl: bhagavadGitaImg,
  },
  {
    id: 4,
    title: 'SliceJoy',
    description: 'A real-time pizza ordering and delivery application.',
    tech: ['MERN', 'Socket.io', 'Redux'],
    githubUrl: 'https://github.com/RAMANP-007/pizza-delivery-app.git',
    imageUrl: pizzaAppImg,
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'A simple application to check the weather for a given city.',
    tech: ['React', 'JavaScript', 'API'],
    githubUrl: 'https://github.com/RAMANP-007/weather-app.git',
    imageUrl: weatherAppImg,
  },
  {
    id: 6,
    title: 'AI Event Scheduler',
    description: 'An AI-powered event scheduler to help you manage your events.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AI'],
    githubUrl: 'https://github.com/RAMANP-007/event-sheduler.git',
    imageUrl: eventscheduler,
  },
  {
    id: 7,
    title: 'Eve-Cafe',
    description: 'A website for a cafe with a menu, gallery, and contact information.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/RAMANP-007/eve-cafe.git',
    imageUrl: evecafe,
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <Container>
        <h2 className="text-center" data-aos="fade-up">My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-4" key={project.id}>
              <div className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-image-container">
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-project">View on GitHub</a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((techItem, i) => (
                      <span key={i} className="tech-badge">{techItem}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
