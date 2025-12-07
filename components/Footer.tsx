
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView) => {
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-gray-800 bg-gray-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-serif text-white">Motral<span className="text-brand-500">WebStudio</span></h3>
            <p className="text-sm text-gray-400">
              Transforming ideas into digital reality. We build high-performance websites tailored to your business goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-500"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors">Web Development</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors">E-commerce</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors">WordPress</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors">Speed Optimization</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors">Maintenance</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => handleNav('about')} className="hover:text-brand-500 transition-colors">About Us</button></li>
              <li><button onClick={() => handleNav('home')} className="hover:text-brand-500 transition-colors">Portfolio</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-brand-500 transition-colors">Careers</button></li>
              <li>
                <button 
                  onClick={() => handleNav('privacy')} 
                  className="hover:text-brand-500 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-brand-500 transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-500" />
                info@motralwebstudio.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-500" />
                03706487654
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-500" />
                Millat Town D Block Faisalabad, Pakistan
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Motral Web Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
