import React, { useState } from 'react';
import { Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle, Mail, Clock, Send, Loader2, CheckCircle, HelpCircle, ChevronDown, ExternalLink, User, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // --- EmailJS Configuration ---
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; 
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; 
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
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
      message: formData.message,
      to_name: 'Motral Web Studio Admin',
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' }); 
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

  const faqs = [
    {
      question: "What is your typical turnaround time?",
      answer: "For a standard business website (4-6 pages), our turnaround time is typically 3-5 business days depending on content availability. E-commerce projects usually take 2-3 weeks."
    },
    {
      question: "Do you require a deposit?",
      answer: "Yes, we require a 50% upfront deposit to secure your slot and begin work. The remaining 50% is due upon project completion and your approval."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are designed with a 'Mobile First' approach, ensuring they look perfect on phones, tablets, and desktops."
    },
    {
      question: "Do you offer website maintenance?",
      answer: "Yes, we offer ongoing maintenance packages that include security updates, backups, and content changes to keep your site running smoothly."
    }
  ];

  return (
    <div className="bg-background w-full overflow-x-hidden flex flex-col">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-secondary py-20 sm:py-32 lg:pb-40">
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary"></div>
             {/* Pattern Grid */}
             <svg
              className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="contact-hero-pattern"
                  width={200}
                  height={200}
                  x="50%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#contact-hero-pattern)" />
            </svg>
         </div>
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-6xl font-serif">
               Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
               Have a project in mind or just want to say hi? We'd love to hear from you. Our team is ready to answer all your questions.
            </p>
         </div>
      </div>

      {/* Main Content Area - Overlapping Hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-24">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 border border-gray-100">
          
          {/* Left Sidebar (Contact Info) */}
          <div className="bg-secondary p-8 sm:p-10 text-white relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            
            <h2 className="text-2xl font-bold font-serif mb-2 relative z-10">Contact Information</h2>
            <p className="text-gray-400 mb-10 text-sm relative z-10">Fill up the form and our team will get back to you within 24 hours.</p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4 group">
                 <div className="bg-white/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-gray-400 font-medium">Phone Number</p>
                    <a href="tel:+923706487654" className="text-lg font-bold hover:text-primary transition-colors">0370 648 7654</a>
                 </div>
              </div>

              <div className="flex items-start gap-4 group">
                 <div className="bg-white/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-gray-400 font-medium">Email Address</p>
                    <a href="mailto:info@motralwebstudio.com" className="text-lg font-bold hover:text-primary transition-colors break-all">info@motralwebstudio.com</a>
                 </div>
              </div>

               <div className="flex items-start gap-4 group">
                 <div className="bg-white/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MessageCircle className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-gray-400 font-medium">Skype ID</p>
                    <p className="text-lg font-bold">motralwebstudio</p>
                 </div>
              </div>

              <div className="flex items-start gap-4 group">
                 <div className="bg-white/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-gray-400 font-medium">Location</p>
                    <p className="text-lg font-bold leading-tight">Millat Town D Block<br/>Faisalabad, Pakistan</p>
                 </div>
              </div>

               <div className="flex items-start gap-4 group">
                 <div className="bg-white/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Clock className="h-6 w-6" />
                 </div>
                 <div>
                    <p className="text-sm text-gray-400 font-medium">Working Hours</p>
                    <p className="text-lg font-bold">Mon - Sat: 9am - 6pm</p>
                 </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700/50 flex gap-4">
               <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                 <Facebook className="h-5 w-5" />
               </a>
               <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                 <Twitter className="h-5 w-5" />
               </a>
               <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-all hover:-translate-y-1">
                 <Linkedin className="h-5 w-5" />
               </a>
            </div>
          </div>

          {/* Right Content (Form) */}
          <div className="lg:col-span-2 p-8 sm:p-12 bg-white">
             <div className="mb-8">
               <h2 className="text-2xl sm:text-3xl font-bold text-secondary font-serif">Send us a Message</h2>
               <p className="text-gray-500 mt-2">We will get back to you within 24 hours.</p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                     <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                           type="text" 
                           id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleInputChange}
                           required
                           className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 font-medium"
                           placeholder="John Doe"
                        />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                     <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                           type="tel" 
                           id="phone"
                           name="phone"
                           value={formData.phone}
                           onChange={handleInputChange}
                           className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 font-medium"
                           placeholder="+92 300 1234567"
                        />
                     </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                           type="email" 
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleInputChange}
                           required
                           className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-gray-400 font-medium"
                           placeholder="john@example.com"
                        />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                     <div className="relative">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select 
                           id="subject"
                           name="subject"
                           value={formData.subject}
                           onChange={handleInputChange}
                           className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium appearance-none"
                        >
                           <option>General Inquiry</option>
                           <option>Web Design Project</option>
                           <option>E-commerce Development</option>
                           <option>SEO Services</option>
                           <option>Maintenance Support</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                     </div>
                   </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                   <div className="relative">
                     <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-secondary focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none placeholder-gray-400 font-medium"
                        placeholder="Tell us about your project requirements..."
                     ></textarea>
                   </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-brand-600 transition-all shadow-[0_4px_14px_0_rgba(13,110,253,0.39)] hover:shadow-[0_6px_20px_rgba(13,110,253,0.23)] hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                     {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="mt-4 flex items-center gap-2 text-sm text-green-600 font-bold bg-green-50 p-3 rounded-lg border border-green-100 animate-in fade-in slide-in-from-top-2">
                      <CheckCircle className="h-5 w-5" /> Message Sent Successfully! We'll contact you shortly.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mt-4 text-sm text-red-600 font-bold bg-red-50 p-3 rounded-lg border border-red-100 animate-in fade-in slide-in-from-top-2">
                      Failed to send message. Please try again or contact us directly via WhatsApp.
                    </div>
                  )}
                </div>
             </form>
          </div>
        </div>

        {/* Map & Location Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-secondary font-serif">Visit Our Office</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    We are located in the heart of Faisalabad. Feel free to drop by for a cup of coffee and discuss your project in person.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-secondary">Main Office</h4>
                            <p className="text-gray-600">Millat Town D Block, Faisalabad</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-secondary">Office Hours</h4>
                            <p className="text-gray-600">Monday - Saturday, 09:00 AM - 06:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Visual Map Placeholder */}
            <div className="h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg relative group">
                {/* Simulated Map UI */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-secondary/30"></div>
                
                {/* Pin Animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="relative">
                        <div className="h-4 w-4 bg-primary rounded-full animate-ping absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        <MapPin className="h-12 w-12 text-primary drop-shadow-lg relative z-10 fill-white" />
                    </div>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-lg mt-2 font-bold text-secondary text-sm">
                        We are here!
                    </div>
                </div>

                <div className="absolute bottom-4 right-4">
                     <a 
                        href="https://maps.google.com/?q=Millat+Town+Faisalabad" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-secondary px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-2"
                     >
                        Open in Google Maps <ExternalLink className="h-3 w-3" />
                     </a>
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <span className="text-primary font-bold uppercase tracking-wider text-sm">FAQ</span>
                <h2 className="text-3xl font-bold text-secondary font-serif mt-2">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`bg-white rounded-2xl border transition-all duration-300 ${
                            openFaqIndex === index ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-primary/50'
                        }`}
                    >
                        <button
                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                        >
                            <span className={`font-bold text-lg flex items-center gap-3 transition-colors ${openFaqIndex === index ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                                <HelpCircle className={`h-5 w-5 transition-colors ${openFaqIndex === index ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`} />
                                {faq.question}
                            </span>
                            <ChevronDown 
                                className={`h-5 w-5 transition-transform duration-300 ${
                                    openFaqIndex === index ? 'rotate-180 text-primary' : 'text-gray-400 group-hover:text-primary'
                                }`} 
                            />
                        </button>
                        <div 
                            className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                                openFaqIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <p className="text-gray-600 pl-8 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;