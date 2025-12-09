import React from 'react';
import { Service } from '../types';
import { 
  ShoppingCart, LayoutTemplate, Code2, Wrench, Zap, CheckCircle2, 
  Search, PenTool, MonitorPlay, Rocket 
} from 'lucide-react';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Solutions',
      description: 'Build your digital storefront with robust, scalable shopping experiences. We specialize in Shopify, WooCommerce, and custom checkout flows to maximize conversion.',
      icon: 'ShoppingCart',
      features: ['Shopify & WooCommerce', 'Payment Gateway Integration', 'Inventory Management Systems', 'Conversion Rate Optimization']
    },
    {
      id: 'wordpress',
      title: 'WordPress Development',
      description: 'Flexible, manageable, and powerful websites using the world\'s most popular CMS. We build custom themes and plugins tailored to your specific needs.',
      icon: 'LayoutTemplate',
      features: ['Custom Theme Development', 'Plugin Development', 'Headless WordPress', 'Elementor/Divi Experts']
    },
    {
      id: 'webdev',
      title: 'Custom Web Development',
      description: 'For unique requirements that go beyond templates. We engineer bespoke web applications using React, Next.js, and Node.js for superior performance.',
      icon: 'Code2',
      features: ['Single Page Applications (SPA)', 'SaaS Products', 'API Integration', 'Progressive Web Apps (PWA)']
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      description: 'Keep your site secure, updated, and running smoothly. Our maintenance packages ensure you never have to worry about downtime or security breaches.',
      icon: 'Wrench',
      features: ['Daily Backups', 'Security Monitoring', 'Plugin Updates', '24/7 Uptime Monitoring']
    },
    {
      id: 'speed',
      title: 'Speed Optimization',
      description: 'Slow sites lose customers. We analyze and optimize your code, images, and server response times to achieve green scores on Core Web Vitals.',
      icon: 'Zap',
      features: ['Core Web Vitals Improvement', 'Image Compression', 'Caching Strategies', 'Code Minification']
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingCart': return <ShoppingCart className="h-8 w-8" />;
      case 'LayoutTemplate': return <LayoutTemplate className="h-8 w-8" />;
      case 'Code2': return <Code2 className="h-8 w-8" />;
      case 'Wrench': return <Wrench className="h-8 w-8" />;
      case 'Zap': return <Zap className="h-8 w-8" />;
      default: return <Code2 className="h-8 w-8" />;
    }
  };

  const processSteps = [
    {
      id: 1,
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business goals, target audience, and market landscape to build a solid roadmap.',
      icon: Search
    },
    {
      id: 2,
      title: 'Design & Prototyping',
      description: 'Our designers create intuitive, high-fidelity prototypes that visualize the user journey before coding begins.',
      icon: PenTool
    },
    {
      id: 3,
      title: 'Development',
      description: 'We code using clean, modern standards, ensuring your site is fast, secure, and scalable across all devices.',
      icon: MonitorPlay
    },
    {
      id: 4,
      title: 'Launch & Grow',
      description: 'After rigorous testing, we launch your site and provide ongoing support to help your business scale.',
      icon: Rocket
    }
  ];

  return (
    <div className="bg-background w-full overflow-x-hidden">
      {/* Hero Section (Secondary Tone) */}
      <div className="relative isolate overflow-hidden bg-secondary py-20 sm:py-32 lg:pb-40">
        <div className="absolute inset-0 -z-10">
           <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary"></div>
           <img 
             src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
             alt="Team working on code" 
             className="h-full w-full object-cover opacity-10"
           />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-6xl font-serif">
            Expert <span className="text-primary">Digital Services</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            From inception to optimization, Motral Web Studio covers every aspect of your digital journey with precision, creativity, and technical expertise.
          </p>
        </div>
      </div>

      {/* Main Services Grid (Light Tone) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div 
                key={service.id} 
                className="group flex flex-col rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-gray-200 transition-all hover:ring-primary hover:shadow-[0_0_30px_rgba(13,110,253,0.15)] hover:-translate-y-2 shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-secondary mb-3 font-serif">
                {service.title}
              </h3>
              <p className="mb-6 flex-auto text-base leading-relaxed text-gray-600">
                {service.description}
              </p>
              <div className="mt-auto border-t border-gray-100 pt-6">
                 <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">What's Included</h4>
                 <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 group-hover:text-secondary">
                             <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                             {feature}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          ))}
          
          {/* Custom Card for Call to Action */}
          <div className="flex flex-col justify-center items-center rounded-3xl bg-gradient-to-br from-secondary to-brand-900 p-6 sm:p-8 text-center shadow-xl">
             <h3 className="text-2xl font-bold text-white mb-4 font-serif">Need something specific?</h3>
             <p className="text-gray-300 mb-8">We build custom solutions for unique business challenges.</p>
             <button 
                onClick={() => document.getElementById('footer-contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-white px-8 py-3 text-sm font-bold text-secondary hover:bg-gray-100 transition-colors w-full sm:w-auto"
             >
                Contact Support
             </button>
          </div>
        </div>
      </div>

      {/* Process Section (White Tone) */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-primary">How We Work</h2>
              <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-secondary md:text-4xl font-serif">
                Our Development Process
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10 transform translate-y-1/2"></div>
               
               {processSteps.map((step, idx) => (
                 <div key={step.id} className="relative flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-background mb-6 relative z-10 transition-transform hover:scale-110 hover:border-primary shadow-lg">
                       <step.icon className="h-10 w-10 text-gray-400" />
                       <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                         {step.id}
                       </div>
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Tech Stack Ticker (Secondary Tone) */}
      <section className="bg-secondary py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-10">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Technologies We Master</p>
        </div>
        <div className="flex justify-center gap-4 sm:gap-8 flex-wrap opacity-70 px-4">
             {['React', 'Next.js', 'Node.js', 'TypeScript', 'WordPress', 'Shopify', 'TailwindCSS', 'Firebase', 'PostgreSQL', 'AWS'].map((tech) => (
                <span key={tech} className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-700 bg-brand-950 text-gray-300 font-mono text-xs sm:text-sm hover:border-primary hover:text-white transition-colors cursor-default whitespace-nowrap">
                    {tech}
                </span>
             ))}
        </div>
      </section>
    </div>
  );
};

export default Services;