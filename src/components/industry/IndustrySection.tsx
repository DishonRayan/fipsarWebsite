
import React from 'react';
import { 
  ClipboardCheck, 
  Leaf, 
  Layers, 
  Activity,
  Plus
} from 'lucide-react';

import hero from '../../assets/HeroSecElement.svg'

/**
 * IndustryCard Component
 */
interface IndustryCardProps {
  icon: React.ElementType;
  title: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm px-5 py-3.5 flex items-center gap-4 min-w-[220px] mx-3 transition-all duration-300 hover:scale-105 cursor-pointer border border-blue-50/20">
      <div className="p-1.5 rounded-md bg-blue-50/40">
        <Icon className="w-5 h-5 text-[#02A5E6]" strokeWidth={2.5} />
      </div>
      <span className="text-base font-semibold text-[#02A5E6] whitespace-nowrap tracking-tight">{title}</span>
    </div>
  );
};

/**
 * IndustrySection Component
 * Replicates the provided design with a simple image-based background on the right.
 */
export const IndustrySection: React.FC = () => {
  const industries = [
    { icon: Activity, title: 'Medical Affairs' },
    { icon: ClipboardCheck, title: 'Regulatory' },
    { icon: Leaf, title: 'Bio Pharma' },
    { icon: Layers, title: "CRO'S" },
    { icon: Plus, title: 'Healthcare Providers' },
  ];

  // Tripling for seamless loop
  const duplicatedIndustries = [...industries, ...industries, ...industries];

  return (
    <section className="relative w-full flex flex-col min-h-[550px] overflow-hidden bg-white">
      {/* SCOPED STYLES FOR MARQUEE */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-custom {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-custom:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. BACKGROUND GRADIENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white to-[#E8F8FF]" />

      {/* 2. RIGHT SIDE IMAGE (DOT PATTERN) - SIMPLE CODE */}
      <div className="absolute top-0 right-0 h-full w-1/2">
        <img 
          src={hero}
          alt="pattern"
          className="w-full h-full object-contain object-right opacity-60"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-10 text-center">
        {/* Top Tagline Pill */}
        <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#02A5E6]/5 border border-[#02A5E6]/20 text-[#02A5E6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02A5E6] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#02A5E6]"></span>
                    </span>
                        Industry
                </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0047AB] leading-[1.2] mb-8 tracking-tight">
          At The Heart Of Every<br />
          Breakthrough In <span className="text-[#02A5E6]">Healthcare</span>
        </h2>

        {/* Description Text */}
        <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed font-normal opacity-90">
          We partner with organizations across the Life Sciences ecosystem,<br className="hidden md:block" />
          from drug development to healthcare delivery.
        </p>
      </div>

      {/* 3. AUTO SLIDER SECTION (The Solid Blue Bar) */}
      <div className="relative w-full mt-auto">
        <div className="bg-[#02A5E6] py-10 overflow-hidden relative shadow-md">
          
          {/* Marquee Animation Wrapper */}
          <div className="relative flex items-center">
            <div className="animate-marquee-custom flex">
              {duplicatedIndustries.map((industry, index) => (
                <IndustryCard 
                  key={index}
                  icon={industry.icon}
                  title={industry.title}
                />
              ))}
            </div>
          </div>
          
          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#02A5E6] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#02A5E6] to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
