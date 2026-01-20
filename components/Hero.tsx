
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
          <span className="text-sm font-medium text-secondary tracking-wide uppercase">New: Astra 2.0 Engine is here</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-extrabold leading-tight mb-8">
          <span className="block">Transform Your Ideas</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent glow-text">
            With Pure Intelligence
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          The ultimate AI platform for creators, engineers, and dreamers. 
          Generate, automate, and iterate 10x faster with our next-gen neural interface.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-primary to-indigo-700 text-white rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all transform hover:-translate-y-1">
            Start Free Trial
          </button>
          <button className="w-full sm:w-auto px-10 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/20">
            <i className="fas fa-play mr-2 text-sm"></i> Watch Demo
          </button>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass rounded-2xl p-2 overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/id/48/1200/600" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Floating UI Elements */}
            <div className="absolute top-10 right-10 bg-dark/80 backdrop-blur-md p-4 rounded-xl border border-white/10 animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <i className="fas fa-check text-xs"></i>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-medium">Model Status</p>
                  <p className="text-sm font-bold">Optimized for Production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
