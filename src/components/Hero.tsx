import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, Shield } from 'lucide-react';
import heroImage from '@/assets/vegetables-hero.jpg';

const Hero = () => {
  const scrollToSystem = () => {
    const element = document.getElementById('expert-system');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ background: 'var(--gradient-primary)' }}
      />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Sistem Pakar
                <span className="text-primary block">Perdagangan Sayuran</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Dapatkan rekomendasi cerdas untuk perdagangan sayuran menggunakan algoritma 
                <strong className="text-primary"> Naive Bayes</strong>. Tingkatkan keuntungan dan kurangi risiko dengan prediksi berbasis data.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToSystem}
                size="lg" 
                className="bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 shadow-lg"
                style={{ background: 'var(--gradient-primary)', boxShadow: 'var(--shadow-glow)' }}
              >
                Mulai Analisis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-accent transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success/10 rounded-lg">
                  <Target className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Prediksi Akurat</p>
                  <p className="text-sm text-muted-foreground">Berbasis algoritma AI</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-warning/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Maksimalkan Profit</p>
                  <p className="text-sm text-muted-foreground">Estimasi keuntungan real-time</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Kurangi Risiko</p>
                  <p className="text-sm text-muted-foreground">Analisis risiko komprehensif</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Fresh vegetables for trading analysis"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">95%</div>
                  <div className="text-xs text-muted-foreground">Akurasi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Prediksi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">35%</div>
                  <div className="text-xs text-muted-foreground">Avg Profit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;