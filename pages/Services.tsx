import React from 'react';
import { Service } from '../types';
import { ShoppingCart, LayoutTemplate, Code2, Wrench, Zap, CheckCircle2 } from 'lucide-react';

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

  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-500">What We Do</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif">
            Premium Services for<br />Modern Businesses
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            From inception to optimization, Motral Web Studio covers every aspect of your digital journey with precision and technical expertise.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div 
                key={service.id} 
                className="flex flex-col rounded-3xl bg-gray-900 p-8 ring-1 ring-gray-800 transition-all hover:bg-gray-800 hover:ring-brand-500/50 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-950 text-brand-500 ring-1 ring-brand-500/30">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                {service.title}
              </h3>
              <p className="mb-6 flex-auto text-base leading-7 text-gray-400">
                {service.description}
              </p>
              <div className="mt-auto border-t border-gray-700/50 pt-6">
                 <h4 className="text-sm font-semibold text-gray-200 mb-3">Includes:</h4>
                 <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                             <CheckCircle2 className="h-5 w-5 text-brand-500 shrink-0" />
                             {feature}
                        </li>
                    ))}
                 </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
