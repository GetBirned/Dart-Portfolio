import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(1rem)';
      setTimeout(() => {
        el.style.transition = 'opacity 1s, transform 1s';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, (i + 1) * 300);
    });
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById('about');
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-8 pb-32">
      <div className="max-w-3xl">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold mb-8 leading-relaxed overflow-visible"
        >
          <span className="block">Dartagnan Birnie</span>
          <span className="block mt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
            Software Engineer & Web Designer
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-600 mb-6"
        >
          Balancing design and development.
        </p>

        <div ref={ctaRef}>
          <button
            onClick={scrollToAbout}
            className="
              relative mt-2 mx-auto block
              bg-white p-3 rounded-full shadow-md
              text-teal-600 hover:text-teal-700
              transition-all duration-300
              hover:[box-shadow:0_0_8px_rgba(20,184,166,0.5),0_0_16px_rgba(37,99,235,0.5)]
            "
            aria-label="Scroll to About section"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
