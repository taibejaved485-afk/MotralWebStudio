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
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => onNavigate('home')}
        >
          <div className="rounded-lg bg-brand-600 p-2">
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
          className="md:hidden p-2 text-gray-400 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium ${
                  currentPage === item.value
                    ? 'bg-gray-900 text-brand-500'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
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
                className={`block w-full text-left rounded-md px-3 py-2 text-base font-medium ${
                    currentPage === 'contact' ? 'text-brand-500' : 'text-brand-400'
                }`}
              >
                Contact Us
              </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;