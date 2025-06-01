import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          DB
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-teal-600' 
                  : 'text-gray-600 hover:text-teal-600'
              }`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Birnie_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center text-sm font-medium
              px-4 py-2 rounded-md
              bg-gradient-to-r from-teal-500 to-blue-600
              text-white
              hover:from-teal-600 hover:to-blue-700
              transition-colors duration-300
            "
          >
            <FileText size={16} className="mr-2" />
            Resume
          </a>
        </nav>
  
        <button 
          className="md:hidden text-gray-600 hover:text-teal-600 transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gray-100 text-teal-600' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-teal-600'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Birnie_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center text-sm font-medium
                px-4 py-2 rounded-md
                bg-gradient-to-r from-teal-500 to-blue-600
                text-white
                hover:from-teal-600 hover:to-blue-700
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

export default Navbar;
