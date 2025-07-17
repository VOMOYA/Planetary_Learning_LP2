import React from 'react';

export const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden bg-slate-900">
      {/* Background Image with Pan Animation */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 animate-background-pan"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')",
        }}
      ></div>
      
      {/* Animated Grid Overlay */}
      <div className="animated-grid opacity-30"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900"></div>
      
      {/* Content */}
      <div className="relative z-10 p-4 flex flex-col items-center w-full">
        <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-widest uppercase font-orbitron bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300 drop-shadow-[0_2px_10px_rgba(74,222,128,0.3)]">
            プラネタリーラーニング
          </h1>
        </div>
        <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-slate-300">
            両極を統合し、違いがお互いのギフトになる学び
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center items-start pt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-subtle-scroll"></div>
        </div>
      </div>
    </div>
  );
};