import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const skills = ['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3', 'Git & GitHub'];

const About = () => {
  return (
    <section id="about">
      <Container>
        <div className="about-content text-center" data-aos="fade-up">
          <h2>About Me</h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <p className="bio">
                I am a passionate Full-Stack MERN Developer dedicated to building and optimizing high-quality web applications. With a solid foundation in modern web technologies, I enjoy solving complex problems and turning creative ideas into functional, user-friendly products. My goal is to continuously learn and contribute to innovative projects.
              </p>
            </Col>
          </Row>
          <h3>My Skills</h3>
          <div className="skills-list">
            {skills.map((skill, index) => <div key={skill} className="skill-item" data-aos="fade-up" data-aos-delay={index * 50}>{skill}</div>)}
          </div>
          <Row className="stats-container">
            <Col md={4} className="stat-box" data-aos="fade-up" data-aos-delay="100">
              <h4>2+</h4>
              <p>Years of Experience</p>
            </Col>
            <Col md={4} className="stat-box" data-aos="fade-up" data-aos-delay="200">
              <h4>4+</h4>
              <p>Completed Projects</p>
            </Col>
            <Col md={4} className="stat-box" data-aos="fade-up" data-aos-delay="300">
              <h4>150+</h4>
              <p>GitHub Contributions</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
