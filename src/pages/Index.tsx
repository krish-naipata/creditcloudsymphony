
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.body.classList.add('bg-background');
    document.body.style.backgroundImage = 'radial-gradient(circle at 80% 10%, rgba(3, 105, 161, 0.15) 0%, transparent 40%), radial-gradient(circle at 10% 50%, rgba(3, 105, 161, 0.1) 0%, transparent 50%)';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.minHeight = '100vh';
    
    return () => {
      document.body.classList.remove('bg-background');
      document.body.style.backgroundImage = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <BenefitsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
