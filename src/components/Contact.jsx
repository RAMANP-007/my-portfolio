import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        event.target.reset();
        window.location.hash = 'home';
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact">
      <Container>
        <div className="contact-content text-center" data-aos="fade-up">
          <h2>Get in Touch</h2>
          <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="contact-form-container" data-aos="fade-up" data-aos-delay="100">
                <Form ref={form} name="contact" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" name="name" placeholder="Your Name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" placeholder="Your Email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" name="message" placeholder="Your Message" rows={6} required />
                  </Form.Group>
                  <Button type="submit" className="btn-submit">Send Message</Button>
                </Form>
              </div>
            </Col>
          </Row>
          <div className="contact-info" data-aos="fade-up" data-aos-delay="200">
            <a href="mailto:patraraman7@gmail.com" className="contact-email">patraraman7@gmail.com</a>
            <div className="social-icons-contact">
              <a href="https://github.com/RAMANP-007" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/raman-patra/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/raman_patra_/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/raman.patra.90/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
