import React, { useEffect } from 'react';
import { Scale, FileCheck, AlertCircle, Gavel } from 'lucide-react';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl mb-6 shadow-sm border border-gray-200">
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl font-serif mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
          
          {/* Agreement */}
          <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
             <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
               <FileCheck className="text-primary h-6 w-6" />
               Agreement to Terms
             </h2>
             <p className="mb-4">
               Welcome to Motral Web Studio. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
             </p>
          </section>

          {/* Intellectual Property */}
           <section>
             <h2 className="text-2xl font-bold text-secondary mb-6">Intellectual Property Rights</h2>
             <p className="mb-4">
               Unless otherwise indicated, the Site and our services are our proprietary property. All source code, databases, functionality, software, website designs, and graphics are owned or controlled by us.
             </p>
             <p className="text-primary italic border-l-4 border-primary pl-4 py-2 bg-primary/5">
               Note for Clients: Upon full payment for a project, intellectual property rights for custom-developed websites are typically transferred to the client subject to contract.
             </p>
          </section>

          {/* Payment Terms */}
           <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
             <h2 className="text-2xl font-bold text-secondary mb-6">Payment and Services</h2>
             <p className="mb-4">
               <strong>Quotes & Estimates:</strong> All quotes provided by Motral Web Studio are valid for 30 days unless stated otherwise.
             </p>
             <p className="mb-4">
               <strong>Payment Schedule:</strong> For most web development projects, we require a 50% deposit upfront before work begins.
             </p>
          </section>

          {/* Limitation of Liability */}
          <section>
             <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
               <AlertCircle className="text-primary h-6 w-6" />
               Limitation of Liability
             </h2>
             <p className="mb-4">
               In no event will Motral Web Studio be liable to you or any third party for any direct, indirect, or consequential damages arising from your use of the site or our services.
             </p>
          </section>

          {/* Governing Law */}
          <section className="bg-secondary text-white p-8 rounded-3xl">
             <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
               <Gavel className="text-accent h-6 w-6" />
               Governing Law
             </h2>
             <p className="text-gray-300">
               These terms shall be governed by and defined following the laws of Pakistan. Motral Web Studio and yourself irrevocably consent that the courts of Pakistan shall have exclusive jurisdiction.
             </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-12 mt-12">
             <h2 className="text-2xl font-bold text-secondary mb-6">Contact Us</h2>
             <div className="bg-white p-6 rounded-2xl inline-block border border-gray-200 shadow-sm">
                <p className="font-bold text-secondary mb-1">Motral Web Studio</p>
                <p className="text-gray-600">Millat Town D Block Faisalabad, Pakistan</p>
                <p className="text-gray-600">info@motralwebstudio.com</p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;