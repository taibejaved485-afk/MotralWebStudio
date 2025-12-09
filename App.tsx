
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ChatWidget from './components/ChatWidget';
import WhatsAppButton from './components/WhatsAppButton';
import ConnectCTA from './components/ConnectCTA';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  // Handle scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Enhanced navigation handler
  const handleNavigate = (page: PageView) => {
    if (currentPage === page) {
      // If staying on the same page, scroll to top manually
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage(page);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-brand-500 selection:text-white flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* CTA Section on every page except Privacy/Terms to keep it clean, or keep it if desired. keeping it for consistency */}
      <ConnectCTA onNavigate={handleNavigate} />

      <Footer onNavigate={handleNavigate} />
      
      {/* Floating Action Buttons */}
      <WhatsAppButton />
      <ChatWidget />
    </div>
  );
};

export default App;
