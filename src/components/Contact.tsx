import { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin, Github, Instagram, ChevronUp } from 'lucide-react';

const Contact = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
    
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:dartbirnie@gmail.com?subject=Job Opportunity';
  };

  return (
    <div className="container mx-auto px-4">
      <div
        ref={contentRef}
        className="max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-underline">Let's Chat.</span>
        </h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">I'd love to talk more!</h3>
              <p className="text-gray-600 leading-relaxed">
                I don't take any opportunity to showcase my skills and become part of a team for granted. Feel free to reach out, and I’ll respond as soon as possible. Looking forward to connecting!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a
                href="mailto:dartbirnie@gmail.com?subject=Job Opportunity"
                className="group inline-block p-0.5 rounded-md bg-gradient-to-r from-teal-500 to-blue-600"
              >
                <span className="flex items-center justify-center py-3 px-6 bg-white rounded-md text-teal-600 transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-600 group-hover:text-white">
                  <Mail size={20} className="mr-2" />
                  Send Email
                </span>
              </a>
              <a 
                href="tel:+16038331781" 
                className="flex items-center justify-center py-3 px-6 rounded-md border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                <Phone size={20} className="mr-2" />
                Call Me
              </a>
            </div>
            
            <div className="border-t border-gray-200 pt-8">
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/dartagnan-birnie/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="https://github.com/GetBirned" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.instagram.com/dart.b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <button
                  onClick={handleEmailClick}
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={28} />
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="
                relative
                bg-white p-3 rounded-full shadow-md
                text-teal-600 hover:text-teal-700
                transition-all duration-300
                hover:[box-shadow:0_0_8px_rgba(20,184,166,0.5),0_0_16px_rgba(37,99,235,0.5)]
                "
                aria-label="Back to top"
                >
              <ChevronUp size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;