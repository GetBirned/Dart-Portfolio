import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface Job {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: string;
}

const Experience = () => {
  const [activeJob, setActiveJob] = useState<string | null>(null);
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

  const jobs: Job[] = [
    {
      id: 'accounttree',
      title: 'Software Development Intern',
      company: 'Account Tree - Dover, NH',
      period: 'Summer Internship',
      icon: 'images/accounttreelogo.png',
      description: [
        'Contributed to the development of a student activity funds accounting application using JavaScript and PHP.',
        'Collaborated with senior developers to implement new features and improve existing functionality.',
        'Wrote and revised Business Requirement Documents, outlining and designing fetaures for the Dev team to implement.',
        'Conducted sales calls and marketing campaigns through GMass.',
        'Rebranded entirety of startup with new website, graphics and workflows.',
        'Gained hands-on experience with version control systems and SaaS cycles.'
      ]
    },
    {
      id: 'freelance',
      title: 'Web Developer',
      company: 'Self-employed - Alton, NH',
      period: 'Ongoing',
      icon: 'images/DartBirnie.png',
      description: [
        'Design, develop and publish responsive websites for local businesses and organizations.',
        'Implement custom solutions based on client requirements and budget constraints.',
        'Training clients, both in-person and remote for handling day-to-day workflows, management, restocking and shipping processes.',
        'Designs and implements sites in a way that is easily scalable and accessible to those less tech-savvy.',
        'Provides on-call technical support for clients.'
      ]
    },
    {
      id: 'pirail',
      title: 'Lead UI Developer',
      company: 'PiRail - Durham, NH',
      period: 'Senior Capstone',
      icon: 'images/PiRail_logo.png',
      description: [
        'Architected and built a React-based dashboard for rail maintenance scheduling.',
        'Integrated Leaflet.js for map visuals and real time POI creation.',
        'Implemented real-time sensor (LIDAR, IMU, GPS) visualizations into app.',
        'Collaborated in Agile sprints to hit MOV while performing code reviews.',
        'Conducted usability testing with sponsor and iterated UI/UX based on feedback.',
      ],
    },
    {
      id: 'icecream',
      title: 'Ice Cream Scooper - Shift Lead',
      company: 'Stillwells Ice Cream - Alton, NH',
      period: 'College Summer Job',
      icon: 'images/icecreamicon.png',
      description: [
        'Provided friendly customer service in a fast-paced environment.',
        'Handled cash transactions and maintained accurate inventory counts.',
        'Assisted with store opening and closing procedures.',
        'Trained new employees.',
        'Collaborated with team members to ensure efficient service during peak hours.'
      ]
    },
    {
      id: 'dunkin',
      title: 'Shift Leader',
      company: 'Dunkin Donuts - Alton, NH',
      period: 'First Job',
      icon: 'images/dunkinicon.png',
      description: [
        'Made the best, most consistent coffee in the entire store.',
        'Named a shift leader within 6 months of being hired.',
        'Entrustued with assisting in restocking, inventory and the handling of cash.',
        'Fan favorite of recurring customers, and named the "Go-to Guy" for handling customer service/relations.',
        'Trained new employees while acting as a reliable team leader and example employee.',
      ]
    },
  ];

  const toggleJob = (jobId: string) => {
    setActiveJob(activeJob === jobId ? null : jobId);
  };

  return (
    <div className="container mx-auto px-4">
      <div
        ref={contentRef}
        className="max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block gradient-underline pb-2">
            Where I&apos;ve Worked.
          </span>
        </h2>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {jobs.map(job => (
            <div key={job.id} className="border-b last:border-b-0 border-gray-200">
              <button
                onClick={() => toggleJob(job.id)}
                aria-controls={`job-content-${job.id}`}
                aria-expanded={activeJob === job.id}
                className={`
                  w-full text-left p-6 focus:outline-none
                  transition-colors duration-300
                  ${activeJob === job.id ? 'bg-gray-100' : 'hover:bg-gray-50'}
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={job.icon}
                      alt={`${job.company} logo`}
                      className="mr-4 h-12 w-12 object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-gray-600">
                        {job.company} | {job.period}
                      </p>
                    </div>
                  </div>
                  <div className="text-teal-600">
                    {activeJob === job.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </div>
              </button>
              <div
                id={`job-content-${job.id}`}
                className={`
                  overflow-hidden transition-all duration-300
                  ${activeJob === job.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 bg-gray-50">
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    {job.description.map((bullet, i) => (
                      <li key={i} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;