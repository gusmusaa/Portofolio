import React from 'react';
import { SOCIALS } from '../constants';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <footer id="contact" className="bg-dark border-t border-gray-800 py-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Let's work together</h3>
            <p className="text-gray-400 text-sm">Open for freelance opportunities.</p>
            <a href="mailto:aliefalbayu@gmail.com" className="inline-flex items-center mt-4 text-accent hover:underline">
              <Mail className="w-4 h-4 mr-2" /> aliefalbayu@gmail.com
            </a>
          </div>

          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-accent hover:scale-110 transition-all duration-300"
                aria-label={social.platform}
              >
                {getIcon(social.iconName)}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Alief Dev. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;