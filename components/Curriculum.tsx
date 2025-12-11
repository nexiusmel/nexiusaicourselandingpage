import React from 'react';
import { MODULES } from '../constants';
import { Brain, MessageSquare, Image, Code, Shield, Briefcase } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain size={24} />,
  MessageSquare: <MessageSquare size={24} />,
  Image: <Image size={24} />,
  Code: <Code size={24} />,
  Shield: <Shield size={24} />,
  Briefcase: <Briefcase size={24} />,
};

const Curriculum: React.FC = () => {
  return (
    <section id="curriculum" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Generative AI Course Details
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our course in Singapore is designed for those seeking practical, in-demand AI skills. 
              This course addresses the growing need for AI proficiency by equipping students with hands-on expertise 
              in prompt engineering and ChatGPT applications.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-bold text-primary">Duration:</span>
                    <span className="text-gray-600">21 Hours Total</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-bold text-primary">Lessons:</span>
                    <span className="text-gray-600">7 Lessons + 1 Assessment</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="font-bold text-primary">Method:</span>
                    <span className="text-gray-600">Online / In-Person</span>
                </div>
            </div>

            <div className="mt-8">
                 <button className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                    View Full Curriculum PDF
                 </button>
            </div>
          </div>

          {/* Right Column: Modules Grid */}
          <div className="lg:col-span-7">
             <div className="grid sm:grid-cols-2 gap-6">
                {MODULES.map((module, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow border-l-4 border-transparent hover:border-accent">
                        <div className="text-accent mb-4">
                            {iconMap[module.iconName]}
                        </div>
                        <h3 className="font-bold text-primary text-lg mb-2">{module.title}</h3>
                        <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Curriculum;