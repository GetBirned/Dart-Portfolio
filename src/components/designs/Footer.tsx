import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-white font-bold text-xl">Designs by Dart</span>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Creating exceptional digital experiences that drive results. 
              I'm passionate about bringing your vision to life through 
              innovative design and development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Portfolio', 'Services', 'About', 'Contact'].map((item) => (
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
            <span>© {currentYear} Designs by Dart. Made with</span>
            <Heart className="text-red-400 animate-pulse" size={16} />
            <span>for amazing clients</span>
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