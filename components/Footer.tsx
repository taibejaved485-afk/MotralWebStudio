
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageView, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
      if (sectionId) {
        // Allow short delay for page mount if changing pages
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const whatsappUrl = "https://wa.me/923706487654";

  return (
    <footer className="border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          
          {/* Brand Column */}
          <div className="space-y-6 border-b border-gray-800 pb-10 md:border-b-0 md:pb-0">
            <h3 className="text-2xl font-bold font-serif text-white">
              Motral<span className="text-brand-500">WebStudio</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 pr-4">
              Transforming ideas into digital reality. We build high-performance websites tailored to your business goals with precision and creativity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-brand-600 hover:text-white hover:shadow-lg hover:-translate-y-1">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-brand-600 hover:text-white hover:shadow-lg hover:-translate-y-1">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-all hover:bg-brand-600 hover:text-white hover:shadow-lg hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-10 border-b border-gray-800 pb-10 md:border-b-0 md:pb-0">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-12 after:bg-brand-500">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block">Web Development</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block">E-commerce Solutions</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block">WordPress Expertise</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block">Speed Optimization</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block">Maintenance Plans</button></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-10 border-b border-gray-800 pb-10 md:border-b-0 md:pb-0">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-12 after:bg-brand-500">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><button onClick={() => handleNav('about')} className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block">About Us</button></li>
              <li>
                <button 
                  onClick={() => handleNav('home', 'portfolio')} 
                  className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block"
                >
                  Portfolio
                </button>
              </li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block">Careers</button></li>
              <li>
                <button 
                  onClick={() => handleNav('privacy')} 
                  className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                  <button 
                    onClick={() => handleNav('terms')} 
                    className="hover:text-brand-500 transition-colors hover:translate-x-1 duration-200 block"
                  >
                    Terms of Service
                  </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-10">
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-12 after:bg-brand-500">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-brand-500 transition-colors group-hover:bg-brand-900/50">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="mt-1.5 group-hover:text-white transition-colors break-all">info@motralwebstudio.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-brand-500 transition-colors group-hover:bg-brand-900/50">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="mt-1.5 group-hover:text-white transition-colors">03706487654</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-brand-500 transition-colors group-hover:bg-brand-900/50">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="mt-1.5 leading-relaxed group-hover:text-white transition-colors">Millat Town D Block Faisalabad, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Motral Web Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <button onClick={() => handleNav('privacy')} className="hover:text-brand-500 transition-colors">Privacy</button>
              <button onClick={() => handleNav('terms')} className="hover:text-brand-500 transition-colors">Terms</button>
              <button onClick={() => handleNav('contact')} className="hover:text-brand-500 transition-colors">Support</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
