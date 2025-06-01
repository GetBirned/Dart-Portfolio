import { useEffect, useRef, useState } from 'react';

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    {
      src: '/images/arizonadart.jpg',
      alt: 'Dartagnan at Papago Park, Phoenix',
      caption: 'I love hiking. This is me in Papago Park, AZ in 2024.'
    },
    {
      src: '/images/mariodart.JPG',
      alt: 'Dartagnan in Mario cosplay',
      caption: 'Mario Kart Wii is one of my favorite games ever.'
    },
    {
      src: '/images/wildcats.jpg',
      alt: 'Dartagnan at UNH Hockey',
      caption: 'Everyday is a great day to be a Wildcat!'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (contentRef.current) observer.observe(contentRef.current);
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const prevPhoto = () =>
    setPhotoIndex(i => (i === 0 ? photos.length - 1 : i - 1));
  const nextPhoto = () =>
    setPhotoIndex(i => (i === photos.length - 1 ? 0 : i + 1));

  const skills = [
    'Csvg.svg',
    'javasvg.svg',
    'JSsvg.png',
    'tssvg.png',
    'Git_icon.svg.png',
    'GIMPsvg.png',
    'Godotsvg.png',
    'wixsvg.svg'
  ];
  const looped = [...skills, ...skills];

  return (
    <div className="container mx-auto px-4">
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="gradient-underline">Nice to meet you.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I’m <b>Dartagnan</b>, but feel free to call me <b>Dart</b>. I
              recently graduated from the University of New Hampshire with a
              Bachelors in Computer Science.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              While early into my career, I have already gained experience through both
              an internship and freelance website design and management for local
              businesses in my hometown of <b>Alton, NH</b>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In my freetime, I <b><i>try</i></b> to be good at golf and am a big
              Boston sports fan. Beyond that, I enjoy creating and playing video
              games, overly critiquing movies, and cooking dishes that'll make
              your mouth water.
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            <button
              onClick={prevPhoto}
              aria-label="Previous photo"
              className="
                absolute left-0 -translate-x-1/2
                bg-white p-3 rounded-full shadow-md
                text-teal-600 hover:text-teal-700
                transition-all duration-300
                hover:[box-shadow:0_0_8px_rgba(20,184,166,0.5),0_0_16px_rgba(37,99,235,0.5)]
              "
            >
              ‹
            </button>

            <div className="group relative transition-all duration-300 hover:[box-shadow:0_0_8px_rgba(20,184,166,0.5),0_0_16px_rgba(37,99,235,0.5)]">
              <img
                src={photos[photoIndex].src}
                alt={photos[photoIndex].alt}
                className="w-72 rounded-lg shadow-lg object-cover"
              />
              <div
                className="
                  pointer-events-none
                  absolute -top-8 left-1/2 transform -translate-x-1/2
                  rounded-md bg-gray-800 text-white text-sm px-3 py-1
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                "
              >
                {photos[photoIndex].caption}
              </div>
            </div>

            <button
              onClick={nextPhoto}
              aria-label="Next photo"
              className="
                absolute right-0 translate-x-1/2
                bg-white p-3 rounded-full shadow-md
                text-teal-600 hover:text-teal-700
                transition-all duration-300
                hover:[box-shadow:0_0_8px_rgba(20,184,166,0.5),0_0_16px_rgba(37,99,235,0.5)]
              "
            >
              ›
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden mt-12">
          <div className="flex items-center whitespace-nowrap animate-scroll">
            {looped.map((fn, i) => (
              <div
                key={i}
                className="
                  skill-card
                  inline-flex items-center justify-center
                  w-24 h-24 mx-4 bg-gray-100 rounded-lg flex-shrink-0
                "
              >
                <img
                  src={`/images/${fn}`}
                  alt={fn.replace(/\.(svg|png)$/, '')}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;