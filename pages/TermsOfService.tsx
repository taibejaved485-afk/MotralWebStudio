
import React, { useEffect } from 'react';
import { Scale, FileCheck, AlertCircle, Gavel } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-900/20 rounded-2xl mb-6">
            <Scale className="h-8 w-8 text-brand-500" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          
          {/* Agreement */}
          <section className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <FileCheck className="text-brand-500 h-6 w-6" />
               Agreement to Terms
             </h2>
             <p className="mb-4">
               Welcome to Motral Web Studio. By accessing or using our website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.
             </p>
             <p>
               These terms apply to all visitors, users, and others who access the service provided by Motral Web Studio ("we," "us," or "our").
             </p>
          </section>

          {/* Intellectual Property */}
           <section>
             <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property Rights</h2>
             <p className="mb-4">
               Unless otherwise indicated, the Site and our services are our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
             </p>
             <p className="text-gray-400 italic border-l-4 border-brand-500 pl-4 py-2 bg-gray-900/30">
               Note for Clients: Upon full payment for a project, intellectual property rights for custom-developed websites and code are typically transferred to the client, subject to the specific terms outlined in your individual service contract.
             </p>
          </section>

          {/* User Representations */}
          <section>
             <h2 className="text-2xl font-bold text-white mb-6">User Obligations</h2>
             <p className="mb-4">By using our services, you represent and warrant that:</p>
             <ul className="space-y-3">
               {[
                 'You have the legal capacity and you agree to comply with these Terms of Service.',
                 'You will not use the Site for any illegal or unauthorized purpose.',
                 'Your use of the Site will not violate any applicable law or regulation.',
                 'You will not transmit any viruses, malware, or destructive code.',
                 'You will not attempt to gain unauthorized access to our systems or user accounts.'
               ].map((item, idx) => (
                 <li key={idx} className="flex items-start gap-3 text-gray-400">
                   <div className="h-2 w-2 rounded-full bg-brand-500 shrink-0 mt-2.5" />
                   <span>{item}</span>
                 </li>
               ))}
             </ul>
          </section>

           {/* Payment Terms */}
           <section className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
             <h2 className="text-2xl font-bold text-white mb-6">Payment and Services</h2>
             <p className="mb-4">
               <strong>Quotes & Estimates:</strong> All quotes provided by Motral Web Studio are valid for 30 days unless stated otherwise.
             </p>
             <p className="mb-4">
               <strong>Payment Schedule:</strong> For most web development projects, we require a 50% deposit upfront before work begins, with the remaining balance due upon project completion but prior to final deployment/handover.
             </p>
             <p>
               <strong>Refunds:</strong> Deposits are generally non-refundable once work has commenced. Specific refund policies will be detailed in your individual project proposal.
             </p>
          </section>

          {/* Limitation of Liability */}
          <section>
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <AlertCircle className="text-brand-500 h-6 w-6" />
               Limitation of Liability
             </h2>
             <p className="mb-4">
               In no event will Motral Web Studio, our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services.
             </p>
             <p className="text-gray-400">
               We do not guarantee that our site will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programmes and platform to access our site.
             </p>
          </section>

          {/* Governing Law */}
          <section className="bg-brand-900/10 border border-brand-900/30 p-8 rounded-3xl">
             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
               <Gavel className="text-brand-500 h-6 w-6" />
               Governing Law
             </h2>
             <p>
               These terms shall be governed by and defined following the laws of Pakistan. Motral Web Studio and yourself irrevocably consent that the courts of Pakistan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
             </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-800 pt-12 mt-12">
             <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
             <p className="mb-6">
               In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
             </p>
             <div className="bg-gray-900 p-6 rounded-2xl inline-block border border-gray-800">
                <p className="font-bold text-white mb-1">Motral Web Studio</p>
                <p className="text-brand-400">Millat Town D Block Faisalabad, Pakistan</p>
                <p className="text-brand-400">info@motralwebstudio.com</p>
                <p className="text-brand-400">03706487654</p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
