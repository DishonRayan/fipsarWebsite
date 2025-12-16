import React from 'react';
import { StoryContent } from './StoryContent';
import { Timeline } from './Timeline';

export const StorySection: React.FC = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-slate-50">
      {/* Abstract Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#02A5E6]/5 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Left Column - Story Content */}
          <div className="relative">
             <div className="lg:sticky lg:top-32">
                <StoryContent />
             </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative w-full max-w-xl lg:max-w-none mx-auto">
             <Timeline />
          </div>

        </div>
      </div>
    </section>
  );
};