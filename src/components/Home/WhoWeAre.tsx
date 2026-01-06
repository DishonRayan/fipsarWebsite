import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { 
  Database, 
  BrainCircuit, 
  LineChart, 
  Activity, 
  Sparkles 
} from 'lucide-react';

// --- Constants & Types ---

// const BRAND_COLOR = "#02A5E6";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

// Content derived strictly from the prompt
const services: ServiceItem[] = [
  {
    id: 'data-eng',
    title: 'Data Engineering',
    description: 'Modernize data platforms',
    icon: Database,
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Unlock the full value of data',
    icon: LineChart,
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Solutions',
    description: 'Automate compliance',
    icon: BrainCircuit,
  },
];

// --- Internal Sub-Components ---

const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, #FFFFFF 0%, transparent 70%)` }}
      />
      <div 
        className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-white"
      />
      <svg className="absolute inset-0 w-full h-full opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    </div>
  );
};

const FeatureCard: React.FC<{ item: ServiceItem; index: number }> = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex items-center gap-4"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#02A5E6] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
      
      <div className="relative z-10 p-2.5 rounded-lg bg-slate-50 text-[#02A5E6] group-hover:scale-110 transition-transform duration-300">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      
      <div className="relative z-10">
        <h3 className="font-bold text-slate-900 group-hover:text-[#02A5E6] transition-colors duration-200 text-sm sm:text-base">
          {item.title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const AnimatedStrand: React.FC = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block pointer-events-none">
       <svg viewBox="0 0 100 400" className="h-full w-full" preserveAspectRatio="none">
          <motion.path
            d="M 50 0 Q 80 100 50 200 T 50 400"
            fill="none"
            stroke="white"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
       </svg>
    </div>
  );
};

const WhoWeAre: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="relative w-full py-12 lg:py-16 overflow-hidden bg-[#02A5E6]">
      <BackgroundGrid />
      <AnimatedStrand />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-4">
              <Sparkles size={12} />
              <span>About Fipsar</span>
            </motion.div>
            
            <motion.h2 
              variants={textVariants}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Who We Are
            </motion.h2>

      
            
            <motion.div variants={textVariants} className="h-1 w-16 bg-white my-6 rounded-full" />
            
                  <motion.p 
              variants={textVariants}
              className="text-base lg:text-lg text-blue-50 leading-relaxed font-light"
            >
              Fipsar is an industry-focused consulting firm specializing in <span className="font-medium text-white">data engineering, analytics, and AI/ML solutions</span> for life sciences and healthcare organizations. 
            </motion.p>
            <br/>
            <motion.p 
              variants={textVariants}
              className="text-base lg:text-lg text-blue-50 leading-relaxed"
            >
              We help businesses modernize data platforms, automate compliance, and unlock the full value of data to drive innovation and improve outcomes.
            </motion.p>


            
          </motion.div>

      
          {/* Visual/Cards Side */}
          <div className="relative">
             <motion.div 
               style={{ y }} 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-white to-transparent opacity-20 blur-3xl rounded-full" 
             />

             <div className="relative z-10 flex flex-col gap-4">
                {services.map((service, idx) => (
                    <FeatureCard key={service.id} item={service} index={idx} />
                ))}
                
                {/* Decorative Element derived from theme - Now Styled Consistently */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-2 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4"
                >
                    <div className="p-2.5 rounded-lg bg-slate-50 text-[#02A5E6]">
                       <Activity size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="font-bold text-slate-900 text-base">Industry Focused</div>
                        <div className="text-slate-500 text-xs sm:text-sm">Life Sciences & Healthcare</div>
                    </div>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;