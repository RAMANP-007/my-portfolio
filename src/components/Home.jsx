import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={12} className="intro-text" data-aos="fade-right">
            <h4 data-aos="fade-right" data-aos-delay="100">Hi, I’m Raman Patra</h4>
            <h1 data-aos="fade-right" data-aos-delay="200">Full-Stack MERN Developer</h1>
            <p data-aos="fade-right" data-aos-delay="300">I build dynamic and responsive web applications from scratch, turning ideas into reality.</p>
            <a href="#portfolio" className="btn btn-primary" data-aos="fade-up" data-aos-delay="400">View My Work</a>
          </Col>
          <Col lg={5} md={12} className="text-center" data-aos="fade-left" data-aos-delay="500">
            <img src="/images/mypic.jpg" alt="Raman Patra" className="intro-image img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
