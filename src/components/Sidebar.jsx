import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="https://i.ibb.co/kX6A4g8/avatar.png" alt="Raman Patra" className="profile-avatar" />
        <h2 className="profile-name">Raman Patra</h2>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#projects" className={activeLink === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <div className="social-icons">
          <a href="https://github.com/RAMANP-007" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/raman-patra/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/raman_patra_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/raman.patra.90/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        </div>
        <a href="/resume.pdf" download className="btn-resume">Download Resume</a>
      </div>
    </aside>
  );
};

export default Sidebar;
