
import React, { useState } from 'react';
import { generateSlogan } from '../services/gemini';

const GeminiMagic: React.FC = () => {
  const [product, setProduct] = useState('');
  const [slogans, setSlogans] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!product.trim()) return;
    setLoading(true);
    setError('');
    try {
      const results = await generateSlogan(product);
      setSlogans(results);
    } catch (err) {
      setError('Connection failed. Please ensure you have a valid API setup.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="magic" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-16 border border-white/10 overflow-hidden relative">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <i className="fas fa-sparkles text-accent"></i>
                <span className="text-sm font-bold text-accent uppercase tracking-widest">Astra Magic</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Experience AI Live</h3>
              <p className="text-gray-400 mb-8 text-lg">
                Enter your product name below and watch Astra generate world-class 
                marketing slogans instantly using our Gemini-integrated brain.
              </p>
              
              <div className="space-y-4">
                <div className="relative group">
                  <input 
                    type="text" 
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="e.g. Quantum Coffee, SkyDrive"
                    className="w-full bg-dark/50 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/50 transition-all text-white placeholder:text-gray-600"
                  />
                  <button 
                    onClick={handleGenerate}
                    disabled={loading}
                    className="absolute right-2 top-2 bottom-2 px-6 bg-accent hover:bg-accent/80 disabled:bg-gray-700 text-white font-bold rounded-xl transition-all"
                  >
                    {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Generate'}
                  </button>
                </div>
                {error && <p className="text-red-400 text-sm"><i className="fas fa-info-circle mr-2"></i>{error}</p>}
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="bg-dark/40 border border-white/10 rounded-3xl p-8 min-h-[300px] flex flex-col justify-center items-center text-center">
                {slogans.length > 0 ? (
                  <div className="space-y-6 w-full animate-fade-in">
                    {slogans.map((s, i) => (
                      <div key={i} className="p-4 rounded-xl glass border-l-4 border-l-accent text-lg font-medium italic text-gray-200 hover:scale-[1.02] transition-transform">
                        "{s.replace(/^\d+\.\s*/, '')}"
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-500">
                    <i className="fas fa-wand-magic-sparkles text-6xl mb-6 opacity-20"></i>
                    <p className="text-xl">Your creative output will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiMagic;
