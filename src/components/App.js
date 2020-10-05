import React from 'react';
import ReactGA from 'react-ga';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';
import Projects from './Projects';
import Welcome from './Welcome';
import Worked from './Worked';

function initializeGA() {
  ReactGA.initialize('UA-169658938-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeGA();

  return (
    <div className="App">
      <NavBar />
      <Welcome id="welcome "/>
      <About id="about" />
      <Worked id="worked" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
