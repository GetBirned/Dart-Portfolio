import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = [];
    const numParticles = 80;
    const maxConnectionDist = 80;
    const mouse = { x: -9999, y: -9999 };

    const tealColor = '#14B8A6';
    const blueColor = '#2563EB';

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    setTimeout(() => {
      resizeCanvas();

      for (let i = 0; i < numParticles; i++) {
        const speed = 0.2 + Math.random() * 0.4;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2 + Math.random() * 2,
          color: Math.random() < 0.5 ? tealColor : blueColor,
        });
      }
    }, 50);

    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distMouse = Math.hypot(dx, dy);
        if (distMouse < 80) {
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * 0.02;
          p.vy -= Math.sin(angle) * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxConnectionDist * maxConnectionDist) {
            const alpha = 1 - distSq / (maxConnectionDist * maxConnectionDist);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById('about');
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const myMnemonic = 'DARR-tan-yen BUR-knee';

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-8 pb-32 bg-gray-50">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-3xl">
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold mb-8 leading-relaxed overflow-visible"
        >
          <span className="relative inline-block group">
            <span className="block transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              Dartagnan Birnie
            </span>
            <span className="absolute inset-0 flex items-center justify-center whitespace-nowrap transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              {myMnemonic}
            </span>
          </span>
          <span className="block mt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
            Software Engineer &amp; Web Designer
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
