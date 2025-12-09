import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { PageView } from '../types';
import { 
  Code, Zap, Globe, MessageCircle, 
  HandCoins, Clock, Award, Lightbulb, MessagesSquare, Headset,
  ExternalLink, Loader2, CheckCircle, Check
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageView) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // --- EmailJS Configuration ---
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; 
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Requirement'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      subject: formData.subject,
      to_name: 'Motral Web Studio Admin',
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', subject: 'Requirement' }); 
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };

  const clients = [
    { name: 'Govt. of Punjab', style: 'font-serif font-bold text-green-800' },
    { name: 'Virgin Printing', style: 'font-sans font-black tracking-tighter text-secondary' }, 
    { name: 'SPARTA', style: 'font-serif font-bold tracking-widest text-gray-900' }, 
    { name: 'Belgian Jewels', style: 'font-serif italic text-amber-700' }, 
    { name: 'Nestlé', style: 'font-sans font-bold text-gray-600' }, 
    { name: 'Univ. of Faisalabad', style: 'font-serif font-bold text-green-900' }, 
    { name: 'SAPPHIRE', style: 'font-sans font-bold tracking-[0.3em] text-black' }, 
    { name: 'Khaadi', style: 'font-mono font-bold tracking-tighter text-orange-800' },
  ];

  const [isWhyChooseUsVisible, setIsWhyChooseUsVisible] = useState(false);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsWhyChooseUsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (whyChooseUsRef.current) {
      observer.observe(whyChooseUsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section (Secondary Tone - Deep Navy) */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-0">
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob will-change-transform"></div>
          <div 
            className="absolute top-[20%] right-[-10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob will-change-transform" 
            style={{ animationDelay: '2s' }}
          ></div>
          <div 
            className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob will-change-transform" 
            style={{ animationDelay: '4s' }}
          ></div>
        </div>

        {/* Video Background - Subtle Overlay */}
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute inset-0 bg-secondary/90 z-10" /> 
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover opacity-30"
          >
            <source src="https://cdn.pixabay.com/video/2019/04/20/22967-332386926_large.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl w-full pt-8 lg:pt-0">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-left space-y-6 lg:space-y-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-serif leading-tight break-words">
                Specializes in <br className="hidden sm:block"/>
                <span className="text-primary">Web Design</span>, Software, <br className="hidden sm:block"/>
                Mobile Apps, <br className="hidden sm:block"/>
                Development and <span className="text-accent">SEO</span>
              </h1>
              
              <p className="max-w-2xl text-base text-gray-300 sm:text-lg leading-relaxed">
                As a leading Pakistan web design and website development company, we provide the best solutions to our clients which enable them to enhance their market share and help them achieve their goals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto rounded-full bg-primary px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-brand-600 hover:shadow-[0_0_20px_rgba(13,110,253,0.4)]"
                >
                  Get Started
                </button>
                <button
                   onClick={() => onNavigate('contact')}
                   className="w-full sm:w-auto flex h-12 items-center justify-center gap-2 rounded-full bg-accent/10 px-6 text-accent border border-accent/50 transition-transform hover:bg-accent hover:text-secondary"
                   aria-label="Contact Us"
                >
                  <MessageCircle className="h-5 w-5 fill-current" />
                  <span className="sm:hidden font-bold">Contact Us</span>
                </button>
              </div>
            </div>

            {/* Right Column: Callback Form */}
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 text-secondary lg:max-w-md lg:ml-auto w-full border-t-4 border-primary">
              <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-1">Get a Call back Request</h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">All Inquiries are Responded within 24 hours</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 uppercase">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name" 
                      required
                      className="w-full rounded-md border border-gray-300 bg-background px-3 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-secondary"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 uppercase">Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone" 
                      required
                      className="w-full rounded-md border border-gray-300 bg-background px-3 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-secondary"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email" 
                    required
                    className="w-full rounded-md border border-gray-300 bg-background px-3 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-secondary"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 uppercase">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-gray-300 bg-background px-3 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary text-secondary appearance-none"
                  >
                    <option value="Requirement">Requirement</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Development">Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-md bg-secondary px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-800 uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-green-600 font-bold bg-green-50 p-2 rounded">
                      <CheckCircle className="h-4 w-4" /> Request Sent Successfully!
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mt-3 text-center text-sm text-red-600 font-bold bg-red-50 p-2 rounded">
                      Failed to send. Check configuration.
                    </div>
                  )}
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction Section (Background Tone - Light Gray) */}
      <section className="bg-background py-16 sm:py-20 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
              <div className="shrink-0 w-full md:w-auto">
                 <div className="rounded-full border-2 border-primary px-8 py-3 text-lg sm:text-xl font-bold text-primary tracking-wide bg-white shadow-lg text-center md:text-left">
                    Introduction
                 </div>
              </div>
              <div className="flex-1">
                 <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 text-justify sm:text-left">
                    Motral Web Studio is a leading Pakistan web design and web development company, helping businesses with elegant websites, apps, branding, online marketing and more. We have developed more than 500 websites for our local clients across all verticals: retail, services, real estate, finance, fashion, media, tourism and more.
                 </p>
                 <button 
                    onClick={() => onNavigate('about')}
                    className="w-full sm:w-auto px-8 py-3 border-2 border-secondary text-secondary font-bold rounded hover:bg-secondary hover:text-white transition-colors"
                 >
                    About Us
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us (White Tone) */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary font-serif">Why Choose Motral Web Studio</h2>
          </div>
          
          <div 
            ref={whyChooseUsRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center"
          >
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
                className={`group flex flex-col items-center gap-4 transition-all duration-700 ease-out hover:-translate-y-2 ${
                  isWhyChooseUsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`relative flex h-20 w-20 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-background bg-background transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                    isWhyChooseUsVisible ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'
                  } group-hover:border-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_30px_rgba(13,110,253,0.15)]`}
                >
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-500 transition-colors duration-300 group-hover:text-primary group-hover:scale-110" />
                </div>
                <span className="text-center text-sm font-semibold text-gray-600 group-hover:text-secondary max-w-[120px]">
                  {item.label.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Company Section (Secondary Tone - Deep Navy) */}
      <section className="bg-secondary py-16 sm:py-24 relative overflow-hidden">
        {/* Abstract Deco */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-bl-full pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div>
                <div className="mb-4 text-accent font-semibold uppercase tracking-wide text-sm flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent"></span> Pakistan Web Development
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif mb-6 leading-tight">
                Website Development Company
                </h2>
                
                <div className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
                <p>
                    As a top web design and development company in Pakistan, we offer
                    our clients the best solutions to help them increase their market share
                    and accomplish their goals and objectives within the allotted time
                    frame.
                </p>
                
                <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-serif flex items-center gap-2">
                        <span className="text-primary">●</span> Our Objective
                    </h3>
                    <p>
                    As a forward-thinking web design company in Pakistan, we support
                    hand-coded websites with complete client customization.
                    </p>
                </div>
                </div>
            </div>

            {/* Visual Content (People Working) */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-video group">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="Team working at a desk"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            </div>
        </div>
      </section>

      {/* Mini Services Preview (Background Tone - Light Gray) */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-serif">Our Expertise</h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              We combine technical expertise with creative innovation to deliver exceptional digital experiences.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Globe, title: 'Web Development', desc: 'Custom tailored websites built with modern technologies like React, Next.js, and Node.js.' },
              { icon: Code, title: 'WordPress Experts', desc: 'Powerful, easy-to-manage CMS solutions with custom themes and plugins.' },
              { icon: Zap, title: 'Speed Optimization', desc: 'Lightning fast load times ensuring 90+ Google PageSpeed scores.' },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-2">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-secondary">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section (New) - Dark Navy Background for Contrast */}
      <section className="bg-secondary py-16 sm:py-24 relative overflow-hidden">
         {/* Decorative elements */}
         <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
         
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-primary font-bold uppercase tracking-wide text-sm mb-2">Our Packages</h2>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
                Transparent Pricing
              </h2>
              <p className="mt-4 text-gray-300 text-base sm:text-lg">
                Choose the perfect plan to kickstart your digital journey. No hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <div className="rounded-2xl bg-white p-8 border border-gray-200 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-secondary mb-2">Basic</h3>
                <p className="text-gray-500 text-sm mb-6">Perfect for personal portfolios or landing pages.</p>
                <div className="text-4xl font-bold text-secondary mb-6">Rs. 8,000</div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    1 Page Website
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    WhatsApp Chat Integration
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    Mobile Responsive
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    Basic SEO Setup
                  </li>
                </ul>
                <button onClick={() => onNavigate('contact')} className="w-full py-3 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-colors">Choose Basic</button>
              </div>

              {/* Standard Plan */}
              <div className="rounded-2xl bg-white p-8 border-2 border-primary relative flex flex-col transform md:-translate-y-4 shadow-2xl">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">Most Popular</div>
                <h3 className="text-xl font-bold text-secondary mb-2">Standard</h3>
                <p className="text-gray-500 text-sm mb-6">Great for small businesses and startups.</p>
                <div className="text-4xl font-bold text-primary mb-6">Rs. 18,000</div>
                <ul className="space-y-4 mb-8 flex-1">
                   <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    4–6 Pages Website
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    Contact Forms & Maps
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    Social Media Integration
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    CMS (Admin Panel)
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    Mobile Responsive
                  </li>
                </ul>
                <button onClick={() => onNavigate('contact')} className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-brand-600 transition-colors shadow-lg">Choose Standard</button>
              </div>

              {/* Premium Plan */}
              <div className="rounded-2xl bg-white p-8 border border-gray-200 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold text-secondary mb-2">Premium</h3>
                <p className="text-gray-500 text-sm mb-6">For businesses needing full e-commerce capability.</p>
                <div className="text-4xl font-bold text-secondary mb-6">Rs. 35,000</div>
                <ul className="space-y-4 mb-8 flex-1">
                   <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    10+ Pages / Products
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    Full E-commerce Functionality
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    Payment Gateway Setup
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    Advanced SEO & Speed Opt.
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    Priority Support
                  </li>
                </ul>
                <button onClick={() => onNavigate('contact')} className="w-full py-3 rounded-lg border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition-colors">Choose Premium</button>
              </div>
            </div>
         </div>
      </section>

      {/* Portfolio / Featured Projects Section (White Tone) */}
      <section id="portfolio" className="bg-white py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl text-center md:text-left w-full md:w-auto">
              <h2 className="text-primary font-bold uppercase tracking-wide text-sm mb-2">Our Work</h2>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-serif">
                Featured Projects
              </h2>
            </div>
            <button 
                onClick={() => onNavigate('contact')}
                className="hidden md:flex text-secondary font-bold hover:text-primary transition-colors items-center gap-2"
            >
                Start a Project <ExternalLink className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards - Updated for Light Theme */}
            {[
                { url: "https://mtstore.infinityfree.me", name: "MT Store", type: "E-Commerce", color: "bg-primary", letter: "M" },
                { url: "https://taibemart.infinityfreeapp.com/?i=1", name: "Taibe Mart", type: "E-Commerce", color: "bg-secondary", letter: "T" },
                { url: "https://freecvmaker-motral.vercel.app/", name: "CV Maker", type: "Web Tool", color: "bg-accent", letter: "CV" }
            ].map((project, idx) => (
                <a 
                key={idx}
                href={project.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl bg-background border border-gray-100 transition-all hover:border-primary/30 hover:shadow-xl hover:-translate-y-2"
                >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                    <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${project.color}`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className={`w-16 h-16 mx-auto ${project.color} rounded-2xl rotate-12 mb-4 shadow-lg flex items-center justify-center transition-transform group-hover:rotate-0`}>
                                <span className="text-xl font-bold text-white -rotate-12 group-hover:rotate-0 transition-transform">{project.letter}</span>
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors">{project.name}</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 flex-1 flex flex-col bg-white">
                    <div className="mb-4">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-md bg-background px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">{project.type}</span>
                    </div>
                </div>
                </a>
            ))}
          </div>
          
          {/* Mobile Only View All Button */}
          <div className="mt-8 text-center md:hidden">
            <button 
                onClick={() => onNavigate('contact')}
                className="inline-flex text-secondary font-bold hover:text-primary transition-colors items-center gap-2"
            >
                Start a Project <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Our Happy Clients Slider Section (Background Tone) */}
      <section className="bg-background py-16 text-secondary overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-secondary font-serif">Our Happy Clients</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-primary rounded-full"></div>
        </div>
        
        <div className="relative w-full overflow-hidden group">
          <div className="absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          
          <div className="flex w-max animate-scroll gap-4 sm:gap-6 py-4">
             {[...clients, ...clients].map((client, idx) => (
               <div 
                 key={idx} 
                 className="shrink-0 w-[160px] sm:w-[200px] h-[70px] sm:h-[80px] rounded-lg border border-gray-200 bg-white shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-all duration-300"
               >
                 <span className={`text-center text-sm sm:text-base transition-colors duration-300 ${client.style}`}>
                   {client.name}
                 </span>
               </div>
             ))}
          </div>
        </div>
      </section>
      
      {/* Tech Stack Banner (Secondary Tone) */}
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="mb-8 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent">Powering brands with modern tech</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                {['WordPress', 'Shopify', 'React', 'Next.js', 'Tailwind', 'WooCommerce'].map(tech => (
                    <span key={tech} className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 font-sans tracking-tight">{tech}</span>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;