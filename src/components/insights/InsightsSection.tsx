import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  Video, 
  Briefcase, 
  TrendingUp, 
  ArrowRight,
  ChevronRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

// --- Types & Interfaces ---
interface InsightItem {
  id: string;
  title: string;
  category: string;
  readTime?: string;
  image: string;
}

interface CategoryData {
  id: string;
  label: string;
  description: string;
  icon: React.ReactElement;
  items: InsightItem[];
}

// --- Data Configuration ---

const THOUGHT_LEADERSHIP_DATA: InsightItem[] = [
  {
    id: 'tl-1',
    title: 'The Future of Digital Transformation: What Leaders Need to Prioritize in 2025',
    category: 'Strategy',
    readTime: '6 min read',
    image: 'https://picsum.photos/1200/800?random=1'
  },
  {
    id: 'tl-2',
    title: 'Redefining Customer Experience Through AI-Driven Personalization',
    category: 'Innovation',
    readTime: '5 min read',
    image: 'https://picsum.photos/800/800?random=2'
  },
  {
    id: 'tl-3',
    title: 'Why Sustainability Is Becoming a Core Business Strategy',
    category: 'ESG',
    readTime: '4 min read',
    image: 'https://picsum.photos/800/800?random=3'
  },
  {
    id: 'tl-4',
    title: 'The Rise of Human-Tech Collaboration: What It Means for the Workforce',
    category: 'Talent',
    readTime: '7 min read',
    image: 'https://picsum.photos/800/800?random=4'
  }
];

const RESOURCE_CATEGORIES: CategoryData[] = [
  {
    id: 'blogs',
    label: 'Blogs',
    description: 'Practical tips, guides, and updates from our team.',
    icon: <FileText className="w-4 h-4" />,
    items: [
      {
        id: 'blog-1',
        title: '5 Quick Wins to Improve Operational Efficiency',
        category: 'Blog',
        image: 'https://picsum.photos/800/600?random=5'
      },
      {
        id: 'blog-2',
        title: 'How to Leverage Data Analytics Even If You’re Just Getting Started',
        category: 'Blog',
        image: 'https://picsum.photos/800/600?random=6'
      },
      {
        id: 'blog-3',
        title: 'A Beginner’s Guide to Implementing Automation in Your Team',
        category: 'Blog',
        image: 'https://picsum.photos/800/600?random=7'
      },
      {
        id: 'blog-4',
        title: 'What We Learned from This Year’s Major Industry Conference',
        category: 'Blog',
        image: 'https://picsum.photos/800/600?random=8'
      }
    ]
  },
  {
    id: 'whitepapers',
    label: 'Whitepapers',
    description: 'Deep dives and research-backed reports.',
    icon: <BookOpen className="w-4 h-4" />,
    items: [
      {
        id: 'wp-1',
        title: 'AI Adoption Roadmap: Strategies, Barriers, and Best Practices',
        category: 'Whitepaper',
        image: 'https://picsum.photos/800/600?random=9'
      },
      {
        id: 'wp-2',
        title: 'The 2025 Market Outlook Report: Key Trends Shaping the Next Decade',
        category: 'Whitepaper',
        image: 'https://picsum.photos/800/600?random=10'
      },
      {
        id: 'wp-3',
        title: 'Cybersecurity in a Hyperconnected World: Risk & Resilience Models',
        category: 'Whitepaper',
        image: 'https://picsum.photos/800/600?random=11'
      },
      {
        id: 'wp-4',
        title: 'Building a Future-Ready Enterprise: Transformational Frameworks',
        category: 'Whitepaper',
        image: 'https://picsum.photos/800/600?random=12'
      }
    ]
  },
  {
    id: 'webinars',
    label: 'Webinars',
    description: 'Watch sessions from experts and industry leaders.',
    icon: <Video className="w-4 h-4" />,
    items: [
      {
        id: 'web-1',
        title: 'Masterclass: Navigating Digital Transformation in Complex Organizations',
        category: 'Webinar',
        image: 'https://picsum.photos/800/600?random=13'
      },
      {
        id: 'web-2',
        title: 'Live Panel: Industry Leaders Discuss the State of Innovation',
        category: 'Webinar',
        image: 'https://picsum.photos/800/600?random=14'
      },
      {
        id: 'web-3',
        title: 'Workshop: How to Build High-Performance Teams in a Hybrid Work Era',
        category: 'Webinar',
        image: 'https://picsum.photos/800/600?random=15'
      },
      {
        id: 'web-4',
        title: 'Tech Demo: Using Automation Tools to Cut Costs & Boost Productivity',
        category: 'Webinar',
        image: 'https://picsum.photos/800/600?random=16'
      }
    ]
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
    description: 'Real-world success stories and results.',
    icon: <Briefcase className="w-4 h-4" />,
    items: [
      {
        id: 'cs-1',
        title: 'How a Global Retailer Reduced Costs by 30% Through Automation',
        category: 'Case Study',
        image: 'https://picsum.photos/800/600?random=17'
      },
      {
        id: 'cs-2',
        title: 'Transforming Customer Support Using AI Chatbots for a Telecom Leader',
        category: 'Case Study',
        image: 'https://picsum.photos/800/600?random=18'
      },
      {
        id: 'cs-3',
        title: 'A Manufacturing Firm’s Journey to a Connected, Data-Driven Operation',
        category: 'Case Study',
        image: 'https://picsum.photos/800/600?random=19'
      },
      {
        id: 'cs-4',
        title: 'Scaling a Start-Up to Enterprise-Level Infrastructure in Under 6 Months',
        category: 'Case Study',
        image: 'https://picsum.photos/800/600?random=20'
      }
    ]
  },
  {
    id: 'industry-trends',
    label: 'Industry Trends',
    description: 'Stay ahead of the curve with market analysis.',
    icon: <TrendingUp className="w-4 h-4" />,
    items: [
      {
        id: 'it-1',
        title: 'Top 7 Trends Reshaping the Industry in 2025',
        category: 'Trend Report',
        image: 'https://picsum.photos/800/600?random=21'
      },
      {
        id: 'it-2',
        title: 'How GenAI Is Influencing Business Models Across Sectors',
        category: 'Trend Report',
        image: 'https://picsum.photos/800/600?random=22'
      },
      {
        id: 'it-3',
        title: 'Market Disruptors to Watch: New Players Changing the Competitive Landscape',
        category: 'Trend Report',
        image: 'https://picsum.photos/800/600?random=23'
      },
      {
        id: 'it-4',
        title: 'Regulatory Changes You Need to Prepare for in the Coming Year',
        category: 'Trend Report',
        image: 'https://picsum.photos/800/600?random=24'
      }
    ]
  }
];

