import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 150;

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        setActiveLink(sectionId);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BSNavbar expand="lg" fixed="top" className={isScrolled ? 'scrolled' : ''}>
      <Container fluid>
        <BSNavbar.Brand href="#home" className="nav-logo">Raman Patra</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BSNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active' : ''}>About</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
