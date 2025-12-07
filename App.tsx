
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ChatWidget from './components/ChatWidget';
import ConnectCTA from './components/ConnectCTA';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-brand-500 selection:text-white flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* CTA Section on every page except Privacy Policy to keep it clean, or keep it if desired. keeping it for consistency */}
      <ConnectCTA onNavigate={setCurrentPage} />

      <Footer onNavigate={setCurrentPage} />
      <ChatWidget />
    </div>
  );
};

export default App;
