import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-primary scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">Recognition of my professional development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div key={cert.id} className="group bg-secondary/30 rounded-2xl overflow-hidden hover:bg-secondary/50 transition-all duration-300 border border-gray-800 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-primary/80 backdrop-blur px-3 py-1 rounded-full border border-gray-700">
                  <span className="text-xs font-bold text-accent">{cert.issuer}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.date}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-[10px] rounded uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>

                <a 
                  href={cert.credentialUrl} 
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-white transition-colors"
                >
                  Verify Credential <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;