
import React from 'react';
import { Target, Users, Rocket, Shield, Lightbulb, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10">
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Digital network background" 
                className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/50 to-gray-950"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are a team of passionate developers and designers committed to transforming the digital landscape through innovation and precision.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 space-y-24">
        
        {/* Section 1: About Our Work */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/30 text-brand-500 text-sm font-semibold mb-6 border border-brand-900/50">
                <Rocket className="h-4 w-4" />
                <span>Our Vision</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 font-serif">
              About Our Work
            </h3>
            <div className="prose prose-invert text-gray-400 space-y-4">
              <p>
                We are living in a hyper-modern world where the pace of change is rapid. This constantly evolving landscape has spurred enormous growth across all sectors of life.
              </p>
              <p>
                The internet has evolved into the driving force of modern commerce. Its global reach makes a robust digital presence inevitable for success. Today, enterprises rely heavily on e-commerce and strategic digital marketing to project their brand and connect with customers.
              </p>
              <p>
                A high-performance, smart website is essential to establish a solid corporate image—a task that demands deep technical expertise and professional design capability to truly stand out in a crowded market.
              </p>
            </div>
          </div>
          <div className="relative group">
             <div className="absolute -inset-4 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
             <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team collaborating" 
                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                />
             </div>
          </div>
        </section>

        {/* Section 2: Web Developers in Pakistan */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold text-white mb-6 font-serif">Web Developers in Pakistan</h3>
            <p className="text-gray-400 leading-relaxed">
              The market is densely mushroomed with web developers who claim to be market leaders, citing creativity and uniqueness as their ethos. However, the web is often the first and foremost interaction a customer has with a company, making this interaction highly persuasive in winning visitor confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Future Proofing",
                desc: "A professional web developer is positioned to tap into prevailing and emerging trends, creating the best business bond by developing your website on professional lines."
              },
              {
                icon: Users,
                title: "Customer Conversion",
                desc: "We grab the attention of visitors who move like a flock of birds. Your website must have strong bonding power to transpose those visitors into loyal customers."
              },
              {
                icon: Target,
                title: "Bridging the Gap",
                desc: "The web acts as a bridge between company and customer. Both ends can only be connected effectively when the structure and layout of the website are smart enough."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-12 w-12 bg-gray-800 rounded-xl flex items-center justify-center text-brand-500 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
             <p className="text-gray-400 max-w-4xl mx-auto italic text-lg border-l-4 border-brand-500 pl-6 py-2 bg-gray-900/30 rounded-r-xl">
            "To get noticed is a basic attribute of a well-crafted website. A charming and stand-apart appearance is a quality aspect we guarantee."
            </p>
          </div>
        </section>

        {/* Section 3: Why Professional? - Banner Style */}
        <section className="relative overflow-hidden rounded-3xl isolate">
           {/* Background Image */}
           <div className="absolute inset-0 -z-10">
             <img 
               src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1920&auto=format&fit=crop" 
               alt="Technology Background" 
               className="h-full w-full object-cover"
             />
             <div className="absolute inset-0 bg-gray-950/90 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent"></div>
           </div>

           <div className="p-8 lg:p-16 relative z-10">
               <div className="max-w-2xl">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-sm font-semibold mb-6 border border-brand-500/30">
                        <Shield className="h-4 w-4" />
                        <span>Professional Standards</span>
                    </div>
                   <h3 className="text-3xl font-bold text-white mb-6 font-serif">
                     Why a Professional Web Development Company?
                   </h3>
                   <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                     Investing in professional development makes time and money more worthwhile. It keeps your business dynamic and delivers customer delight—because profit is simply the by-product of a happy customer.
                   </p>
                   <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-white">
                            <CheckCircle2 className="h-5 w-5 text-brand-500" />
                            <span>Real-time Return on Investment (ROI)</span>
                        </li>
                        <li className="flex items-center gap-3 text-white">
                            <CheckCircle2 className="h-5 w-5 text-brand-500" />
                            <span>Scalable, secure architecture</span>
                        </li>
                        <li className="flex items-center gap-3 text-white">
                            <CheckCircle2 className="h-5 w-5 text-brand-500" />
                            <span>Professional corporate identity</span>
                        </li>
                   </ul>
               </div>
           </div>
        </section>

        {/* Section 4: Our Mission with Image Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1">
             <h3 className="text-3xl font-bold text-white mb-6 font-serif">Our Mission</h3>
             <div className="space-y-6 text-gray-400 leading-relaxed">
               <p>
                 Welcome to our web development agency, where creativity meets technology to build meaningful digital experiences. We are committed to helping businesses establish a strong online presence through modern, user-friendly, and high-performing websites.
               </p>
               <p>
                 Our journey began with a simple vision: to make professional website development accessible, affordable, and effective for businesses of all sizes. Today, we proudly deliver web solutions that not only look great but also bring real value and measurable results to our clients.
               </p>
               <p>
                 What sets us apart is our commitment to quality and client satisfaction. We value open communication, transparency, and long-term relationships. We guide our clients step by step, ensuring they understand every part of the process and feel confident in the progress of their project.
               </p>
             </div>
           </div>
           
           {/* Image Masonry Grid */}
           <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                    alt="Presentation" 
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop" 
                    alt="Coding" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
              </div>
              <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
                    alt="Office Meeting" 
                    className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
                    alt="Analytics" 
                    className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default About;
