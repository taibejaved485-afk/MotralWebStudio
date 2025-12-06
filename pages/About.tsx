import React from 'react';
import { Target, Users, Rocket, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-950">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.brand.900),theme(colors.gray.950))] opacity-50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are a team of passionate developers and designers committed to transforming the digital landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 space-y-24">
        
        {/* Section 1: About Our Work */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-brand-500 mb-4 flex items-center gap-2">
              <Rocket className="h-6 w-6" />
              About Our Work
            </h3>
            <div className="prose prose-invert text-gray-400">
              <p className="mb-4">
                We are living in a hyper-modern world where the pace of change is rapid. This constantly evolving landscape has spurred enormous growth across all sectors of life.
              </p>
              <p className="mb-4">
                The internet has evolved into the driving force of modern commerce. Its global reach makes a robust digital presence inevitable for success. Today, enterprises rely heavily on e-commerce and strategic digital marketing to project their brand and connect with customers.
              </p>
              <p>
                A high-performance, smart website is essential to establish a solid corporate image—a task that demands deep technical expertise and professional design capability to truly stand out in a crowded market.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
             <div className="h-64 w-full bg-gradient-to-br from-brand-900/50 to-gray-900 rounded-xl flex items-center justify-center">
                <Target className="h-24 w-24 text-brand-500/50" />
             </div>
          </div>
        </section>

        {/* Section 2: Web Developers in Pakistan */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-6">Web Developers in Pakistan</h3>
            <p className="text-gray-400">
              Market is densely mushroomed with web developers who claim to be market leaders, creativity and uniqueness as their ethos. Have you ever noticed that the web is the first and foremost interaction of a customer to the company which makes this interaction highly persuasive to win the confidence of reader/visitor?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Future Proofing",
                desc: "The professional web developer could be in a better position to tap the prevailing trends or for that matter emerging trends. They create a best business bond by developing your web site on professional lines."
              },
              {
                title: "Customer Conversion",
                desc: "Second important thing is their capability to grab the attention of visitors which move like a flock of birds and website should have strong bonding power to transpose those visitors into a regular (loyal) customers."
              },
              {
                title: "Bridging the Gap",
                desc: "Web acts like a bridge between company and customer; so both ends could only be bridged up when the sketch/lay out/structure of web site is smart enough."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-brand-500/50 transition-colors">
                <div className="h-10 w-10 bg-brand-900/30 rounded-lg flex items-center justify-center text-brand-500 font-bold mb-4">
                  {i + 1}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-400 max-w-4xl mx-auto text-center italic">
            "To be get noticed/roaring is yet another basic attribution of well-crafted website. The charming and stand-apart appearance is yet another quality aspect."
          </p>
        </section>

        {/* Section 3: Why Professional? */}
        <section className="bg-brand-950/30 rounded-3xl p-8 lg:p-12 border border-brand-900/50">
           <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
             <Shield className="h-6 w-6 text-brand-500" />
             Why Professional Web Development Company?
           </h3>
           <p className="text-gray-300 leading-relaxed">
             This makes time and money more worthwhile. This would keep the business in dynamic mode and deliver in form of customer delight since money / profit is the by-product of customer delight. Professional web development would convert your professional profit to real time Return on Investment (ROI), so act like a professional customer to be known as professional businessman/enterprise.
           </p>
        </section>

        {/* Section 4: Our Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="order-2 lg:order-1">
             <h3 className="text-3xl font-bold text-white mb-6 font-serif">Our Mission</h3>
             <div className="space-y-4 text-gray-400">
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
           <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-2xl h-48 w-full mt-12"></div>
              <div className="bg-brand-900/20 rounded-2xl h-64 w-full"></div>
              <div className="bg-brand-600 rounded-2xl h-40 w-full -mt-12"></div>
              <div className="bg-gray-800 rounded-2xl h-48 w-full"></div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default About;