// --- Main Component ---
const InsightsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('blogs');

  // Thought Leadership split: Main featured item vs others
  const featuredTL = THOUGHT_LEADERSHIP_DATA[0];
  const sidebarTL = THOUGHT_LEADERSHIP_DATA.slice(1);

  // Helper to get current category data
  const currentCategory = RESOURCE_CATEGORIES.find(c => c.id === activeTab) || RESOURCE_CATEGORIES[0];

  return (
    // Updated padding to pt-24 (mobile) and pt-36 (desktop) to clear fixed headers
    <section className="pt-24 pb-8 md:pt-36 md:pb-16 bg-[#F8FAFC] relative overflow-hidden font-sans">
      
      {/* Custom Styles for Scrollbar - Updated for Blue Background */}
      <style>{`
        /* Custom styled scrollbar for the tabs container */
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px; /* Thinner scrollbar */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5); 
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Refined Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-[-5%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-sky-100/60 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-50/50 rounded-full blur-[60px] md:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12 text-center">
            <div className="max-w-4xl">
                {/* <div className="flex items-center justify-center gap-3 mb-3 md:mb-5">
                    <span className="h-[2px] w-8 bg-[#02A5E6]"></span>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#02A5E6] uppercase">Insights</span>
                    <span className="h-[2px] w-8 bg-[#02A5E6]"></span>
                </div> */}


                     <div className="flex justify-center mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#02A5E6]/5 border border-[#02A5E6]/20 text-[#02A5E6] text-xs font-bold tracking-widest uppercase shadow-sm shadow-blue-100 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02A5E6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#02A5E6]"></span>
                </span>
                Insights
                </div>
          </div>
                <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                    Strategic Insights & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02A5E6] to-[#0077b6]">Future Perspectives</span>
                </h1>
            </div>
        </div>

        {/* === SECTION 1: THOUGHT LEADERSHIP (Clean Editorial Style) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-20">
            
            {/* Featured Article (Left) */}
            <div className="lg:col-span-7 group cursor-pointer h-full">
              <div className="relative h-full min-h-[250px] md:min-h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                <img 
                  src={featuredTL.image} 
                  alt={featuredTL.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                  <div className="flex items-center gap-4 mb-3 md:mb-5">
                     <span className="px-4 py-1.5 bg-[#02A5E6] text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20">Featured Insight</span>
                     <span className="text-slate-300 text-xs md:text-sm font-semibold">{featuredTL.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-[1.2] group-hover:text-blue-50 transition-colors">
                    {featuredTL.title}
                  </h2>
                  <div className="flex items-center gap-3 text-white font-bold group-hover:translate-x-2 transition-transform text-sm md:text-base">
                    Read Full Story <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#02A5E6]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Articles (Right - Clean List) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
               <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center gap-3">
                   Trending Stories
                   <div className="h-px bg-slate-200 flex-1 ml-4"></div>
               </h3>
               
               <div className="flex flex-col">
                   {sidebarTL.map((item, idx) => (
                     <div 
                        key={item.id} 
                        className="group py-4 md:py-5 border-b border-slate-200 hover:border-[#02A5E6]/50 transition-colors cursor-pointer"
                     >
                        <div className="flex items-start gap-4">
                            <span className="text-lg md:text-xl font-bold text-slate-300 group-hover:text-[#02A5E6] transition-colors mt-1 font-mono">
                                0{idx + 1}
                            </span>
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-[10px] font-bold text-[#02A5E6] uppercase tracking-widest">{item.category}</span>
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-slate-800 leading-snug group-hover:text-[#02A5E6] transition-colors mb-1.5">
                                    {item.title}
                                </h4>
                                <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-slate-500 transition-colors">
                                    Read Article <ArrowUpRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                     </div>
                   ))}
               </div>
            </div>
        </div>


        {/* === SECTION 2: RESOURCE HUB (Enhanced Tabs & Cards) === */}
        <div className="bg-[#02A5E6] rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-blue-900/10 relative overflow-hidden">
          
           {/* Decorative background element for the blue section */}
           <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
                    <path d="M50 10V90" stroke="white" strokeWidth="2" />
                    <path d="M10 50H90" stroke="white" strokeWidth="2" />
                </svg>
           </div>

          {/* Header & Tabs */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 md:gap-8 mb-6 md:mb-10 relative z-10">
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Resource Library</h3>
              <p className="text-blue-100 text-sm md:text-lg">Curated collections for every stage of your journey.</p>
            </div>

            {/* Tabs Pill Container - Enhanced Design */}
            <div 
              className="w-full xl:w-auto flex overflow-x-auto pb-4 gap-3 custom-scrollbar snap-x px-1"
            >
              {RESOURCE_CATEGORIES.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`
                      snap-start relative flex-shrink-0 flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border group
                      ${isActive 
                        ? 'bg-white border-white text-[#02A5E6] shadow-[0_8px_20px_rgba(0,0,0,0.15)] scale-105 z-10 translate-y-[-2px]' 
                        : 'bg-white/10 border-white/10 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm'
                      }
                    `}
                  >
                    <span className={`
                       flex items-center justify-center w-6 h-6 rounded-full transition-colors duration-300
                       ${isActive ? 'bg-blue-50 text-[#02A5E6]' : 'bg-transparent text-white/80 group-hover:text-white'}
                    `}>
                        {React.cloneElement(category.icon as React.ReactElement<{ className?: string }>, { className: "w-4 h-4" })}
                    </span>
                    <span className="relative">
                        {category.label}
                    </span>
                    {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#02A5E6] rounded-full opacity-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

           {/* Grid for Active Tab */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 relative z-10">
            {currentCategory.items.map((item, index) => (
              <div 
                key={item.id}
                className="group relative bg-white rounded-2xl border-none overflow-hidden hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 h-full flex flex-col cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                {/* Image Area */}
                <div className="relative aspect-[2/1] md:aspect-[16/10] overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/95 backdrop-blur-md text-[9px] md:text-[10px] font-bold tracking-wider uppercase text-[#02A5E6] rounded-full shadow-sm ring-1 ring-black/5">
                        {item.category}
                      </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-base md:text-md font-bold text-slate-800 leading-snug mb-3 group-hover:text-[#02A5E6] transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                        Read
                      </span>
                      {/* Interactive Button */}
                      <div className="w-8 h-8 md:w-8 md:h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#02A5E6] group-hover:bg-[#02A5E6] group-hover:text-white transition-all duration-300">
                          <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5 transform group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                  </div>
                </div>
              </div>
            ))}
           </div>
           
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;