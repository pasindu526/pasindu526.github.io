import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Resume from './components/Resume';
import CompanyProject from './components/CompanyProjects';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <CompanyProject />
      <Project />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
