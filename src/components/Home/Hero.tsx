import React from 'react';
import {  ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import Hhero from '../../assets/HomeHero.png'


const HeroComponent: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F9FD] pt-32 pb-20 lg:pt-32 lg:pb-16 isolate ">
      {/* Local Styles for Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes pulse-opacity {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.3; }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-opacity 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* 
        Global Ambient Background Blobs 
      */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-20">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-[#E0F3FA] rounded-full blur-[80px] opacity-70" />
        <div className="absolute bottom-[-10%] -right-[10%] w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] bg-[#E0F3FA] rounded-full blur-[80px] opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: Text Content --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left relative">
            
            {/* SVG 1: Holographic Data Cortex - High Fidelity, Impressive, Left Anchor */}
            {/* Increased size and complexity, positioned to bleed off-left slightly */}
            <div className="absolute top-[-100px] left-[-120px] sm:left-[-160px] w-[600px] h-[800px] pointer-events-none -z-10 hidden sm:block">
               <svg viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#02A5E6]">
                  <defs>
                     <linearGradient id="cortex-fade-horizontal" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="currentColor" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                     </linearGradient>
                     <linearGradient id="cortex-fade-vertical" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                     </linearGradient>
                     <radialGradient id="node-glow" cx="0" cy="0" r="1">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                     </radialGradient>
                  </defs>

                  {/* 1. Main Orbital Rings (The "Engine") */}
                  <g transform="translate(100, 300)">
                     {/* Outer Ring Segment */}
                     <path d="M-50 -250 A 300 300 0 0 1 -50 250" stroke="url(#cortex-fade-vertical)" strokeWidth="1.5" fill="none" opacity="0.5" />
                     {/* Mid Ring Segment with Dash */}
                     <path d="M-50 -200 A 250 250 0 0 1 -50 200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="20 10" fill="none" />
                     {/* Inner Ring */}
                     <path d="M-50 -150 A 200 200 0 0 1 -50 150" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" fill="none" />
                  </g>

                  {/* 2. Horizontal Data Injection Lines (Fading Out) */}
                  <g>
                    <path d="M50 150 H 200" stroke="url(#cortex-fade-horizontal)" strokeWidth="1.5" />
                    <circle cx="200" cy="150" r="3" fill="currentColor" fillOpacity="0.3" />
                    
                    <path d="M50 250 H 280" stroke="url(#cortex-fade-horizontal)" strokeWidth="1.5" />
                    <rect x="275" y="246" width="8" height="8" transform="rotate(45 279 250)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />

                    <path d="M50 450 H 240" stroke="url(#cortex-fade-horizontal)" strokeWidth="1.5" />
                    <circle cx="240" cy="450" r="2" fill="currentColor" fillOpacity="0.4" />
                    
                    <path d="M50 550 H 180" stroke="url(#cortex-fade-horizontal)" strokeWidth="1.5" strokeDasharray="4 4" />
                  </g>

                  {/* 3. Floating Hexagon Cluster (The "Smarter Data" Visual) */}
                  <g transform="translate(140, 300)">
                     {/* Central Hex */}
                     <path d="M0 -20 L17 -10 V10 L0 20 L-17 10 V-10 Z" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
                     <circle cx="0" cy="0" r="6" fill="currentColor" fillOpacity="0.1" />
                     
                     {/* Satellite Hexes */}
                     <path d="M40 -40 L50 -35 V-25 L40 -20 L30 -25 V-35 Z" fill="currentColor" fillOpacity="0.05" />
                     <path d="M40 40 L50 45 V55 L40 60 L30 55 V45 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
                     
                     {/* Connection Lines */}
                     <line x1="17" y1="-10" x2="35" y2="-30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                     <line x1="17" y1="10" x2="35" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                  </g>

                  {/* 4. Abstract "Rain" Background (Depth) */}
                  <g opacity="0.1">
                     <rect x="80" y="50" width="1" height="80" fill="currentColor" />
                     <rect x="120" y="100" width="1" height="150" fill="currentColor" />
                     <rect x="60" y="400" width="1" height="100" fill="currentColor" />
                     <rect x="100" y="500" width="1" height="60" fill="currentColor" />
                  </g>

                  {/* 5. Glowing Focus Nodes (Highlights) */}
                  <circle cx="100" cy="300" r="40" fill="url(#node-glow)" opacity="0.2" />
                  <circle cx="280" cy="250" r="20" fill="url(#node-glow)" opacity="0.15" />

                  {/* 6. Decorative Tech Glyphs on the Left Edge */}
                  <g transform="translate(40, 200)">
                     <rect width="4" height="20" rx="1" fill="currentColor" fillOpacity="0.3" />
                     <rect y="30" width="4" height="40" rx="1" fill="currentColor" fillOpacity="0.2" />
                     <rect y="80" width="4" height="10" rx="1" fill="currentColor" fillOpacity="0.3" />
                     <rect y="200" width="4" height="60" rx="1" fill="currentColor" fillOpacity="0.1" />
                  </g>
               </svg>
            </div>
            
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#02A5E6]/30 bg-white/60 backdrop-blur-sm text-[#02A5E6] text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Enterprise Grade Security</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[2.5rem] leading-[1.1] font-extrabold text-slate-900 mb-6 tracking-tight relative">
              Transforming Life Sciences  <br />
              <span className="text-[#02A5E6]">Through Data </span> <br />
               AI & Compliance Excellence
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
             Specialized consulting firm delivering data engineering, advanced analytics and AI-driven solutions to life sciences and healthcare organizations.
              {/* Unlock the power of your healthcare data with Fipsar's compliant, secure, and scalable data engineering platform. */}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* <button className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#02A5E6] hover:bg-[#0288be] text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 group">
                Explore our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button> */}
              <Link to='/solutions' className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-[#02A5E6] hover:bg-[#0288be] text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 group">
                Explore our Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="inline-flex justify-center items-center px-8 py-3.5 bg-white hover:bg-gray-50 text-slate-700 font-semibold rounded-lg border border-slate-200 shadow-sm transition-all duration-200">
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: Image Content --- */}
          <div className="w-full lg:w-1/2 relative">
             
            {/* SVG 2: Tech Schematic - Anchored strictly behind the image */}
            <div className="absolute -top-16 -right-16 w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] pointer-events-none -z-10">
               <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#02A5E6]">
                 {/* Base Grid Pattern */}
                 <defs>
                   <pattern id="tech-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                     <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" fillOpacity="0.1" />
                   </pattern>
                 </defs>
                 <rect width="300" height="300" fill="url(#tech-grid)" opacity="0.6"/>
                 
                 {/* Top Right: Concentric Data Rings */}
                 <g opacity="0.8">
                    <circle cx="240" cy="60" r="50" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="6 4" />
                    <circle cx="240" cy="60" r="35" stroke="currentColor" strokeWidth="2" strokeOpacity="0.1" />
                    <circle cx="240" cy="60" r="15" fill="currentColor" fillOpacity="0.05" />
                    <line x1="240" y1="60" x2="280" y2="20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
                    <circle cx="280" cy="20" r="3" fill="currentColor" fillOpacity="0.2" />
                 </g>

                 {/* Bottom Left: Circuit Board Trace Lines */}
                 <path d="M40 260 H100 L120 240 H200" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
                 <path d="M40 270 H90 L110 250 H180" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.1" fill="none" />
                 
                 {/* Floating Geometric Elements */}
                 <rect x="220" y="220" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" transform="rotate(15 240 240)" />
                 <rect x="40" y="40" width="30" height="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
                 
                 {/* Accent Plus Marks */}
                 <path d="M280 150 H290 M285 145 V155" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
                 <path d="M10 150 H20 M15 145 V155" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" />
               </svg>
            </div>

             {/* Dashboard Mockup Container */}
            <div className="relative z-10 animate-float">
                <div className="rounded-2xl p-2 bg-white shadow-2xl shadow-slate-200/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                   <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[4/3] group">
                      {/* Mockup Top Bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/50 border-b border-slate-700 flex items-center px-4 space-x-2 z-20">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      </div>

                      {/* Dashboard Image */}
                      <img 
                        src={Hhero}
                        // src="https://www.contractpharma.com/wp-content/uploads/sites/6/2024/08/280_main-1.jpg"
                        // src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                        alt="Analytics Dashboard Interface" 
                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-slate-900/20 pointer-events-none mix-blend-multiply"></div>
                   </div>
                </div>
            </div>
            
            {/* Reflection/Shadow Blur beneath the image */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-blue-900/20 rounded-[100%] blur-2xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroComponent;