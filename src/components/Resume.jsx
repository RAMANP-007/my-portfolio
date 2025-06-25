import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume">
      <h2>RESUME</h2>
      <div className="resume-container">
        <div className="resume-column">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>Master of Fine Arts</h4>
            <h5>University of Art & Design</h5>
            <span>2012 - 2014</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of Arts</h4>
            <h5>State University</h5>
            <span>2008 - 2012</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
          </div>
        </div>
        <div className="resume-column">
          <h3>Experience</h3>
          <div className="resume-item">
            <h4>Lead Graphic Designer</h4>
            <h5>Creative Agency</h5>
            <span>2018 - Present</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
          </div>
          <div className="resume-item">
            <h4>Web Designer</h4>
            <h5>Marketing Firm</h5>
            <span>2015 - 2018</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
