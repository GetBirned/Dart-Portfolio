import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const portfolioItems = [
    {
      title: "Thresher Divers Surf Shop",
      slug: "thresher-divers-surf-shop",
      url: "https://thresherdiverssurfshop.com/",
      description: "E-commerce platform for a premier surf shop with immersive product showcases and seamless shopping experience.",
      category: "E-commerce",
      tags: ["E-commerce", "Surf Culture", "Product Showcase", "WordPress"],
      logo: "/images/thresher/thresherLogo.png"
    },
    {
      title: "Made on Earth",
      slug: "made-on-earth",
      url: "https://www.madeonearth-onlineshop.com/",
      description: "Sustainable marketplace featuring eco-friendly products with beautiful product photography and storytelling.",
      category: "Marketplace",
      tags: ["E-commerce", "Marketplace", "Eco-friendly", "Wix"],
      logo: "/images/madeonearth/MadeOnEarthLogo.avif"
    },
    {
      title: "Account Tree",
      slug: "account-tree",
      url: "https://www.accounttree.com",
      description: "Professional financial services platform with clean design and user-friendly interface for accounting solutions.",
      category: "Financial Services",
      tags: ["Finance", "Professional", "SaaS", "Wix"],
      logo: "/images/accounttree/accounttreelogo.png"
    },
    {
      title: "Marble Perfect",
      slug: "marble-perfect",
      url: "https://www.marbleperfect.com",
      description: "Luxury home improvement showcase featuring stunning marble installations and portfolio galleries.",
      category: "Home Improvement",
      tags: ["Luxury", "Refurbishing", "Home Design", "WordPress"],
      logo: "/images/marbleperfect/MPlogoShort.png"
    },
    {
      title: "Shakti Bodywork & Yoga",
      slug: "shakti-bodywork-yoga",
      url: "https://www.shaktibodyworkandyoga.com/",
      description: "Wellness studio website with serene design, class scheduling, and holistic health focus.",
      category: "Wellness",
      tags: ["Wellness", "Yoga", "Health", "Wix"],
      logo: "/images/shakti/tieDyeLogoLargePNG.png"
    },
    {
      title: "Moore Farm Herbs",
      slug: "moore-farm-herbs",
      url: "https://www.moorefarmherbs.online/",
      description: "Wellness studio website with serene design, class scheduling, and holistic health focus.",
      category: "Herbalist",
      tags: ["Bath & Body", "Tea", "Wellness", "Wix"],
      logo: "/images/moorefarmherbs/MooreFarmFavicon.png"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Check out my
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Past Work
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            You shouldn’t have to gamble with your business. Here’s a look at the projects I’ve brought to life. Real results, glowing testimonials, and designs built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`group relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-2xl transform transition-all duration-500 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category Badge */}
              <div className="absolute top-6 right-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={item.logo}
                    alt={`${item.title} logo`}
                    className="h-8 w-8 rounded-md object-contain"
                  />
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    <span>Visit Site</span>
                    <ExternalLink size={16} />
                  </a>
                  
                  <button
                    onClick={() => navigate(`/project/${item.slug}`)}
                    className="inline-flex items-center space-x-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors duration-200"
                  >
                    <Eye size={16} />
                    <span>Case Study</span>
                  </button>
                </div>
                
                <div className="flex items-center space-x-2 text-slate-400 group-hover:text-blue-500 transition-colors duration-200">
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={16} />
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;