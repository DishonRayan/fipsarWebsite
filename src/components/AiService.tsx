import React from 'react';
// import { ScrollToTop } from './ScrollToTop';
// import KeyOfferings from './OtherServiceSection';
// import Footer from './Footer';

// --- Types & Data ---

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface DeliverableItem {
  title: string;
  description: string;
  gradient: string;
  iconType: 'chart' | 'genai' | 'users' | 'doc' | 'chat' | 'pipeline' | 'monitor' | 'shield';
}

// Inline SVGs for better performance and customization
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-2.94l.01-.16.03-.17.06-.18.08-.18.11-.18.13-.17.16-.16.18-.14.2-.12.22-.1.24-.08.26-.05.27-.02h4.62l.14.01zm-3.16 1.8c-.37 0-.71.13-.98.39-.27.27-.4.6-.4.98 0 .38.13.72.4.98.26.27.6.4.98.4.37 0 .71-.13.97-.4.27-.26.4-.6.4-.98 0-.37-.13-.71-.4-.98-.26-.26-.6-.39-.97-.39zm-2.28 12.38l.16.01h4.61l.26.02.26.05.24.08.21.1.2.12.18.14.16.16.13.17.11.18.08.18.06.18.03.17.01.16v2.95h8.16l.06-.01.16-.01.24.05.32.1.4.16.42.24.42.33.4.44.36.57.32.71.24.87.16 1.04.05 1.22-.05 1.23-.14 1.05-.21.88-.28.73-.32.59-.35.46-.36.36-.35.18-.32.12-.28.07-.21.03h-8.24l-.02-.13-.04-.26-.1-.3-.16-.33-.25-.34-.34-.34-.45-.32-.59-.3-.73-.26-.9-.2H8.78l.21-.02.26-.04.3-.07.33-.1.35-.14.35-.19.33-.25.3-.31.26-.38.21-.46.13-.55.05-.63V14.3l.02-.21.04-.27.07-.32.1-.35.15-.37.2-.36.27-.35.33-.32.41-.27.5-.22.59-.14.69-.05h5.3l-.15-.02zm3.17 6.43c.37 0 .71.13.97.39.27.27.4.6.4.98 0 .38-.13.72-.4.98-.26.27-.6.4-.97.4-.38 0-.72-.13-.98-.4-.27-.26-.4-.6-.4-.98 0-.37.13-.71.4-.98.27-.26.6-.39.98-.39z" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M3.343 15.657l.707-.707m15.556 0l-.707-.707M6 12a6 6 0 1112 0 6 6 0 01-12 0z" />
  </svg>
);

const LLMIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
     <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const VertexIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

// --- Abstract Illustrations for "What We Deliver" ---

const IllustrationChart = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="10" y="10" width="80" height="80" rx="4" className="stroke-white/30" strokeDasharray="4 4" />
    <path d="M20 80 L35 50 L50 65 L80 20" strokeLinecap="round" strokeLinejoin="round" className="stroke-white" strokeWidth="3" />
    <circle cx="35" cy="50" r="3" fill="currentColor" />
    <circle cx="50" cy="65" r="3" fill="currentColor" />
    <circle cx="80" cy="20" r="3" fill="currentColor" />
    <path d="M20 80 H80" className="stroke-white/50" />
    <path d="M20 80 V20" className="stroke-white/50" />
  </svg>
);

const IllustrationGenAI = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
     <path d="M50 20 L75 35 V65 L50 80 L25 65 V35 Z" className="stroke-white" strokeWidth="3" />
     <path d="M50 20 V50 M50 50 L75 65 M50 50 L25 65" className="stroke-white/50" />
     <circle cx="50" cy="50" r="6" fill="currentColor" className="text-white" />
     <circle cx="50" cy="20" r="3" fill="currentColor" className="text-white/70" />
     <circle cx="75" cy="35" r="3" fill="currentColor" className="text-white/70" />
     <circle cx="75" cy="65" r="3" fill="currentColor" className="text-white/70" />
     <circle cx="50" cy="80" r="3" fill="currentColor" className="text-white/70" />
     <circle cx="25" cy="65" r="3" fill="currentColor" className="text-white/70" />
     <circle cx="25" cy="35" r="3" fill="currentColor" className="text-white/70" />
  </svg>
);

const IllustrationUsers = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="50" cy="40" r="15" className="stroke-white" strokeWidth="3" />
    <path d="M25 85 C25 70 35 60 50 60 C65 60 75 70 75 85" className="stroke-white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="80" cy="35" r="8" className="stroke-white/50" />
    <path d="M68 55 C72 52 80 52 88 55" className="stroke-white/50" strokeLinecap="round" />
    <circle cx="20" cy="35" r="8" className="stroke-white/50" />
    <path d="M32 55 C28 52 20 52 12 55" className="stroke-white/50" strokeLinecap="round" />
  </svg>
);

