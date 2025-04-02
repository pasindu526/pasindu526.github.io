import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Resume from './components/Resume';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
