import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 pt-0 text-white overflow-hidden">
      {/* 
        Injecting styles locally for the specific wave animation 
        since we cannot use external CSS files.
      */}
      <style>{`
        .waves {
          position: relative;
          width: 100%;
          height: 15vh;
          margin-bottom: -7px; /* Fix for gaps in Safari */
          min-height: 100px;
          max-height: 150px;
        }

        .parallax > use {
          animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
          animation-duration: 7s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 13s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 20s;
        }

        @keyframes move-forever {
          0% {
            transform: translate3d(-90px,0,0);
          }
          100% { 
            transform: translate3d(85px,0,0);
          }
        }

        /* Mobile adjustment */
        @media (max-width: 768px) {
          .waves {
            height: 40px;
            min-height: 40px;
          }
        }
      `}</style>

      {/* Animated Wavy Background Top */}
      <div className="w-full bg-[#f8fafc]"> {/* Matches body bg to blend */}
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(1, 151, 246, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(1, 151, 246, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(1, 151, 246, 0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0f172a" /> {/* Matches footer bg (slate-900) */}
          </g>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Social */}
          <div className="space-y-6">
            {/* <div>
                
                <img src='https://www.fipsar.com/assets/img/Fipsar-logo.jpg' width="110"/>
            </div> */}
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-[#0197F6] rounded-lg flex items-center justify-center transform rotate-3">
                <span className="text-white font-bold text-2xl">W</span>
              </div> */}
              <span className="text-2xl font-bold tracking-wide">Fipsar Inc</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
               Revolutionize the Life Sciences Through Data, AI & Compliance Excellence

              
              {/* Innovating the future with precision and creativity. We build digital solutions that propel businesses forward. */}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0197F6] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#0197F6]/50">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0197F6] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#0197F6]/50">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0197F6] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#0197F6]/50">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0197F6] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#0197F6]/50">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-[#0197F6] inline-block pb-1">Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Solutions ', 'Partnerships ','Insights ', 'Contact', 'Careers '].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#0197F6] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0197F6] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-[#0197F6] inline-block pb-1">Services</h3>
            <ul className="space-y-3">
              {['Data Engineeering & Integration', 'Business Intelligence', 'Ai & Machine Learning', 'Data Governance & compliance', 'Managed Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#0197F6] hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0197F6] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Industries & Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-6 border-b-2 border-[#0197F6] inline-block pb-1">Industries</h3>
              <div className="flex flex-wrap gap-2">
                {['Life Science', 'Healthcare'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-xs text-slate-300 rounded-full border border-slate-700 hover:border-[#0197F6] hover:text-[#0197F6] transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* <div className="space-y-3 pt-4">
               <div className="flex items-start gap-3 text-slate-400">
                  <MapPin size={18} className="text-[#0197F6] mt-1 shrink-0" />
                  <span className="text-sm">123 Innovation Blvd, Tech City, TC 90210</span>
               </div>
               <div className="flex items-center gap-3 text-slate-400">
                  <Mail size={18} className="text-[#0197F6] shrink-0" />
                  <span className="text-sm">hello@wavetech.com</span>
               </div>
            </div> */}
          </div>

        </div>

        {/* Newsletter Section (Bonus for "Modern/Impressive") */}
        {/* <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white">Subscribe to our newsletter</h4>
              <p className="text-slate-400 text-sm mt-1">Get the latest news and updates right in your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto bg-slate-800 rounded-full p-1 border border-slate-700 focus-within:border-[#0197F6] transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent text-white px-4 py-2 w-full md:w-64 focus:outline-none placeholder-slate-500 text-sm"
              />
              <button className="bg-[#0197F6] hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors">
                <Send size={16} className="-ml-0.5 mt-0.5" />
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Copyright Footer */}
      <div className="bg-slate-950 py-6 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Fipsar Solutions. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#0197F6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0197F6] transition-colors">Terms of Service</a>
            {/* <a href="#" className="hover:text-[#0197F6] transition-colors">Cookies</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;