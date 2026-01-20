
import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isYearly ? '0' : '0',
      desc: 'Perfect for exploring the basics of AI.',
      features: ['1,000 requests / mo', 'Standard models', 'Community support', '7-day history'],
      highlight: false
    },
    {
      name: 'Pro',
      price: isYearly ? '24' : '29',
      desc: 'The best value for individual creators.',
      features: ['Unlimited requests', 'Astra 2.0 Engine', 'Priority support', 'Unlimited history', 'Custom themes'],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: isYearly ? '89' : '99',
      desc: 'Advanced controls for professional teams.',
      features: ['Custom fine-tuning', 'SLA guarantees', 'Dedicated account manager', 'SSO & Security logs', 'On-premise option'],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">Pricing Plans</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Scale with Confidence</h3>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 bg-gray-700 rounded-full relative p-1 transition-colors hover:bg-gray-600"
            >
              <div className={`w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-500'}`}>Yearly <span className="text-secondary text-xs font-bold bg-secondary/10 px-2 py-0.5 rounded-full ml-1">-20%</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={`p-8 rounded-3xl glass transition-all hover:-translate-y-2 relative overflow-hidden ${p.highlight ? 'border-primary ring-1 ring-primary shadow-2xl shadow-primary/10' : 'border-white/10'}`}>
              {p.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase py-1 px-4 rounded-bl-xl tracking-tighter">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-xl font-bold mb-2">{p.name}</h4>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-display font-bold">${p.price}</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">{p.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-3 text-sm text-gray-300">
                    <i className="fas fa-check text-secondary text-xs"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${p.highlight ? 'bg-primary hover:bg-primary/80 shadow-lg shadow-primary/20' : 'glass hover:bg-white/10 border border-white/20'}`}>
                Choose {p.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
