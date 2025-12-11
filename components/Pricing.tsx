import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Course Fee & Government Subsidies
          </h2>
          <p className="text-gray-500">Pay even less or $0 cash with government subsidies.</p>
        </div>

        <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
                <button className="bg-primary text-white px-8 py-2 rounded-md font-bold shadow-sm">Individual</button>
                <button className="text-gray-600 hover:text-primary px-8 py-2 rounded-md font-bold transition-colors">Corporate</button>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Tier 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
                <h3 className="text-xl font-bold text-primary mb-4">Singapore Citizens (40 years and above)</h3>
                
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                        <span>Course Fee</span>
                        <span>$1,650.00</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                        <span>GST (9%)</span>
                        <span>$148.50</span>
                    </div>
                    <div className="flex justify-between items-center text-accent font-bold">
                        <span>70% Subsidy</span>
                        <span>-$1,155.00</span>
                    </div>
                    <div className="h-px bg-gray-200 my-4"></div>
                    <div className="flex justify-between items-end">
                        <span className="font-bold text-primary text-lg">Nett Course Fee</span>
                        <div className="text-right">
                            <div className="text-3xl font-heading font-extrabold text-primary">$643.50</div>
                            <div className="text-xs text-gray-400">Pay 0 cash with SkillsFuture</div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-sm text-primary mb-6">
                    <p className="font-bold mb-1">Applicable Funding:</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-1"><Check size={14} className="text-accent"/> SkillsFuture</li>
                        <li className="flex items-center gap-1"><Check size={14} className="text-accent"/> UTAP</li>
                        <li className="flex items-center gap-1"><Check size={14} className="text-accent"/> PSEA</li>
                    </ul>
                </div>
            </div>

            {/* Tier 2 */}
            <div className="border border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-accent"></div>
                <h3 className="text-xl font-bold text-primary mb-4">Singapore Citizens (Below 40) & PR</h3>
                
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                        <span>Course Fee</span>
                        <span>$1,650.00</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500 text-sm">
                        <span>GST (9%)</span>
                        <span>$148.50</span>
                    </div>
                    <div className="flex justify-between items-center text-accent font-bold">
                        <span>50% Subsidy</span>
                        <span>-$825.00</span>
                    </div>
                    <div className="h-px bg-gray-200 my-4"></div>
                    <div className="flex justify-between items-end">
                        <span className="font-bold text-primary text-lg">Nett Course Fee</span>
                        <div className="text-right">
                            <div className="text-3xl font-heading font-extrabold text-primary">$973.50</div>
                            <div className="text-xs text-gray-400">Pay 0 cash with SkillsFuture</div>
                        </div>
                    </div>
                </div>

                <div className="bg-teal-50 p-4 rounded-lg text-sm text-primary mb-6">
                    <p className="font-bold mb-1">Applicable Funding:</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-1"><Check size={14} className="text-accent"/> SkillsFuture</li>
                        <li className="flex items-center gap-1"><Check size={14} className="text-accent"/> UTAP</li>
                        <li className="flex items-center gap-1"><Check size={14} className="text-accent"/> PSEA</li>
                    </ul>
                </div>
            </div>

        </div>

        <div className="text-center mt-12">
            <button className="bg-primary hover:bg-blue-900 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-blue-900/20 w-full sm:w-auto">
                Apply Now to Secure Funding
            </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;