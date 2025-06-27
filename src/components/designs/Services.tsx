import React, { useEffect, useRef, useState } from 'react';
import { Palette, Code, TrendingUp, Search, Settings, Globe } from 'lucide-react';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Stunning, user-centered designs that capture your brand essence and engage your audience from the first click. Each website is unique and tailored to the client's image.",
      features: ["Custom Design", "Brand Integration", "User Experience", "Visual Hierarchy"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Fast, secure, and scalable websites built with the latest design techniques and best practices.",
      features: ["Responsive Code", "Performance Optimization", "Security", "Cross-Platform"]
    },
    {
      icon: Globe,
      title: "CMS Expertise",
      description: "From years of experience, I specialized skills in development and customization for WordPress, Wix, and Shopify platforms. I teach and walkthrough each client through their CMS of choice.",
      features: ["WordPress", "Wix", "Square", "Custom Themes"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive traffic, generate leads, and further your business' visibility.",
      features: ["SEO Strategy", "Content Marketing", "Social Media", "Analytics"]
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search rankings and online visibility with SEO strategies tended to your desires.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Local SEO"]
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Once a client, always a client. I promise to provide ongoing support and maintenance to keep your website secure, updated, and performing optimally.",
      features: ["Security Updates", "Content Updates", "Performance Monitoring", "Backup Services"]
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
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your business
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
             built better.
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            I offer design and development services that scale with your needs. Whether it's a single-page site or a full e-commerce experience, I’ve got the tools, education and experience to turn your image into reality.
          </p>
          
          {/* Platform Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div title="WordPress">
              <img src="/images/platforms/wordpress.png" alt="WordPress" className="h-10 w-auto" />
            </div>
            <div title="Wix">
              <img src="/images/platforms/wix.png" alt="Wix" className="h-10 w-auto" />
            </div>
            <div title="Square">
              <img src="/images/platforms/square.png" alt="Square" className="h-10 w-auto" />
            </div>
            <div title="Custom Sites">
              <img src="/images/platforms/custom.png" alt="Custom Sites" className="h-10 w-auto" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                data-index={index}
                className={`group bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-2xl transform transition-all duration-500 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;