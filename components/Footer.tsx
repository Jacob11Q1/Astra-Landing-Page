
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 bg-dark/80 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-bolt text-white"></i>
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">ASTRA<span className="text-primary">AI</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the next stage of human-AI collaboration. 
              Build, create, and innovate with the power of Astra.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Platform</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Models</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Company</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-white uppercase text-xs tracking-widest">Stay Updated</h5>
            <p className="text-sm text-gray-400 mb-4">Get the latest news and features delivered to your inbox.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-primary/50 flex-1"
              />
              <button className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-all">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-500 text-xs">
          <p>© 2024 Astra AI Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
