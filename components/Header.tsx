
import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: PageView }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Services', value: 'services' },
    { label: 'About Us', value: 'about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <div className="rounded-lg bg-brand-600 p-2 transition-transform group-hover:scale-105">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-serif">
            Motral<span className="text-brand-500">WebStudio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`text-sm font-medium transition-colors hover:text-brand-400 ${
                currentPage === item.value ? 'text-brand-500' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                currentPage === 'contact' 
                ? 'bg-brand-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)]' 
                : 'bg-brand-600 text-white hover:bg-brand-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]'
            }`}
            onClick={() => onNavigate('contact')}
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav - Animated */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100 border-t border-gray-800' : 'max-h-0 opacity-0'
        } bg-gray-950`}
      >
        <div className="space-y-2 px-4 py-6">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left rounded-lg px-4 py-3 text-base font-medium transition-all ${
                currentPage === item.value
                  ? 'bg-brand-900/20 text-brand-500 pl-6' // Indent active item slightly
                  : 'text-gray-300 hover:bg-gray-900 hover:text-white hover:pl-6'
              }`}
            >
              {item.label}
            </button>
          ))}
           <button 
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left rounded-lg px-4 py-3 text-base font-medium transition-all mt-4 ${
                  currentPage === 'contact' 
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-900/20' 
                    : 'bg-brand-600/10 text-brand-400 hover:bg-brand-600 hover:text-white'
              }`}
            >
              Contact Us
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
