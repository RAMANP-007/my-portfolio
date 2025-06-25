import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="container-fluid p-0">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
