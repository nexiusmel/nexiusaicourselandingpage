import React from 'react';
import { Briefcase, User, Users, Rocket, TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-4">
            Learn Generative AI with Vertical Institute
          </h2>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Why Learn Grid */}
        <div className="bg-neutral rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl font-bold text-primary mb-6">Why Learn Generative AI?</h3>
          <p className="text-gray-600 mb-6 italic border-l-4 border-accent pl-4">
            "We do not think this (AI's emergence) will mean a jobless future. But it does mean significant changes in job roles, and more training for humans to harness AI effectively." — Prime Minister Lawrence Wong
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
             <div className="flex flex-col items-start">
                <div className="p-3 bg-white rounded-lg shadow-sm mb-4">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <h4 className="font-bold text-primary text-lg mb-2">Future-Proof Career</h4>
                <p className="text-sm text-gray-600">Stay competitive as AI adoption accelerates across all industries.</p>
             </div>
             <div className="flex flex-col items-start">
                <div className="p-3 bg-white rounded-lg shadow-sm mb-4">
                  <Clock className="text-accent" size={32} />
                </div>
                <h4 className="font-bold text-primary text-lg mb-2">Boost Productivity</h4>
                <p className="text-sm text-gray-600">Automate mundane tasks and focus on high-value strategic work.</p>
             </div>
             <div className="flex flex-col items-start">
                <div className="p-3 bg-white rounded-lg shadow-sm mb-4">
                  <ShieldCheck className="text-accent" size={32} />
                </div>
                <h4 className="font-bold text-primary text-lg mb-2">Industry Recognized</h4>
                <p className="text-sm text-gray-600">Get certified with a WSQ Statement of Attainment.</p>
             </div>
          </div>
        </div>

        {/* Who is this for */}
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-10 text-center">Who is This Course For?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {[
                  { title: "Working Professionals", icon: Briefcase, desc: "Use GenAI to automate tasks and create content easily." },
                  { title: "Seniors & Retirees", icon: User, desc: "Let AI help with routine tasks, giving you more time for hobbies." },
                  { title: "Entrepreneurs", icon: Users, desc: "Leverage AI to simplify operations and boost revenue." },
                  { title: "Aspiring AI Pros", icon: Rocket, desc: "Gain cutting-edge AI skills to unlock opportunities." }
                ].map((item, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-card hover:border-accent transition-all duration-300 group">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors text-primary">
                            <item.icon size={24} />
                        </div>
                        <h4 className="font-bold text-primary text-lg mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                ))}

            </div>
        </div>

      </div>
    </section>
  );
};

export default Overview;