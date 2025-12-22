
import React from 'react';

const THEME_COLOR = '#02A5E6';

const TechBackground: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#ffffff]">
    {/* Base Grid Layer */}
    <div 
      className="absolute inset-0 opacity-[0.06]" 
      style={{ 
        backgroundImage: `linear-gradient(to right, ${THEME_COLOR} 1px, transparent 1px), linear-gradient(to bottom, ${THEME_COLOR} 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} 
    />
    
    {/* Micro Grid Layer */}
    <div 
      className="absolute inset-0 opacity-[0.04]" 
      style={{ 
        backgroundImage: `linear-gradient(to right, ${THEME_COLOR} 1px, transparent 1px), linear-gradient(to bottom, ${THEME_COLOR} 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} 
    />

    {/* Enhanced Dynamic SVG Layer */}
    <svg 
      className="absolute inset-0 w-full h-full opacity-[0.22]" 
      viewBox="0 0 1000 1000" 
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow-bright">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={THEME_COLOR} stopOpacity="0.8" />
          <stop offset="100%" stopColor={THEME_COLOR} stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* DNA Helix Representation - Far Left */}
      <g className="animate-float-slow" style={{ transformOrigin: '10% 50%' }}>
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={`dna-${i}`}>
            <circle cx="50" cy={200 + i * 60} r="4" fill={THEME_COLOR} className="animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
            <circle cx="120" cy={200 + i * 60} r="3" fill={THEME_COLOR} opacity="0.6" />
            <line x1="50" y1={200 + i * 60} x2="120" y2={200 + i * 60} stroke={THEME_COLOR} strokeWidth="0.5" strokeDasharray="2 2" />
          </React.Fragment>
        ))}
      </g>

      {/* Circuit Branching - Upper Right */}
      <g className="animate-float-reverse opacity-80" style={{ transformOrigin: '85% 15%' }}>
        <path 
          d="M850,50 L850,150 L950,150 M850,100 L750,100 L750,200" 
          fill="none" 
          stroke={THEME_COLOR} 
          strokeWidth="1.5"
          filter="url(#glow-bright)"
        />
        <rect x="945" y="145" width="10" height="10" fill="none" stroke={THEME_COLOR} strokeWidth="1" />
        <circle cx="750" cy="200" r="5" fill="none" stroke={THEME_COLOR} strokeWidth="1" />
      </g>

      {/* Central Rotating HUD Element (Subtle) */}
      <g className="animate-spin-very-slow" style={{ transformOrigin: '50% 50%' }}>
        <circle cx="500" cy="500" r="380" stroke={THEME_COLOR} strokeWidth="0.5" fill="none" strokeDasharray="10 100" opacity="0.3" />
        <circle cx="500" cy="500" r="390" stroke={THEME_COLOR} strokeWidth="1" fill="none" strokeDasharray="1 30" opacity="0.2" />
      </g>

      {/* Floating Hexagonal Clusters - Scattered */}
      <g className="animate-float-slow" style={{ transformOrigin: '30% 20%' }}>
        <path d="M300,150 L330,135 L360,150 L360,185 L330,200 L300,185 Z" fill="none" stroke={THEME_COLOR} strokeWidth="1" />
        <circle cx="330" cy="135" r="2" fill={THEME_COLOR} />
      </g>

      <g className="animate-float-reverse" style={{ transformOrigin: '70% 80%' }}>
        <path d="M700,800 L730,785 L760,800 L760,835 L730,850 L700,835 Z" fill="none" stroke={THEME_COLOR} strokeWidth="1" />
        <circle cx="760" cy="800" r="2" fill={THEME_COLOR} />
        <line x1="760" y1="800" x2="820" y2="740" stroke={THEME_COLOR} strokeWidth="0.5" strokeDasharray="5 5" />
      </g>

      {/* Connectivity Pulsing Paths */}
      <path 
        d="M-50,600 C150,500 350,700 550,600 S850,400 1050,500" 
        fill="none" 
        stroke={THEME_COLOR} 
        strokeWidth="1.2" 
        strokeDasharray="15 25"
        className="animate-dash"
      />
      <path 
        d="M1050,800 C850,900 650,700 450,800 S150,950 -50,850" 
        fill="none" 
        stroke={THEME_COLOR} 
        strokeWidth="0.8" 
        strokeDasharray="10 30"
        className="animate-dash-reverse"
      />
    </svg>

    {/* Focal Glows */}
    <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#02A5E6]/15 rounded-full blur-[140px] animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#02A5E6]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '3s' }} />
  </div>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16 overflow-hidden">
      <TechBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Subtle Status Badge */}
        <div className="flex items-center gap-3 px-5 py-2 mb-12 rounded-full border border-gray-100 bg-white/90 shadow-lg shadow-gray-100/50 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02A5E6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#02A5E6]"></span>
          </span>
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-gray-500">
            Partnership
          </span>
        </div>

        {/* Visionary Title */}
        <h2 className="text-4xl md:text-[4rem] font-medium text-gray-900 tracking-tight leading-[1] mb-10 text-center animate-fade-in-up">
          Powering Innovation Through <br className="hidden md:block" />
          <span className="font-black text-[#02A5E6] drop-shadow-[0_2px_10px_rgba(2,165,230,0.15)]">
            Strategic Collaboration
          </span>
        </h2>

        {/* Narrative */}
        <p className="max-w-2xl text-center text-xl text-gray-500 font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">
          We collaborate with platform leaders and cloud providers to deliver innovation at scale. 
          Our ecosystem integrates best-in-class technologies across data, cloud, analytics, 
          and AI to build high-impact solutions tailored to <span className="text-gray-900 font-semibold border-b-2 border-[#02A5E6]/20">Life Sciences</span>.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -40px) rotate(3deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-40px, 30px) rotate(-4deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -200; }
        }
        @keyframes dash-reverse {
          to { stroke-dashoffset: 200; }
        }
        @keyframes spin-very-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-float-slow {
          animation: float-slow 22s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 28s ease-in-out infinite;
        }
        .animate-dash {
          animation: dash 12s linear infinite;
        }
        .animate-dash-reverse {
          animation: dash-reverse 15s linear infinite;
        }
        .animate-spin-very-slow {
          animation: spin-very-slow 120s linear infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fade-in 1.8s ease-out forwards;
          opacity: 0;
        }
      `}} />
    </section>
  );
};
