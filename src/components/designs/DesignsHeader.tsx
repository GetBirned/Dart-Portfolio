import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  setMode: (mode: 'portfolio' | 'designs') => void;
}

const Header = ({ setMode }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'hero' } });
    } else {
      scrollToSection('hero');
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const location = useLocation(); // Add inside Header component

  const getTextClasses = () => {
    const isProjectPage = location.pathname.startsWith('/project');
    return isScrolled || isProjectPage ? 'text-slate-900' : 'text-white';
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('projects');
          }}
        >
          <button onClick={handleLogoClick}>
            <img
              src="/images/DBDgradient.png"
              alt="Designs by Dart Logo"
              className="h-10 w-auto transition-transform duration-200 ease-out hover:scale-105"
            />
          </button>
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`text-sm font-medium ${getTextClasses()} hover:text-blue-400 transition-colors duration-300`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setMode('portfolio')}
            className="text-sm font-semibold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Portfolio
          </button>
          <a
            href="/Birnie_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center text-sm font-medium
              px-4 py-2 rounded-md
              bg-gradient-to-r from-blue-400 to-purple-600
              text-white
              hover:from-blue-500 hover:to-purple-700
              transition-colors duration-300
            "
          >
            <FileText size={16} className="mr-2" />
            Resume
          </a>
        </nav>

        <button
          className={`md:hidden ${getTextClasses()}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-sm font-medium px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-teal-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMode('portfolio');
                setIsMobileMenuOpen(false);
              }}
              className="text-sm font-semibold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Switch to Portfolio
            </button>
            <a
              href="/Birnie_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center text-sm font-medium
                px-4 py-2 rounded-md
                bg-gradient-to-r from-blue-400 to-purple-600
                text-white
                hover:from-blue-600 hover:to-purple-700
                transition-colors duration-300
              "
            >
              <FileText size={16} className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
