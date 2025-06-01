import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects = () => {
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

  const projects: Project[] = [
    {
      id: 'dartbot',
      title: 'DartBot',
      description:
        'Consider DartBot my secretary. He is a humorous, personality-rich chatbot built with React, Node.js, and Dialogflow; I made this to closely mimic me and my tone. Gain some insight to my personality and learn a bit more about me and my hobbies.',
      image:
        '/images/DartBot.png',
      tags: ['React', 'Node.js', 'Dialogflow', 'TypeScript'],
      link: 'https://dartbot.onrender.com/'
    },
    {
      id: 'dieordie',
      title: 'Die Or Die',
      description:
        'Die Or Die is a rogue-like deck-builder made using Godot featuring physics-based dice mechanics and poker-hand inspired multipliers and dice abilities. Build up a dice bag, roll wisely to build the highest possible combo, and defeat the likes of King Chess.',
      image:
        '/images/DieOrDieBackgroundPixel.png',
      tags: ['Godot', 'GDScript', 'Shader', 'UI/UX'],
      link: 'https://github.com/GetBirned/Die-Or-Die'
    },
    {
      id: 'fortlotto',
      title: 'FortLotto',
      description:
        'FortLotto is a strat-roulette companion web app for Fortnite squads, generating randomized drop locations, unique challenges, and session-long win/loss tracking.',
      image:
        '/images/FortLotto.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
      link: 'https://getbirned.github.io/FortLotto/index.html'
    },
    {
      id: 'funh',
      title: 'FUN-H',
      description:
        'FUN-H (Food UNH) is a full-stack dining hall companion for UNH students, enabling menu browsing and USDA-compliant “Wildcat Plate” creation.',
      image:
        '/images/FUNH.png',
      tags: ['Flask', 'Python', 'Jinja2', 'SQLite', 'jQuery'],
      link: 'https://github.com/GetBirned/FUN-H'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div 
        ref={contentRef}
        className="max-w-6xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-underline pb-2">
            What I've been up to.
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a 
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:[box-shadow:0_0_8px_rgba(20,184,166,0.5),0_0_16px_rgba(37,99,235,0.5)]"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 text-sm font-medium text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/GetBirned" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
