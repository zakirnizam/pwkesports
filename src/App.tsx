import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Rankings from './components/Rankings';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import ScrollToTop from './components/ScrollToTop';
import NewsCarousel from './components/NewsCarousel';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);
  return (
    <div className="bg-black text-white">
      <ScrollToTop/>
      <Header />
      <Hero />
      <About />
      <Achievements />
      <NewsCarousel />
      <Team />
      <Rankings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;