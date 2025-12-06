import React from 'react';
import { PageView } from '../types';

interface ConnectCTAProps {
  onNavigate: (page: PageView) => void;
}

const ConnectCTA: React.FC<ConnectCTAProps> = ({ onNavigate }) => {
  return (
    <section className="bg-[#e0f7fa] py-16 text-center">
      <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center">
        <h2 className="mb-8 text-2xl font-bold text-[#003366] md:text-3xl font-serif">
          Meet our creative and expert team to assist you.
        </h2>
        <button
          onClick={() => {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="rounded-full bg-[#0ea5e9] px-10 py-3.5 text-base font-bold text-white transition-all hover:bg-[#0284c7] hover:shadow-lg shadow-md uppercase tracking-wide"
        >
          Let's Connect
        </button>
      </div>
    </section>
  );
};

export default ConnectCTA;