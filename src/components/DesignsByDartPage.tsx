import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DesignsHeader from './designs/DesignsHeader';
import Hero from './designs/Hero';
import Portfolio from './designs/Portfolio';
import Services from './designs/Services';
import About from './designs/About';
import Contact from './designs/Contact';
import ProjectPage from './designs/ProjectPage';
import DesignsFooter from './designs/DesignsFooter';

const DesignsByDartPage = ({ setMode }: { setMode: (mode: 'portfolio' | 'designs') => void }) => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <DesignsHeader setMode={setMode} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Portfolio />
                <Services />
                <About />
                <Contact />
              </main>
            }
          />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
        <DesignsFooter />
      </div>
    </Router>
  );
};

export default DesignsByDartPage;
