import React from 'react';
import StickyNavbar from './components/StickyNavbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Schedule from './components/Schedule';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIAdvisor from './components/AIAdvisor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral font-sans text-textDark">
      <StickyNavbar />
      <main>
        <Hero />
        <Overview />
        <Curriculum />
        <Pricing />
        <Schedule />
        <Instructors />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <AIAdvisor />
    </div>
  );
};

export default App;