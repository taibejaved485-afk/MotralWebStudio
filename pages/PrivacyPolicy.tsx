import React, { useEffect } from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl mb-6 shadow-sm border border-gray-200">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl font-serif mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
          {/* Introduction */}
          <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
             <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
               <Shield className="text-primary h-6 w-6" />
               Introduction
             </h2>
             <p className="mb-4">
               At <strong>Motral Web Studio</strong>, we deeply value your trust and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, maintain, and disclose information collected from users of our website.
             </p>
          </section>

          {/* Information We Collect */}
           <section>
             <h2 className="text-2xl font-bold text-secondary mb-6">Information We Collect</h2>
             <div className="space-y-6">
               <div className="pl-4 border-l-4 border-primary">
                 <h3 className="text-lg font-semibold text-secondary mb-2">Personal Identification Information</h3>
                 <p className="text-gray-600">
                   We may collect personal identification information from Users in a variety of ways, including when Users visit our site, fill out a form, and in connection with other activities. Users may be asked for: name, email address, mailing address, phone number.
                 </p>
               </div>
               <div className="pl-4 border-l-4 border-primary">
                 <h3 className="text-lg font-semibold text-secondary mb-2">Non-personal Identification Information</h3>
                 <p className="text-gray-600">
                   We may collect non-personal identification information about Users whenever they interact with our Site. This may include the browser name, type of computer, and technical information about means of connection.
                 </p>
               </div>
             </div>
          </section>

          {/* How We Use Information */}
          <section>
             <h2 className="text-2xl font-bold text-secondary mb-6">How We Use Collected Information</h2>
             <ul className="grid sm:grid-cols-2 gap-4">
               {[
                 'To improve customer service',
                 'To personalize user experience',
                 'To improve our Site',
                 'To process payments',
                 'To send periodic emails',
                 'To follow up on inquiries'
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
                   <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                   <span className="text-sm">{item}</span>
                 </li>
               ))}
             </ul>
          </section>

           {/* Security */}
           <section className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
             <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
               <Lock className="text-primary h-6 w-6" />
               Data Security
             </h2>
             <p>
               We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
             </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-200 pt-12 mt-12">
             <h2 className="text-2xl font-bold text-secondary mb-6">Contacting Us</h2>
             <div className="bg-secondary text-white p-6 rounded-2xl inline-block">
                <p className="font-bold text-white mb-1">Motral Web Studio</p>
                <p className="text-gray-300">info@motralwebstudio.com</p>
                <p className="text-gray-300">Millat Town D Block Faisalabad, Pakistan</p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;