import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PORTFOLIO_OWNER, OWNER_ROLE, OWNER_BIO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 mt-12 md:mt-0 text-center md:text-left">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-4 block animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Hello, I am
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {PORTFOLIO_OWNER}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-light animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {OWNER_ROLE}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {OWNER_BIO}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="#certificates" className="px-8 py-3 bg-accent hover:bg-sky-500 text-primary font-bold rounded-full transition-all flex items-center justify-center gap-2">
              View Certificates <ArrowRight className="w-4 h-4" />
            </a>
            <button className="px-8 py-3 border border-gray-600 hover:border-accent text-white hover:text-accent font-medium rounded-full transition-all flex items-center justify-center gap-2">
              Download CV <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
          <div className="relative w-64 h-64 md:w-96 md:h-96">

            <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-600 rounded-full blur-lg opacity-75"></div>
            <img 
              src="/foto-profil.jpg" 
              alt="Profile" 
              className="relative w-full h-full object-cover rounded-full border-4 border-secondary shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;