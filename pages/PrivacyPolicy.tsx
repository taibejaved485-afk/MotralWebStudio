
import React, { useEffect } from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-950 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-brand-900/20 rounded-2xl mb-6">
            <FileText className="h-8 w-8 text-brand-500" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-serif mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          {/* Introduction */}
          <section className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Shield className="text-brand-500 h-6 w-6" />
               Introduction
             </h2>
             <p className="mb-4">
               At <strong>Motral Web Studio</strong>, we deeply value your trust and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, maintain, and disclose information collected from users of our website.
             </p>
             <p>
               By accessing our website and using our services, you consent to the data practices described in this statement. We ensure that your data is handled with the utmost care and in compliance with global standards.
             </p>
          </section>

          {/* Information We Collect */}
           <section>
             <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
             <div className="space-y-6">
               <div className="pl-4 border-l-2 border-brand-500/50">
                 <h3 className="text-lg font-semibold text-white mb-2">Personal Identification Information</h3>
                 <p className="text-gray-400">
                   We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for, as appropriate: name, email address, mailing address, phone number.
                 </p>
               </div>
               <div className="pl-4 border-l-2 border-brand-500/50">
                 <h3 className="text-lg font-semibold text-white mb-2">Non-personal Identification Information</h3>
                 <p className="text-gray-400">
                   We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about Users' means of connection to our Site, such as the operating system and the Internet service providers utilized.
                 </p>
               </div>
             </div>
          </section>

          {/* How We Use Information */}
          <section>
             <h2 className="text-2xl font-bold text-white mb-6">How We Use Collected Information</h2>
             <p className="mb-4">Motral Web Studio may collect and use Users' personal information for the following purposes:</p>
             <ul className="grid sm:grid-cols-2 gap-4">
               {[
                 'To improve customer service',
                 'To personalize user experience',
                 'To improve our Site',
                 'To process payments',
                 'To send periodic emails',
                 'To follow up on inquiries'
               ].map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-gray-800/50">
                   <div className="h-2 w-2 rounded-full bg-brand-500 shrink-0" />
                   <span className="text-sm">{item}</span>
                 </li>
               ))}
             </ul>
          </section>

           {/* Security */}
           <section className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
             <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <Lock className="text-brand-500 h-6 w-6" />
               Data Security
             </h2>
             <p>
               We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
             </p>
          </section>

          {/* Sharing Personal Information */}
          <section>
             <h2 className="text-2xl font-bold text-white mb-6">Sharing Your Personal Information</h2>
             <p>
               We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
             </p>
          </section>

          {/* Contact */}
          <section className="border-t border-gray-800 pt-12 mt-12">
             <h2 className="text-2xl font-bold text-white mb-6">Contacting Us</h2>
             <p className="mb-6">
               If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
             </p>
             <div className="bg-brand-900/10 border border-brand-900/30 p-6 rounded-2xl inline-block">
                <p className="font-bold text-white mb-1">Motral Web Studio</p>
                <p className="text-brand-400">info@motralwebstudio.com</p>
                <p className="text-brand-400">Millat Town D Block Faisalabad, Pakistan</p>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
