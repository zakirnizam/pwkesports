import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Rankings from './components/Rankings';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Team />
      {/* <Rankings /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;