const IllustrationDoc = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="25" y="15" width="50" height="70" rx="4" className="stroke-white" strokeWidth="3" />
    <path d="M35 30 H65" className="stroke-white/70" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 45 H65" className="stroke-white/70" strokeWidth="2" strokeLinecap="round" />
    <path d="M35 60 H55" className="stroke-white/70" strokeWidth="2" strokeLinecap="round" />
    <circle cx="65" cy="70" r="12" className="fill-white stroke-none opacity-20" />
    <path d="M60 70 L64 74 L72 66" className="stroke-white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IllustrationChat = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 30 A10 10 0 0 1 30 20 H70 A10 10 0 0 1 80 30 V60 A10 10 0 0 1 70 70 H35 L20 85 V30 Z" className="stroke-white" strokeWidth="3" />
    <circle cx="35" cy="45" r="3" fill="currentColor" />
    <circle cx="50" cy="45" r="3" fill="currentColor" />
    <circle cx="65" cy="45" r="3" fill="currentColor" />
  </svg>
);

const IllustrationPipeline = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="10" y="40" width="20" height="20" rx="2" className="stroke-white" />
    <rect x="40" y="40" width="20" height="20" rx="2" className="stroke-white" />
    <rect x="70" y="40" width="20" height="20" rx="2" className="stroke-white" />
    <path d="M30 50 H40" className="stroke-white/70" strokeDasharray="3 2" />
    <path d="M60 50 H70" className="stroke-white/70" strokeDasharray="3 2" />
    <path d="M50 30 V40" className="stroke-white/70" />
    <path d="M50 60 V70" className="stroke-white/70" />
    <circle cx="50" cy="25" r="5" className="stroke-white/50" />
  </svg>
);

const IllustrationMonitor = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="15" y="20" width="70" height="50" rx="4" className="stroke-white" strokeWidth="3" />
    <path d="M15 70 H85 L80 85 H20 L15 70" className="stroke-white/70" />
    <path d="M25 45 L40 55 L55 35 L75 50" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IllustrationShield = () => (
  <svg className="w-full h-full text-white/90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M50 15 L80 25 V50 C80 70 50 85 50 85 C50 85 20 70 20 50 V25 L50 15 Z" className="stroke-white" strokeWidth="3" />
    <path d="M35 50 L45 60 L65 40" className="stroke-white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const getIllustration = (type: DeliverableItem['iconType']) => {
  switch (type) {
    case 'chart': return <IllustrationChart />;
    case 'genai': return <IllustrationGenAI />;
    case 'users': return <IllustrationUsers />;
    case 'doc': return <IllustrationDoc />;
    case 'chat': return <IllustrationChat />;
    case 'pipeline': return <IllustrationPipeline />;
    case 'monitor': return <IllustrationMonitor />;
    case 'shield': return <IllustrationShield />;
    default: return <IllustrationChart />;
  }
};

const TECHNOLOGIES: TechItem[] = [
  { name: 'Python', icon: <PythonIcon />, color: 'text-blue-600' },
  { name: 'ML Platforms', icon: <BrainIcon />, color: 'text-purple-600' },
  { name: 'LLM Frameworks', icon: <LLMIcon />, color: 'text-emerald-600' },
  { name: 'AWS Bedrock', icon: <CloudIcon />, color: 'text-orange-500' },
  { name: 'Vertex AI', icon: <VertexIcon />, color: 'text-blue-500' },
];

const BUSINESS_VALUES = [
  "Faster insights and foresight",
  "Improved prediction accuracy",
  "Scalable automation",
  "Reduced manual work and cost",
  "Continuous model reliability",
  "Enterprise-ready AI deployment"
];

