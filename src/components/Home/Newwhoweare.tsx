
import React from 'react';
import homebg from '../../assets/HomeBg.png'
import {
  Database,
  BarChart3,
  Building2,
  BrainCircuit
} from "lucide-react";



const DataEngineeringIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M12 11h4" />
    <path d="M12 7h4" />
    <path d="M12 15h4" />
    <path d="M8 7v10" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" font-weight="bold" />
  </svg>
);

const IndustryIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
  </svg>
);

const AIMLIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M16 8l-4 4-4-4" />
    <path d="M8 16l4-4 4 4" />
  </svg>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-fipsar/80 backdrop-blur-sm rounded-lg p-5 flex items-center gap-5 shadow-lg border border-white/10 hover:bg-fipsar transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer w-full group">
      <div className="text-white group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
        <p className="text-white/90 text-md font-light">{subtitle}</p>
      </div>
    </div>
  );
};

const Newwhoweare: React.FC = () => {
  const services = [
    {
      icon: <Database  />,
      title: 'Data Engineering',
      subtitle: 'Modernize data platforms'
    },
    {
      icon: <BarChart3 />,
      title: 'Analytics',
      subtitle: 'Unlock the full value of data'
    },
    {
      icon: <Building2 />,
      title: 'Industry Focused',
      subtitle: 'Life sciences & health care'
    },
    {
      icon: <BrainCircuit />,
      title: 'AI / ML Solutions',
      subtitle: 'Automate compliance'
    }
  ];

  return (
    <section 
      className="relative w-full flex items-center py-12 md:py-20"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white">
            
            <div className="mb-10">
              <h2 className="text-5xl md:text-5xl font-bold mb-4 tracking-tight">
                Who We Are
              </h2>
              <div className="w-24 h-1.5 bg-white rounded-full" />
            </div>


            <div className="space-y-6 text-lg lg:text-xl font-medium leading-normal max-w-2xl">
              <p>
                Fipsar is an industry-focused consulting firm specializing in data engineering, analytics and AI/ML solutions for life sciences and healthcare organizations.
              </p>
              <p>
                We help businesses modernize data platforms, automate compliance and unlock the full value of data to drive innovation and improve outcomes.
              </p>
            </div>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-3 w-full max-w-lg lg:ml-auto">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newwhoweare;
