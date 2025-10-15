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
import Results from './components/Results';
import TournamentResult from './components/TournamentResult';
import Shop from './pages/Shop';
import { useEffect } from 'react';
import { Routes, Route, } from 'react-router-dom';

function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, []);

  const MainContent = () => (
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

  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/results" element={<Results />} />
      <Route path="/results/:tournamentId" element={<TournamentResult />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;