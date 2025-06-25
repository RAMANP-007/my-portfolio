import React from 'react';
import './Testimonials.css';

const testimonials = [
  { id: 1, name: 'Jane Doe', image: 'https://i.ibb.co/8xW8R1J/client1.jpg', rating: 5, review: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."' },
  { id: 2, name: 'John Smith', image: 'https://i.ibb.co/7jZzQZ7/client2.jpg', rating: 5, review: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
  { id: 3, name: 'Emily White', image: 'https://i.ibb.co/d5GZvJ7/client3.jpg', rating: 5, review: '"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."' },
  { id: 4, name: 'Michael Brown', image: 'https://i.ibb.co/9gkzZJ1/client4.jpg', rating: 5, review: '"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>TESTIMONIALS</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
            </div>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
