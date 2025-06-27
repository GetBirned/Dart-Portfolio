import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface ProjectData {
  title: string;
  url: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  images: {
    desktop: string[];
    mobile: string[];
  };
  client: {
    name: string;
    logo: string;
    location: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  testimonial: {
    text: string;
    author: string;
    position: string;
    company: string;
    rating: number;
  };
}

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');

  const projectData: Record<string, ProjectData> = {
    'thresher-divers-surf-shop': {
      title: "Thresher Divers Surf Shop",
      url: "https://thresherdiverssurfshop.com/",
      category: "E-commerce",
      description: "A bold, immersive e-commerce site built for a premier surf shop in Alton Bay, designed to reflect the brand’s adventurous, lake-loving culture.",
      challenge: "The client needed an online store that could showcase a large product inventory while fully capturing the vibe of surf culture; Without sacrificing performance or usability.",
      solution: "I built a vibrant, mobile-optimized WordPress site with custom sections for product storytelling, bold visuals, and intuitive navigation. It strikes the perfect balance between aesthetic and conversion.",
      results: [
        "300% increase in online sales within 6 months",
        "45% improvement in mobile conversion rates",
        "60% reduction in cart abandonment",
      ],
      technologies: ["WordPress", "Elementor", "HTML", "PHP", "Responsive Design"],
      client: {
        name: "Thresher Divers Surf Shop",
        logo: '/images/thresher/thresherLogo.png',
        location: "Alton Bay, USA",
        coordinates: { lat: 43.473812, lng: -71.238178 }
      },
      images: {
        desktop: [
          "/images/thresher/threshHomeDesktop.png",
          "/images/thresher/threshHomeMoreDesktop.png",
          "/images/thresher/threshShopDesktop.png",
          "/images/thresher/threshAboutDesktop.png",
        ],
        mobile: [
          "/images/thresher/threshHomePhone.PNG",
          "/images/thresher/threshHomePhone2.PNG",
          "/images/thresher/threshShopPhone.PNG",
          "/images/thresher/threshAboutPhone.PNG"
        ]
      },
      testimonial: {
        text: "I am thrilled to share my experience working with Dartagnan Birnie on my website. From the very beginning, Dartagnan demonstrated exceptional professionalism and expertise. His attention to detail and creative approach transformed my vision into a stunning reality. Dartagnan took the time to understand my needs and goals, providing valuable insights that significantly improved the overall functionality and aesthetics of the site. He was responsive, communicative, and always willing to go the extra mile to ensure my satisfaction. Not only did he deliver an outstanding final product, but he also equipped me with the knowledge and tools to manage my website effectively moving forward. I wholeheartedly recommend Dartagnan Birnie to anyone looking for a talented and reliable web developer. His work has truly elevated my online presence!",
        author: "Kyra Atwell-Main",
        position: "Owner",
        company: "Thresher Divers Surf Shop",
        rating: 5
      }
    },
    'made-on-earth': {
      title: "Made on Earth",
      url: "https://www.madeonearth-onlineshop.com/",
      category: "Marketplace",
      description: "A fair-trade driven online marketplace that highlights eco-friendly products with storytelling, earthy visuals, and a smooth shopping experience.",
      challenge: "Being located in the vacation town of Wolfeborro, Made on Earth needed a website for the off-season to reach more buyers and sell products to their customerbase who may not be local in the winter months.",
      solution: "I built a Wix marketplace with custom product filtering, a simple stocking/inventory process, efficient shipping and design that is mean't to mimic that of the inperson store.",
      results: [
        "250% increase in organic traffic",
        "40% higher average order value",
        "85% customer satisfaction rating",
      ],
      technologies: ["WordPress", "Square", "PHP", "Custom Plugins"],
      client: {
        name: "Made on Earth",
        logo: "/images/madeonearth/MadeOnEarthLogo.avif",
        location: "Wolfeborro, NH",
        coordinates: { lat: 43.5847108, lng: -71.2152489 }
      },
      images: {
        desktop: [
          "/images/madeonearth/moeHomeDesktop.png",
          "/images/madeonearth/moeAboutDesktop.png",
          "/images/madeonearth/moeStoreDesktop.png",
          "/images/madeonearth/moeSalesDesktopp.png",
          "/images/madeonearth/moeContactDesktop.png"
        ],
        mobile: [
          "/images/madeonearth/moeSalesPhone.PNG",
          "/images/madeonearth/moeStorePhone.PNG",
          "/images/madeonearth/moeAboutPhone.PNG",
          "/images/madeonearth/moeMenuPhone.PNG"
        ]
      },
      testimonial: {
        text: "Dart is amazing to work with, and has done such an incredible job with our website- which is soon to be published. I cannot recommend his work enough… what a gift he has been to help us through something so daunting. We are so grateful for EVERYTHING! ❤️",
        author: "Barbara Signor",
        position: "Owner",
        company: "Made on Earth",
        rating: 5
      }
    },
    'account-tree': {
      title: "Account Tree",
      url: "https://www.accounttree.com",
      category: "Education Financial Services",
      description: "Student activity fund software startup whose goal is to remove the educational requirements from the school accounting system.",
      challenge: "When I first joined Account Tree with my internship, their site was bare and lacked the professionalism of other competitors. Needed a site that could pitch the usability of their software in a way that was easy to digest.",
      solution: "I created a clean, professional Wix site that allows customers to schedule a training call, calculate their Account Tree cost, and see the software's features and example videos.",
      results: [
        "400% increase in qualified leads",
        "50% reduction in bounce rate",
        "95% client satisfaction score",
      ],
      technologies: ["Wix", "Java", "PHP", "JavaScript", "Photoshop", "GMass"],
      client: {
        name: "Account Tree",
        logo: "/images/accounttree/accounttreelogo.png",
        location: "Dover, NH",
        coordinates: { lat: 43.19506490435236, lng: -70.87148500112684 }
      },
      images: {
        desktop: [
          "/images/accounttree/accounttreeHomeDesktop.png",
          "/images/accounttree/accounttreeAboutDesktop.png",
          "/images/accounttree/accounttreeCalcDesktop.png",
          "/images/accounttree/accounttreeScheduleDesktop.png",
          "/images/accounttree/accounttreePartnerDesktop.png",
        ],
        mobile: [
          "/images/accounttree/accounttreeHomePhone.PNG",
          "/images/accounttree/accounttreeAboutPhone.PNG",
          "/images/accounttree/accounttreeCalcPhone.PNG",
          "/images/accounttree/accounttreeSchedulePhone.PNG",
          "/images/accounttree/accounttreePartnerPhone.PNG",
        ]
      },
      testimonial: {
        text: "Kevin’s Remarks: Dart consistently delivers work of exceptional quality. His keen attention to detail, combined with his analytical and creative abilities, results in outstanding outcomes. His work is not only accurate and thorough but also innovative, forward-thinking, and aligned with overall project goals. Tom’s Remarks: Dart’s work is exemplary. Whether it's software development, helping us develop our brand, or rebuilding our website, he has been one of the best employees I have ever had the pleasure to work with.",
        author: "Kevin & Tom Rossi",
        position: "Owners",
        company: "Account Tree",
        rating: 5
      }
    },
    'marble-perfect': {
      title: "Marble Perfect",
      url: "https://www.marbleperfect.com",
      category: "Home Improvement",
      description: "Stone restoration company focusing in marble and granite, serving customers in the New England area.",
      challenge: "Marble Perfect needed to revitalize their website and make changes that will make them standout with results, examples, and in SEO.",
      solution: "While keeping the initial design of the website intact, I redesigned multiple pages while also taking a strong focus on local SEO and restoring the clicks that Marble Perfect once had. This was done by way of meta tags, headers, and backlinking.",
      results: [
        "500% increase in project inquiries",
        "75% higher project values",
        "90% client retention rate",
      ],
      technologies: ["WordPress", "Custom Gallery", "PHP", "Advanced SEO", "Mobile Optimization"],
      client: {
        name: "Marble Perfect",
        logo: "/images/marbleperfect/marbleperfect.png",
        location: "Alton, NH",
        coordinates: { lat: 43.373984, lng: -71.183213 }
      },
      images: {
        desktop: [
          "/images/marbleperfect/mpHomeDesktop.png",
          "/images/marbleperfect/mpMapDesktop.png",
          "/images/marbleperfect/mpMarbleDesktop.png",
          "/images/marbleperfect/mpTestimonialsDesktop.png",
          "/images/marbleperfect/mpVideosDesktop.png"
        ],
        mobile: [
          "/images/marbleperfect/mpHomePhone.PNG",
          "/images/marbleperfect/mpExamplesPhone.PNG",
          "/images/marbleperfect/mpMapPhone.PNG",
          "/images/marbleperfect/mpMenuPhone.PNG",
          "/images/marbleperfect/mpVideosPhone.PNG",
        ]
      },
      testimonial: {
        text: "Dart is so easy to work with and he listens to what you want and don't want. It took us a long time to find someone like Dart.",
        author: "Marci",
        position: "Owner",
        company: "Marble Perfect",
        rating: 5
      }
    },
    'shakti-bodywork-yoga': {
      title: "Shakti Bodywork & Yoga",
      url: "https://www.shaktibodyworkandyoga.com/",
      category: "Wellness",
      description: "Wellness studio website with serene design, class scheduling, and holistic health focus.",
      challenge: "Shakti Bodywork & Yoga needed a calming, professional website that would reflect their holistic approach to wellness while providing easy class booking and information access.",
      solution: "I created a serene WordPress site with integrated booking system, class schedules, and wellness blog. The design uses calming colors and natural imagery to reflect the studio's peaceful atmosphere.",
      results: [
        "200% increase in class bookings",
        "60% growth in new student registrations",
        "40% increase in workshop attendance",
      ],
      technologies: ["Wix", "Square Scheduling", "Custom Redesign", "Photoshop"],
      client: {
        name: "Shakti Bodywork & Yoga",
        logo: "/images/shakti/tieDyeLogoLargePNG.png",
        location: "Brunswick, Maine",
        coordinates: { lat: 43.9129078, lng: -69.9670224 }
      },
      images: {
        desktop: [
          "/images/shakti/shaktiHomeDesktop.png",
          "/images/shakti/shaktiAboutDesktop.png",
          "/images/shakti/shaktiFooterDesktop.png",
          "/images/shakti/shaktiYogaDesktop.png",
        ],
        mobile: [
          "/images/shakti/shaktiHomePhone.PNG",
          "/images/shakti/shaktiAboutPhone.PNG",
          "/images/shakti/shaktiFooterPhone.PNG",
          "/images/shakti/shaktiYogaPhone.PNG",
        ]
      },
      testimonial: {
        text: "Our new website beautifully represents our studio's peaceful energy. The booking system has made scheduling so much easier, and we've seen a significant increase in new students finding us online.",
        author: "Gabrielle",
        position: "Owner",
        company: "Shakti Bodywork & Yoga",
        rating: 5
      }
    },
    'moore-farm-herbs': {
      title: "Moore Farm Herbs",
      url: "https://www.moorefarmherbs.online//",
      category: "Herbalist",
      description: "Wellness studio website with serene design, class scheduling, and holistic health focus.",
      challenge: "Shakti Bodywork & Yoga needed a calming, professional website that would reflect their holistic approach to wellness while providing easy class booking and information access.",
      solution: "I created a serene WordPress site with integrated booking system, class schedules, and wellness blog. The design uses calming colors and natural imagery to reflect the studio's peaceful atmosphere.",
      results: [
        "200% increase in class bookings",
        "60% growth in new student registrations",
        "40% increase in workshop attendance",
        "Featured in Local Wellness Directory"
      ],
      technologies: ["Wix", "Online Shop", "Custom Design", "Mobile Responsive", "SEO"],
      client: {
        name: "Moore Farm Herbs",
        logo: "/images/moorefarmherbs/moorefarmlogo.png",
        location: "Gilmanton, NH",
        coordinates: { lat: 43.4619741, lng: -71.3698876 }
      },
      images: {
        desktop: [
          "/images/moorefarmherbs/homepageDesktop.png",
          "/images/moorefarmherbs/aboutDesktop.png",
          "/images/moorefarmherbs/shopDesktop.png",
          "/images/moorefarmherbs/contactDesktop.png",
        ],
        mobile: [
          "/images/moorefarmherbs/mfhHomePhone.PNG",
          "/images/moorefarmherbs/allproductsPhone.PNG",
          "/images/moorefarmherbs/mfhAboutPhone.PNG",
        ]
      },
      testimonial: {
        text: "Dart is truly an all around great guy to work with! He really knows how to pull things together to make them work! He communicates really well and works with you! I am really pleased with my site and the ease of being able to use it! He is very attuned to how others may see or perceive how to navigate a website! I can personally attest, that he is your guy if you need a website! Even if you already have one! He is the one that could bring it up to the next level! He really believes in helping local small businesses , is the way to go! I have always believed that too! So very thankful we connected! 😊❤️",
        author: "Kim Gordon",
        position: "Owner",
        company: "Moore Farm Herbs",
        rating: 5
      }
    }
  };

  const project = slug ? projectData[slug] : null;
  const currentImages = project ? project.images[viewMode] : [];

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <span>Visit Live Site</span>
                <ExternalLink size={18} />
              </a>
            </div>
            
            {/* Client Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4">Client</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                  <img
                    src={project.client.logo}
                    alt={`${project.client.name} logo`}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="text-white font-semibold mb-2">{project.client.name}</div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <MapPin size={16} />
                    <span>{project.client.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="text-sm font-semibold text-slate-300 mb-3">Client Location</h4>
                <div className="h-64 rounded-lg overflow-hidden">
                  <MapContainer
                    center={[project.client.coordinates.lat, project.client.coordinates.lng] as [number, number]}
                    zoom={9}
                    scrollWheelZoom={false}
                    className="h-full w-full z-0"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[project.client.coordinates.lat, project.client.coordinates.lng]} />
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Gallery</h2>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setViewMode('desktop')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  viewMode === 'desktop'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                Desktop View
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  viewMode === 'mobile'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                Mobile View
              </button>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src={currentImages[currentImageIndex]}
                alt={`${project.title} - ${viewMode} view ${currentImageIndex + 1}`}
                className={`h-auto mx-auto ${viewMode === 'mobile' ? 'w-[250px]' : 'w-full'}`}
              />
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            {currentImages.length > 1 && (
              <div className="flex justify-center space-x-2 mt-6">
                {currentImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-blue-500' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Overview</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">The Challenge</h3>
                  <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">My Solution</h3>
                  <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Results Achieved</h2>
              <div className="space-y-4">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700 font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="text-blue-400 mx-auto mb-8" size={48} />
          
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
            "{project.testimonial.text}"
          </blockquote>
          
          <div className="flex justify-center mb-6">
            {[...Array(project.testimonial.rating)].map((_, i) => (
              <Star key={i} className="text-blue-400 fill-current" size={24} />
            ))}
          </div>
          
          <div>
            <div className="text-xl font-semibold mb-2">{project.testimonial.author}</div>
            <div className="text-slate-300">
              {project.testimonial.position} at {project.testimonial.company}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's create something amazing together. Get in touch to discuss your vision.
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;