import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VegetableExpertSystem from '@/components/VegetableExpertSystem';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="expert-system" className="py-16 bg-gradient-to-b from-background to-accent/20">
        <VegetableExpertSystem />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
