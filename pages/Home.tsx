
import React, { useRef } from 'react';
import { PageView } from '../types';
import { 
  ArrowRight, Code, Zap, Globe, MessageCircle, 
  HandCoins, Clock, Award, Lightbulb, MessagesSquare, Headset,
  ChevronLeft, ChevronRight, ExternalLink
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // Clients data - Switched to text-only for consistency and cleaner look
  const clients = [
    { 
      name: 'Govt. of Punjab', 
      logo: null,
      style: 'font-serif font-bold text-green-800 text-lg text-center leading-tight'
    },
    { 
      name: 'Virgin Printing', 
      logo: null, 
      style: 'font-sans font-black tracking-tighter text-blue-900 text-lg' 
    }, 
    { 
      name: 'SPARTA', 
      logo: null, 
      style: 'font-serif font-bold tracking-widest text-gray-900 text-base' 
    }, 
    { 
      name: 'Belgian Jewels', 
      logo: null, 
      style: 'font-serif italic text-amber-700 text-lg' 
    }, 
    { 
      name: 'Nestlé', 
      logo: null,
      style: 'font-sans font-bold text-gray-600 text-xl tracking-tight' 
    }, 
    { 
      name: 'Univ. of Faisalabad', 
      logo: null, 
      style: 'font-serif font-bold text-green-900 text-base uppercase text-center leading-tight' 
    }, 
    { 
      name: 'SAPPHIRE', 
      logo: null, 
      style: 'font-sans font-bold tracking-[0.3em] text-black text-lg uppercase' 
    }, 
    { 
      name: 'Khaadi', 
      logo: null, 
      style: 'font-mono font-bold tracking-tighter text-orange-800 text-xl' 
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950 px-4 py-12 sm:px-6 lg:px-8 lg:py-0">
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Video Background */}
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute inset-0 bg-gray-950/80 z-10" /> 
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-50"
          >
            {/* Global Network / Earth loop */}
            <source src="https://cdn.pixabay.com/video/2019/04/20/22967-332386926_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl w-full pt-16 lg:pt-0">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-left space-y-6 lg:space-y-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif leading-tight">
                Specializes in <br/>
                <span className="text-brand-500">Web Design</span>, Software, <br/>
                Mobile Apps, <br/>
                Development and <span className="text-brand-500">SEO</span>
              </h1>
              
              <p className="max-w-2xl text-base text-gray-300 sm:text-lg leading-relaxed">
                As a leading Pakistan web design and website development company, we provide the best solutions to our clients which enable them to enhance their market share and help them achieve their goals and objectives in the desired time span.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="rounded-full bg-[#fbbf24] px-8 py-3 text-sm sm:text-base font-bold text-gray-950 transition-all hover:bg-[#f59e0b] hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                >
                  Get Started
                </button>
                <button
                   className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                   aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
                </button>
              </div>
            </div>

            {/* Right Column: Callback Form */}
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-gray-900 lg:max-w-md lg:ml-auto w-full border-t-4 border-[#fbbf24]">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Get a Call back Request</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">All Inquiries are Responded within 24 hours</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 uppercase">Name</label>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 uppercase">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase">Email</label>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase">Subject</label>
                  <select className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500">
                    <option>Requirement</option>
                    <option>Web Design</option>
                    <option>Development</option>
                    <option>SEO</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full rounded-md bg-brand-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-700 uppercase tracking-wide"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
              <div className="shrink-0">
                 <div className="rounded-full border border-gray-600 px-10 py-3 text-xl font-bold text-white tracking-wide">
                    Introduction
                 </div>
              </div>
              <div className="flex-1">
                 <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    Motral Web Studio is a leading Pakistan web design and web development company, helping businesses with elegant websites, apps, branding, online marketing and more. We have developed more than 500 websites for our local clients across all verticals: retail, services, real estate, finance, fashion, media, tourism and more.
                 </p>
                 <button 
                    onClick={() => onNavigate('about')}
                    className="px-8 py-3 border border-brand-500 text-brand-400 font-bold rounded hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors"
                 >
                    About Us
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us Icons Grid */}
      <section className="bg-gray-950 py-20 border-t border-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-serif">Why Choose Motral Web Studio</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
            {[
              { icon: HandCoins, label: 'Cost Efficient' },
              { icon: Clock, label: 'Minimal Timelines' },
              { icon: Award, label: 'Quality Standards' },
              { icon: Lightbulb, label: 'Project Management' },
              { icon: MessagesSquare, label: 'Effective Communication' },
              { icon: Headset, label: 'Lifetime Support' },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group flex flex-col items-center gap-4 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-2 border-gray-800 bg-gray-900/50 transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-900/20 group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]">
                  <item.icon className="h-10 w-10 text-gray-400 transition-colors duration-300 group-hover:text-brand-500 group-hover:scale-110" />
                </div>
                <span className="text-center text-sm font-semibold text-gray-300 group-hover:text-white max-w-[120px]">
                  {item.label.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Company Section with Image */}
      <section className="bg-gray-900 py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div>
                <div className="mb-4 text-brand-500 font-semibold uppercase tracking-wide text-sm">
                - Pakistan Web Development (Faisalabad)
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif mb-6">
                Website Development Company
                </h2>
                
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                    As a top web design and development company in Pakistan, we offer
                    our clients the best solutions to help them increase their market share
                    and accomplish their goals and objectives within the allotted time
                    frame.
                </p>
                <p>
                    Motral Web Studio is a leading web design firm in Pakistan, run by experts in their
                    domains who are constantly working to give our esteemed clients
                    innovative, custom-made solutions via creative problem-solving. Our
                    goal is to offer cutting-edge solutions for the creation of websites.
                </p>
                
                <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-serif">Our Objective</h3>
                    <p>
                    As a forward-thinking web design company in Pakistan, we support
                    hand-coded websites with complete client customization.
                    </p>
                </div>
                </div>
            </div>

            {/* Visual Content (People Working) */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-black aspect-video group">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team working at a desk"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            </div>
        </div>
      </section>

      {/* Mini Services Preview (Our Expertise) */}
      <section className="bg-gray-900 py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">Our Expertise</h2>
            <p className="mt-4 text-gray-400 text-lg">
              We combine technical expertise with creative innovation to deliver exceptional digital experiences.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe, title: 'Web Development', desc: 'Custom tailored websites built with modern technologies like React, Next.js, and Node.js.' },
              { icon: Code, title: 'WordPress Experts', desc: 'Powerful, easy-to-manage CMS solutions with custom themes and plugins.' },
              { icon: Zap, title: 'Speed Optimization', desc: 'Lightning fast load times ensuring 90+ Google PageSpeed scores.' },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-gray-800 bg-gray-950 p-8 transition-all hover:border-brand-500/50 hover:shadow-2xl hover:-translate-y-2">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-900/30 text-brand-500 group-hover:bg-brand-600 group-hover:text-white transition-colors shadow-lg shadow-brand-900/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Featured Projects Section */}
      <section id="portfolio" className="bg-gray-950 py-24 border-t border-gray-800 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-brand-900/10 blur-3xl pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-500 font-semibold uppercase tracking-wide text-sm mb-2">Our Work</h2>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                Featured Projects
              </h2>
              <p className="mt-4 text-gray-400 text-lg">
                Explore our latest work. We build digital solutions that drive growth and efficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* MT Store Project Card */}
            <a 
              href="https://mtstore.infinityfree.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 transition-all hover:border-brand-500/50 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Abstract visualization since no screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-brand-500 rounded-2xl rotate-12 mb-4 shadow-lg flex items-center justify-center transition-transform group-hover:rotate-0">
                            <span className="text-2xl font-bold text-white -rotate-12 group-hover:rotate-0 transition-transform">M</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white/20 uppercase tracking-widest group-hover:text-white/40 transition-colors">MT Store</h3>
                    </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 text-white font-bold bg-white/10 px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-brand-900">
                    Visit Website <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">MT Store</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    A fully functional e-commerce platform built for performance and sales.
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-md bg-brand-950/50 px-2 py-1 text-xs font-medium text-brand-400 ring-1 ring-inset ring-brand-500/20">E-Commerce</span>
                  <span className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-300 ring-1 ring-inset ring-gray-700/20">Web Design</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Our Happy Clients Slider Section */}
      <section className="bg-white py-12 text-gray-900 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#003366] font-serif">Our Happy Clients</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-brand-500 rounded-full"></div>
        </div>
        
        {/* Infinite Scroll Marquee Container */}
        <div className="relative w-full overflow-hidden group">
          {/* Gradient Masks */}
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          
          <div className="flex w-max animate-scroll gap-6 py-4">
             {/* Map clients twice for seamless loop */}
             {[...clients, ...clients].map((client, idx) => (
               <div 
                 key={idx} 
                 className="shrink-0 w-[200px] h-[80px] rounded-lg border border-gray-100 bg-white shadow-sm flex items-center justify-center p-4 hover:shadow-md hover:border-gray-200 transition-all duration-300"
               >
                 <span className={`text-center transition-colors duration-300 ${client.style || 'font-bold text-[#003366] text-lg'}`}>
                   {client.name}
                 </span>
               </div>
             ))}
          </div>
        </div>
        
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .group:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>
      </section>
      
      {/* Tech Stack Banner */}
      <section className="border-y border-gray-800 bg-gray-950 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-brand-500">Powering brands with modern tech</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                <span className="text-3xl font-bold text-gray-300 font-sans tracking-tight">WordPress</span>
                <span className="text-3xl font-bold text-gray-300 font-sans italic">Shopify</span>
                <span className="text-3xl font-bold text-gray-300 font-mono text-[#61DAFB]">React</span>
                <span className="text-3xl font-bold text-gray-300 font-sans tracking-wide">Next.js</span>
                <span className="text-3xl font-bold text-gray-300 font-sans font-light text-[#38BDF8]">Tailwind</span>
                <span className="text-3xl font-bold text-gray-300 font-serif">WooCommerce</span>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