const DELIVERABLES: DeliverableItem[] = [
  {
    title: "Predictive analytics & forecasting models",
    description: "Advanced predictive models are developed to reveal future trends, customer behavior, and business outcomes before they occur. These forecasting insights support smarter planning, proactive strategy, and confident decision-making.",
    gradient: "from-blue-500 to-cyan-400",
    iconType: "chart"
  },
  {
    title: "Generative AI solutions for business automation",
    description: "GenAI solutions are introduced to automate content generation, streamline workflows, and support faster decision cycles. This level of automation increases productivity while reducing manual effort and operational costs.",
    gradient: "from-indigo-500 to-purple-500",
    iconType: "genai"
  },
  {
    title: "Recommendation & personalization engines",
    description: "Intelligent recommendation engines are created to deliver tailored experiences to every user. These personalization capabilities boost engagement, improve satisfaction, and drive stronger conversions across digital platforms.",
    gradient: "from-fuchsia-500 to-pink-500",
    iconType: "users"
  },
  {
    title: "Intelligent document processing (IDP)",
    description: "AI-powered document processing handles extraction, classification, and validation with high accuracy. This approach cuts down manual processing time and enhances reliability in large-volume document operations.",
    gradient: "from-orange-400 to-amber-400",
    iconType: "doc"
  },
  {
    title: "Conversational analytics & chat solutions",
    description: "Conversational AI tools and smart chat interfaces are built to understand user intent and provide immediate, helpful responses. These solutions elevate customer experience and ensure seamless, real-time support.",
    gradient: "from-emerald-400 to-teal-500",
    iconType: "chat"
  },
  {
    title: "AI pipeline orchestration (MLOps)",
    description: "Automated MLOps pipelines are deployed to manage model training, deployment, versioning, and continuous updates. This orchestration guarantees scalable, dependable, and efficiently maintained AI systems.",
    gradient: "from-cyan-500 to-blue-600",
    iconType: "pipeline"
  },
  {
    title: "Model monitoring & performance optimization",
    description: "Ongoing monitoring tracks accuracy, drift, and real-world performance to keep models operating at peak quality. Continuous optimization ensures stable, trustworthy results throughout the model lifecycle.",
    gradient: "from-violet-500 to-indigo-600",
    iconType: "monitor"
  },
  {
    title: "AI governance, ethics, & risk control",
    description: "Responsible AI frameworks are established to mitigate bias, safeguard data, and maintain regulatory alignment. These governance practices promote ethical use of AI while reducing security and compliance risks.",
    gradient: "from-rose-500 to-red-600",
    iconType: "shield"
  }
];

// --- Sub-Components ---

/**
 * DeliverableRow: A zigzag row component.
 */

const imges = [
  'https://eep.iimb.ac.in/storage/2023/08/Predictive-Analytics-Business-Forecasting-Jan-2024_v3.png',
  'https://www.mindinventory.com/blog/wp-content/uploads/2023/12/creating-generative-ai-solution.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQotd4ChfewaB_B6x2cLivycYAAFzekd5Vg&s',
  'https://valenta.io/wp-content/uploads/2023/08/IDP-Services-1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOL8PuGfkrGZ-fDplHUcN_V4CDcfA8RFi4Rg&s',
  'https://www.shutterstock.com/image-photo/ai-platform-generating-art-images-600nw-2672551269.jpg',
  'https://img.freepik.com/free-photo/student-home-taking-notes-while-watching-presentation-closeup_482257-118737.jpg?semt=ais_hybrid&w=740&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpPh9JqlKITZzCHzWAyBZEITvvKYnEroWPQ&s'
]


const headingStyles = 
  `
 .own-h1-css{position:relative;padding:0;margin:0;font-weight:800;font-size:30px;color:#080808;text-align:center;text-transform:uppercase;padding-bottom:5px;transition:all .4s ease}
.own-h1-css:before{width:28px;height:5px;display:block;content:"";position:absolute;bottom:3px;left:50%;margin-left:-14px;background-color:#000}
.own-h1-css:after{width:100px;height:1px;display:block;content:"";position:relative;margin-top:15px;left:50%;margin-left:-50px;background-color:#000}


  `



