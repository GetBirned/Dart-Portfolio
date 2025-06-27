import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 mb-4 focus:outline-none"
            >
              <img
                src="/images/DBDwhite.png"
                alt="Designs by Dart Logo"
                className="h-12 w-auto"
              />
            </button>
            <p className="text-slate-300 leading-relaxed max-w-md">
              I'm passionate about bringing small businesses to their full potential through
              intentional design and an effective online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Projects', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>SEO Services</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-slate-300 mb-4 md:mb-0">
            <span>© {currentYear} Designs by Dart. </span>
          </div>
          <div className="text-slate-300 text-sm">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
