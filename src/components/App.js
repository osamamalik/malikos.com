import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';
import Projects from './Projects';
import Welcome from './Welcome';
import Worked from './Worked';

function App() {
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