const DeliverableRow: React.FC<{ item: DeliverableItem; index: number }> = ({ item, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-20 mb-20 md:mb-16`}>
      
      {/* Visual Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative group">
           {/* Corner Accent: Behind */}
           <div className={`absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 rounded-tl-3xl opacity-60 transition-all duration-500 group-hover:top-[-1.5rem] group-hover:left-[-1.5rem] ${isReversed ? 'border-indigo-300' : 'border-blue-300'}`}></div>
           <div className={`absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 rounded-br-3xl opacity-60 transition-all duration-500 group-hover:bottom-[-1.5rem] group-hover:right-[-1.5rem] ${isReversed ? 'border-indigo-300' : 'border-blue-300'}`}></div>
           
           {
            // img.map((item,index) =>
                <img  src={imges[index % imges.length]}   className={`relative  h-[220px] md:w-[400px] md:h-[280px] rounded-2xl  shadow-xl flex items-center justify-center transform transition-transform duration-500 hover:scale-[1.02]`}/>

            // )
           }

           {/* Main Card/Image Placeholder */}
           {/* <div className={`relative w-[300px] h-[220px] md:w-[400px] md:h-[280px] rounded-2xl bg-gradient-to-br ${item.gradient} shadow-xl flex items-center justify-center p-8 transform transition-transform duration-500 hover:scale-[1.02]`}>
              <div className="absolute inset-0 bg-white opacity-10 rounded-2xl"></div>
            
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full shadow-lg border border-white/30" />
              <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full shadow-sm border border-white/30" />
              
             
              <div className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg">
                {getIllustration(item.iconType)}
              </div>
           </div> */}
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className={`inline-block px-3 py-1 mb-4 rounded-full text-xs font-semibold tracking-wide uppercase bg-slate-100 text-slate-500`}>
          Feature {index + 1}
        </div>
        <h3 className="text-xl md:text-xl font-bold text-slate-800 mb-4 leading-tight capitalize">
          {item.title}
        </h3>
        <p className="text-md text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>

    </div>
  );
};

/**
 * TechTicker: An infinite horizontal scrolling slider.
 */
const TechTicker: React.FC = () => {
  // Triple the list for smoother infinite scroll on wide screens
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <div className="w-full overflow-hidden bg-white border-y border-slate-100 py-16 relative group">
      {/* Gradient Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-scroll group-hover:paused">
        {items.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`}
            className="flex items-center justify-center px-12"
          >
            <div className="flex flex-col items-center gap-4 group/item cursor-default transition-transform hover:scale-105 duration-300">
               <div className={`p-4 rounded-2xl bg-white shadow-lg border border-slate-100 ${tech.color} group-hover/item:shadow-xl transition-all duration-300`}>
                 {tech.icon}
               </div>
               <span className="text-lg font-semibold text-slate-600 group-hover/item:text-slate-900 transition-colors">
                  {tech.name}
               </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * LadderStep: A single step in the vertical ladder.
 */
const LadderStep: React.FC<{ index: number; text: string; isLast: boolean }> = ({ index, text, isLast }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center justify-center w-full mb-0 h-32">
      
      {/* Left Card */}
      <div className={`flex-1 flex justify-end pr-12 ${!isLeft ? 'invisible' : ''}`}>
        <div className="relative bg-white p-6 rounded-xl border border-blue-300 hover:border-blue-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.15)] transition-all duration-300 group max-w-sm w-full">
            {/* Connector Line to Center */}
            <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-blue-300 group-hover:bg-blue-300 transition-colors" />
            <h3 className="text-lg font-bold text-slate-700 group-hover:text-blue-600 transition-colors capitalize">{text}</h3>
        </div>
      </div>

      {/* Center Ladder Rail */}
      <div className="relative flex flex-col items-center h-full mx-4">
        {/* The Node (Number) */}
        <div className="z-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg flex items-center justify-center border-4 border-white ring-1 ring-slate-200 transform transition-transform duration-300 hover:scale-110">
        {/* <div className="z-20 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-lg flex items-center justify-center border-4 border-white ring-1 ring-slate-200 transform transition-transform duration-300 hover:scale-110"> */}
            <span className="font-bold text-lg">{index + 1}</span>
        </div>
        {/* The Rail */}
        {!isLast && (
           <div className="absolute top-10 bottom-[-2.5rem] w-0.5 bg-blue-300" />
        )}
      </div>

      {/* Right Card */}
      <div className={`flex-1 flex justify-start pl-12 ${isLeft ? 'invisible' : ''}`}>
        <div className="relative bg-white p-6 rounded-xl border border-blue-300 hover:border-blue-600  shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.15)] transition-all duration-300 group max-w-sm w-full">
            {/* Connector Line to Center */}
            <div className="absolute top-1/2 -left-12 w-12 h-[2px] bg-blue-300 group-hover:text-blue-600  transition-colors" />
            <h3 className="text-lg font-bold text-slate-700 group-hover:text-blue-600  transition-colors capitalize">{text}</h3>
        </div>
      </div>

    </div>
  );
};

/**
 * LadderStepMobile: A variation for smaller screens.
 */
const LadderStepMobile: React.FC<{ index: number; text: string; isLast: boolean }> = ({ index, text, isLast }) => {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
       {/* Rail */}
       <div className="flex flex-col items-center relative">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white font-bold text-sm shadow-lg z-10 border-2 border-white ring-1 ring-slate-200">
            {index + 1}
          </div>
          {!isLast && <div className="absolute top-10 bottom-[-2.5rem] w-0.5 bg-slate-200" />}
       </div>
       
       {/* Card */}
       <div className="flex-grow pt-1">
          <div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
             <h3 className="text-base font-semibold text-slate-800">{text}</h3>
          </div>
       </div>
    </div>
  )
}


