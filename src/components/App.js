import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import Welcome from './Welcome';
import Worked from './Worked';

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Worked />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
