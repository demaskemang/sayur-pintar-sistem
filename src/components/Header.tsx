import React from 'react';
import { Leaf, Brain, BarChart3 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-lg">
              <Leaf className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">PasarTrade Expert</h1>
              <p className="text-sm text-muted-foreground">Sistem Pakar Perdagangan Sayuran</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Brain className="h-5 w-5" />
              <span className="text-sm">Naive Bayes Algorithm</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <BarChart3 className="h-5 w-5" />
              <span className="text-sm">Smart Predictions</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;