// --- Main Export ---

export const AiService: React.FC = () => {
  return (

    <>
        <div className="w-full bg-slate-50">
      
      {/* Section 1: What We Deliver (Zigzag) */}
      <section className="py-24 relative overflow-hidden">



      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300 opacity-20 group-hover:opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <img 
                
                src='https://caddcentre.com/blog/wp-content/uploads/2024/06/automation-data-analytic-with-robot-digital-visualization-big-data-scientist1.jpg'
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab7Wep8BP4amVVsYi6qo0ZzPHGvsGl0BPqQ&s" 
                alt="AI and Automation Technology" 
                className="w-full h-auto object-cover transform group-hover:scale-150 transition-transform duration-700 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-blue-600"></span>
              <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
                AI & Machine Learning
              </span>
            </div>
{/*             
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
              Unlock Predictive <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Intelligence
              </span>
            </h2> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-6 leading-tight">
              Unlock Predictive <br className="hidden md:block"/>
              {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> */}
                Intelligence
              {/* </span> */}
            </h2>
            
            <p className="text-lg font-600 mb-8 leading-relaxed">
              We help organizations embed AI into core business operations through responsible, scalable, and performance-driven solutions. From predictive analytics to generative AI, we deliver practical intelligence with measurable business impact.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Data-driven decision making",
                "Automated operational workflows",
                "Scalable Generative AI models"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-600">{item}</span>
                </li>
              ))}
            </ul>

            {/* <div className="flex flex-wrap gap-4">
              <Button variant="primary">Explore Solutions</Button>
              <Button variant="outline">View Case Studies</Button>
            </div> */}
          </div>

        </div>
      </div>



        <div className="container mx-auto px-4 mt-20 relative z-10">
          <div className="text-center mb-24">
            {/* <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Capabilities</span> */}
            {/* <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Deliver</span>
            </h2> */}
            {/* <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              What We Deliver
            </h2> */}

            
            <div className="one">
              <h1 className="own-h1-css">What We Deliver</h1>
            </div>
            {/* <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              End-to-end AI solutions designed to transform your data into actionable intelligence.
            </p> */}
          </div>

          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {DELIVERABLES.map((item, index) => (
              <DeliverableRow key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Technologies Auto-Slider */}
      <section className="py-24 relative overflow-hidden bg-slate-50/50 border-t border-slate-100">
        {/* Background blobs for visual interest in light mode */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-3xl" />
            <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-indigo-100 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 mb-12 text-center relative z-10">
          {/* <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Our Stack</span> */}
          {/* <h2 className="text-xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Support</span>
          </h2> */}
          {/* <h2 className="text-xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Technologies We Support
          </h2> */}

          
            <div className="one">
              <h1 className="own-h1-css">Technologies We Support</h1>
            </div>
          {/* <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We integrate with the most powerful tools in the AI ecosystem to build scalable, enterprise-grade solutions.
          </p> */}
        </div>
        
        <TechTicker />
      </section>

      {/* Section 3: Business Value Ladder */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
             {/* <span className="text-emerald-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Why Choose Us</span> */}
            {/* <h2 className="text-lg md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Business Value</span>
            </h2> */}
            {/* <h2 className="text-lg  font-extrabold tracking-tight text-slate-900 mb-6">
              Unlock Business Value
            </h2> */}


            <div className="one">
              <h1 className="own-h1-css">Unlock Business Value</h1>
            </div>
            {/* <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              A step-by-step transformation that turns potential into performance.
            </p> */}
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:flex flex-col w-full items-center">
              {BUSINESS_VALUES.map((value, idx) => (
                <LadderStep 
                  key={idx} 
                  index={idx} 
                  text={value} 
                  isLast={idx === BUSINESS_VALUES.length - 1} 
                />
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden flex flex-col w-full px-2">
               {BUSINESS_VALUES.map((value, idx) => (
                <LadderStepMobile 
                  key={idx} 
                  index={idx} 
                  text={value} 
                  isLast={idx === BUSINESS_VALUES.length - 1} 
                />
              ))}
            </div>
            
            {/* CTA */}
            {/* <div className="mt-20 text-center">
               <button className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-slate-900 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                 <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                 <span className="relative flex items-center gap-2">
                    Start Your Transformation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </span>
               </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* <style tsx>{headingStyles}</style> */}

      {/* <ScrollToTop position="right" /> */}

    </div>

    {/* <Footer/> */}
    </>



  );
};