import React from 'react';
import { Target, Users, Rocket, Shield, Lightbulb, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-background w-full overflow-x-hidden">
      {/* Hero Section (Secondary Tone) */}
      <div className="relative isolate overflow-hidden bg-secondary py-20 sm:py-32">
        <div className="absolute inset-0 -z-10">
            <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Digital network background" 
                className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/50 to-secondary"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-6xl font-serif">About Us</h2>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300">
              We are a team of passionate developers and designers committed to transforming the digital landscape through innovation and precision.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* Section 1: About Our Work (Light Tone) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
                <Rocket className="h-4 w-4" />
                <span>Our Vision</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 font-serif">
              About Our Work
            </h3>
            <div className="prose prose-lg text-gray-600 space-y-4 text-base sm:text-lg">
              <p>
                We are living in a hyper-modern world where the pace of change is rapid. This constantly evolving landscape has spurred enormous growth across all sectors of life.
              </p>
              <p>
                The internet has evolved into the driving force of modern commerce. Its global reach makes a robust digital presence inevitable for success. Today, enterprises rely heavily on e-commerce and strategic digital marketing to project their brand and connect with customers.
              </p>
            </div>
          </div>
          <div className="relative group mt-8 lg:mt-0">
             <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team collaborating" 
                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                />
             </div>
          </div>
        </section>

        {/* Section 2: Web Developers in Pakistan (White Tone) */}
        <section>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-6 font-serif">Web Developers in Pakistan</h3>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              The market is densely mushroomed with web developers who claim to be market leaders, citing creativity and uniqueness as their ethos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Future Proofing",
                desc: "A professional web developer is positioned to tap into prevailing and emerging trends, creating the best business bond."
              },
              {
                icon: Users,
                title: "Customer Conversion",
                desc: "We grab the attention of visitors who move like a flock of birds. Your website must have strong bonding power."
              },
              {
                icon: Target,
                title: "Bridging the Gap",
                desc: "The web acts as a bridge between company and customer. Both ends can only be connected effectively when the structure is smart."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="h-12 w-12 bg-background rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-3">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Why Professional? - Banner Style */}
        <section className="relative overflow-hidden rounded-3xl isolate shadow-2xl">
           <div className="absolute inset-0 -z-10">
             <img 
               src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=1920&auto=format&fit=crop" 
               alt="Technology Background" 
               className="h-full w-full object-cover"
             />
             <div className="absolute inset-0 bg-secondary/90 mix-blend-multiply"></div>
           </div>

           <div className="p-8 lg:p-16 relative z-10 text-center lg:text-left">
               <div className="max-w-2xl">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
                        <Shield className="h-4 w-4" />
                        <span>Professional Standards</span>
                    </div>
                   <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-serif leading-tight">
                     Why a Professional Web Development Company?
                   </h3>
                   <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-white justify-center lg:justify-start">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                            <span className="text-left">Real-time Return on Investment (ROI)</span>
                        </li>
                        <li className="flex items-center gap-3 text-white justify-center lg:justify-start">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                            <span className="text-left">Scalable, secure architecture</span>
                        </li>
                        <li className="flex items-center gap-3 text-white justify-center lg:justify-start">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                            <span className="text-left">Professional corporate identity</span>
                        </li>
                   </ul>
               </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;