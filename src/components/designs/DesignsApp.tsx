import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesignsHeader from './DesignsHeader';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ProjectPage from './ProjectPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <DesignsHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;