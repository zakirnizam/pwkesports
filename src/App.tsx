import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Rankings from './components/Rankings';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-black text-white">
      <ScrollToTop/>
      <Header />
      <Hero />
      <About />
      <Achievements />
      <Team />
      <Rankings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;