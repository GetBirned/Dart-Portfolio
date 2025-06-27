import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Clock, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, number: "6+", label: "Clients" },
    { icon: Target, number: "7+", label: "Projects Completed" },
    { icon: Clock, number: "4+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Client Satisfaction" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Digital Excellence.
              <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Always.
              </span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              There is so much more that goes into a website than it looking good. It needs to work hard, for you. Connecting you with an larger audience, converting leads, scheduling and selling your indentity. I blend design and strategy to meet your needs.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Every company is unique and has an image. It's my mission to help you discover that identity and show it off. Through a proven track record of real-world success and praised customer support, I'm confident we'd make a great team.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-200"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                    <div className="text-slate-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;