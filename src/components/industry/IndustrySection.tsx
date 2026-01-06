
import React, { useState, useEffect, useRef } from 'react';
import { 
  Activity, 
  ClipboardCheck, 
  Leaf, 
  Layers, 
  PlusSquare
} from 'lucide-react';

import herotop from '../../assets/IndustriesHeroElement.png';
const IndustrySection: React.FC = () => {
  const ArrowIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="#02A5E6" 
      className="w-8 h-8"
    >
      <path d="M13 3L16.29 6.29L9.41 13.17L10.83 14.59L17.71 7.71L21 11V3H13Z" />
      <path opacity="0.4" d="M12 21H3V12" fill="none" stroke="#02A5E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
    const PuzzleIcon = () => (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#02A5E6" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-6 h-6"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.892m-1.216 6.892a3.96 3.96 0 0 1-3.074-1.057 4 4 0 1 1-5.96-5.026 3.96 3.96 0 0 1 1.057-3.074 4 4 0 1 1 5.026-5.96 3.96 3.96 0 0 1 3.074 1.057 4 4 0 1 1 5.96 5.026 3.96 3.96 0 0 1-1.057 3.074 4 4 0 1 1-5.026 5.96Z" />
    </svg>
  );
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
                 Industry
                </div>
            </div>
        {/* Main Headline - Compact and strictly 3 lines */}
        <div className={`max-w-4xl mx-auto text-center mb-10 entrance-anim ${isVisible ? 'visible' : ''}`}>
          <h1 className="text-[20px] md:text-[34px] font-bold text-[#0056B3] leading-[1.3] md:leading-[1.25] tracking-tight">
            At the heart of every breakthrough in<br className="hidden md:block" />
            healthcare lies a network of <span className="text-[#02A5E6] cursor-default">innovators,</span><br className="hidden md:block" />
            <span className="text-[#02A5E6] cursor-default">researchers, & providers.</span>
          </h1>
        </div>

        {/* Interactive Feature Cards - Visible borders and deep shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          
          {/* Card 1 */}
   
        <div className="relative group cursor-default">
          {/* Circular Badge - Left Top */}
          <div className="absolute -top-6 -left-6 z-20 w-16 h-16 bg-white rounded-full border border-[#02A5E61a] shadow-[0_4px_20px_rgba(2,165,230,0.15)] flex items-center justify-center overflow-visible transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_8px_30px_rgba(2,165,230,0.3)]">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <PuzzleIcon />
             </div>
             {/* Subtle outer rings */}
             <div className="absolute inset-0 rounded-full border-4 border-[#02A5E608] pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-700"></div>
          </div>

          {/* Main Card Body */}
          <div className="h-full min-h-[160px] bg-white border border-[#02A5E633] rounded-2xl p-8 flex items-center shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_-12px_rgba(2,165,230,0.2)] group-hover:border-[#02A5E6] group-hover:-translate-y-2">
            <p className="text-[#333] text-md leading-relaxed font-medium transition-colors duration-300 group-hover:text-black">
              We partner with organizations across the Life Sciences ecosystem, from drug development to healthcare delivery.
            </p>
          </div>
        </div>


              
        <div className="relative group cursor-default">
          {/* Circular Badge - Right Top */}
          <div className="absolute -top-6 -right-6 z-20 w-16 h-16 bg-white rounded-full border border-[#02A5E61a] shadow-[0_4px_20px_rgba(2,165,230,0.15)] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_8px_30px_rgba(2,165,230,0.3)]">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <ArrowIcon />
             </div>
             {/* Subtle outer rings */}
             <div className="absolute inset-0 rounded-full border-4 border-[#02A5E608] pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-700"></div>
          </div>

          {/* Main Card Body */}
          <div className="h-full min-h-[160px] bg-white border border-[#02A5E633] rounded-2xl p-8 flex items-center shadow-sm transition-all duration-500 ease-out group-hover:shadow-[0_20px_50px_-12px_rgba(2,165,230,0.2)] group-hover:border-[#02A5E6] group-hover:-translate-y-2">
            <p className="text-[#333] text-md leading-relaxed font-medium transition-colors duration-300 group-hover:text-black">
              Helping them translate ideas into impactful solutions that improve patient outcomes.
            </p>
          </div>
        </div>


        </div>
      </div>

      {/* Interactive Marquee Bar - Compact and refined */}
      <div className={`w-full bg-[#02A5E6] py-8 relative overflow-hidden entrance-anim delay-400 z-20 ${isVisible ? 'visible' : ''}`}>
        <div className="animate-marquee whitespace-nowrap">
          {displayItems.map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-[1.2rem] mx-3 transition-all hover:bg-white hover:shadow-xl hover:scale-105 cursor-pointer group/item"
            >
              <div className="text-white group-hover/item:text-[#02A5E6] transition-colors duration-300 transform group-hover/item:scale-110">
                {item.icon}
              </div>
              <span className="text-white group-hover/item:text-[#02A5E6] font-bold text-base md:text-lg tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* Soft Edge Gradients */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#02A5E6] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#02A5E6] to-transparent z-10 pointer-events-none" />
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

export  default IndustrySection;
