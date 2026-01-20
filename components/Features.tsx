
import React from 'react';

const features = [
  {
    icon: 'fa-brain',
    title: 'Neural Reasoning',
    desc: 'Advanced problem-solving capabilities that mirror human cognitive patterns.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'fa-code',
    title: 'Smart Generation',
    desc: 'Generate production-ready code in seconds with deep context awareness.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Enterprise Security',
    desc: 'Bank-grade encryption and privacy controls to keep your data protected.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: 'fa-layer-group',
    title: 'Multi-Modal Context',
    desc: 'Switch seamlessly between text, code, audio, and visual inputs.',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: 'fa-gauge-high',
    title: 'Ultra Low Latency',
    desc: 'Get responses in real-time with our high-speed global inference network.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: 'fa-comments',
    title: 'Human-like Chat',
    desc: 'Conversations that feel natural, nuanced, and actually helpful.',
    color: 'from-indigo-500 to-blue-500'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Designed for the Future</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to build the next generation of digital products, 
            powered by our proprietary large language models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-8 rounded-2xl glass hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-primary/50 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}></div>
              
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-6 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${f.icon} text-2xl text-white`}></i>
              </div>
              
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{f.title}</h4>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
