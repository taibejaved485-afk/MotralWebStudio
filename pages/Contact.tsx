import React from 'react';
import { Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background min-h-[calc(100vh-64px)] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          
          {/* Left Sidebar (Secondary Tone) */}
          <div className="bg-secondary p-6 sm:p-10 flex flex-col justify-center space-y-8 sm:space-y-10 lg:col-span-1">
            {/* Skype */}
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-full text-accent shrink-0">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-white text-lg">Skype ID</h3>
                <p className="text-gray-300 mt-1 break-words">motralwebstudio</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-full text-accent shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Phone</h3>
                <p className="text-gray-300 mt-1">03706487654</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-full text-accent shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Address</h3>
                <p className="text-gray-300 mt-1">Millat Town D Block Faisalabad, Pakistan</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4 sm:mt-8 pt-8 border-t border-gray-700">
              <a href="#" className="bg-[#3b5998] p-2.5 rounded-full text-white hover:opacity-90 transition-opacity">
                <Facebook className="h-5 w-5 fill-current" />
              </a>
              <a href="#" className="bg-[#1da1f2] p-2.5 rounded-full text-white hover:opacity-90 transition-opacity">
                <Twitter className="h-5 w-5 fill-current" />
              </a>
              <a href="#" className="bg-[#0077b5] p-2.5 rounded-full text-white hover:opacity-90 transition-opacity">
                <Linkedin className="h-5 w-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Right Side (Form - White Tone) */}
          <div className="bg-white p-6 sm:p-8 md:p-12 lg:col-span-2">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary font-serif">Send us a message</h2>
              <p className="text-primary font-bold uppercase tracking-wider mt-3 text-sm">Get IN Touch</p>
            </div>

            <form className="space-y-6 sm:space-y-8 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-secondary placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-base"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-secondary placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-base"
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-secondary placeholder-gray-400 focus:outline-none focus:border-primary transition-colors text-base"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4} 
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-secondary placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none text-base"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full sm:w-auto px-10 py-3 bg-primary text-white font-bold rounded-lg hover:bg-brand-600 transition-all shadow-[0_4px_14px_0_rgba(13,110,253,0.39)] hover:shadow-[0_6px_20px_rgba(13,110,253,0.23)] hover:-translate-y-1 uppercase tracking-wide"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;