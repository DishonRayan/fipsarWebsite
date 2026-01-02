
import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  ClipboardCheck, 
  Leaf, 
  Layers, 
  PlusSquare
} from 'lucide-react';
import leftbd from '../../assets/BackgroundPattern&Mask.png'

import herotop from '../../assets/IndustriesHeroElement.png';
const SolHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse move handler for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Calculate normalized offset (-0.5 to 0.5)
    setMousePos({
      x: (clientX / innerWidth) - 0.5,
      y: (clientY / innerHeight) - 0.5,
    });
  };

  const items = [
    { id: 1, label: 'Medical Affairs', icon: <Activity className="w-5 h-5" /> },
    { id: 2, label: 'Regulatory', icon: <ClipboardCheck className="w-5 h-5" /> },
    { id: 3, label: 'Bio Pharma', icon: <Leaf className="w-5 h-5" /> },
    { id: 4, label: 'CRO\'S', icon: <Layers className="w-5 h-5" /> },
    { id: 5, label: 'Healthcare Providers', icon: <PlusSquare className="w-5 h-5" /> },
  ];

  const displayItems = [...items, ...items, ...items];

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className=" relative w-full overflow-hidden bg-white transition-colors duration-700 pt-0 mt-8"
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee 45s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .entrance-anim {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .entrance-anim.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .delay-100 { transition-delay: 100ms; }
          .delay-200 { transition-delay: 200ms; }
          .delay-300 { transition-delay: 300ms; }
          .delay-400 { transition-delay: 400ms; }

          .bg-mesh {
            background-image: 
              radial-gradient(at 0% 0%, hsla(197, 98%, 45%, 0.05) 0px, transparent 50%),
              radial-gradient(at 100% 0%, hsla(197, 98%, 45%, 0.05) 0px, transparent 50%),
              radial-gradient(at 50% 100%, hsla(197, 98%, 45%, 0.03) 0px, transparent 50%);
          }
        `}
      </style>

      {/* Enhanced Backdrop: Mesh Gradients */}
      <div className="absolute inset-0 bg-mesh pointer-events-none z-0" />
      
      {/* Enhanced Backdrop: Floating Blurred Blobs (Atmospheric Glow) */}
      <div 
        className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#02A5E6]/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      />
      <div 
        className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#02A5E6]/5 rounded-full blur-[100px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)` }}
      />

      {/* Decorative Top Image Curve */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <img 
          src={herotop} 
          alt="Top Decorative Curve" 
          className="w-full h-24 md:h-32 object-cover opacity-90"
          style={{ 
            // maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            // WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Parallax Decorative Dot Pattern - Left */}
      <div 
        className="absolute left-[-40px] top-[35%] opacity-15 pointer-events-none transition-transform duration-700 ease-out z-10"
        style={{
          width: '200px',
          height: '200px',
          backgroundImage: 'radial-gradient(#02A5E6 3px, transparent 2px)',
          // backgroundImage: `url(${leftbd})`,
          backgroundSize: '24px 24px',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
        }}
      />

      {/* Parallax Decorative Dot Pattern - Right */}
      <div 
        className="absolute right-[-60px] top-[45%] opacity-15 pointer-events-none transition-transform duration-700 ease-out z-10"
        style={{
          width: '280px',
          height: '280px',
          backgroundImage: 'radial-gradient(#02A5E6 3px, transparent 2px)',
          backgroundSize: '24px 24px',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-20 pt-28 md:pt-44">

         <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#02A5E6]/5 border border-[#02A5E6]/20 text-[#02A5E6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02A5E6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#02A5E6]"></span>
                </span>
                  Our Solutions
                </div>
            </div>
        {/* Main Headline - Compact and strictly 3 lines */}
        <div className={`max-w-4xl mx-auto text-center mb-10 entrance-anim ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-[20px] md:text-[34px] font-bold text-[#02A5E6] leading-[1.3] md:leading-[1.25] tracking-tight">
            Intelligent platforms  <span className="text-[#0056B3] cursor-default">& </span> AI solutions  <span className="text-[#0056B3] cursor-default">built for</span>  <br className="hidden md:block" />
             <span className="text-[#0056B3] cursor-default"> the Life Sciences ecosystem.</span>
          </h1>
        </div>

        {/* Interactive Feature Cards - Visible borders and deep shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Card 1 */}
          <div className={`group relative bg-white/90 backdrop-blur-sm p-7 rounded-[1.5rem] shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-slate-200 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(2,165,230,0.15)] hover:border-[#02A5E6]/30 hover:-translate-y-1.5 overflow-hidden entrance-anim delay-200 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#02A5E6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-0 bg-[#02A5E6] group-hover:h-2/3 transition-all duration-500 rounded-r-full" />
            
            {/* <h3 className="text-[#0056B3] font-bold text-lg mb-2 group-hover:text-[#02A5E6] transition-colors duration-300 relative z-10">
              Life Sciences Ecosystem
            </h3> */}
            <p className="text-slate-500 text-sm md:text-base leading-relaxed relative z-10">
               Our solutions improve speed, accuracy, and decision-making across the entire drug development and healthcare lifecycle.

              {/* We partner with organizations across the entire spectrum, from pioneering drug development to real-world healthcare delivery. */}
            </p>
          </div>

          {/* Card 2 */}
          <div className={`group relative bg-white/90 backdrop-blur-sm p-7 rounded-[1.5rem] shadow-[0_12px_35px_rgba(0,0,0,0.06)] border border-slate-200 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(2,165,230,0.15)] hover:border-[#02A5E6]/30 hover:-translate-y-1.5 overflow-hidden entrance-anim delay-300 ${isVisible ? 'visible' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#02A5E6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-0 bg-[#02A5E6] group-hover:h-2/3 transition-all duration-500 rounded-r-full" />
            
            {/* <h3 className="text-[#0056B3] font-bold text-lg mb-2 group-hover:text-[#02A5E6] transition-colors duration-300 relative z-10">
              Impactful Solutions
            </h3> */}
            <p className="text-slate-500 text-sm md:text-base leading-relaxed relative z-10">
We help biopharma, clinical, regulatory, and medical teams solve real business challenges through data-driven platforms and AI-powered automation.
              {/* Helping global leaders translate complex ideas into tangible solutions that fundamentally improve patient health outcomes. */}
            </p>
          </div>

        </div>
      </div>

 

      {/* Dynamic Bottom Decoration */}
      <div 
        className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none z-10"
        style={{
          width: '70%',
          height: '100px',
          backgroundImage: 'radial-gradient(#02A5E6 2px, transparent 2px)',
          backgroundSize: '30px 30px',
        }}
      />
    </section>
  );
};

export  default SolHero;
