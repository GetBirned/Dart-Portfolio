import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DesignsByDartPage from './components/DesignsByDartPage';
import 'leaflet/dist/leaflet.css';
import './index.css';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mode, setMode] = useState<'portfolio' | 'designs'>('portfolio');

  // For analytics (optional)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const path = `/#${activeSection}`;
      window.gtag('config', 'G-K65VQ4F7WW', {
        page_path: path,
        page_title: activeSection.charAt(0).toUpperCase() + activeSection.slice(1),
      });
    }
  }, [activeSection]);

  if (mode === 'designs') {
    return <DesignsByDartPage setMode={setMode} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} setMode={setMode} />
      <main>
        <section id="home" className="pt-16">
          <Hero />
        </section>
        <section id="about" className="py-20 bg-white">
          <About />
        </section>
        <section id="experience" className="py-20 bg-gray-50">
          <Experience />
        </section>
        <section id="projects" className="py-20 bg-white">
          <Projects />
        </section>
        <section id="contact" className="py-20 bg-gray-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
