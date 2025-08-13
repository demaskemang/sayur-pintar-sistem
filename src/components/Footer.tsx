import React from 'react';
import { Brain, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Brain className="h-8 w-8" />
              <h3 className="text-xl font-bold">PasarTrade Expert</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Sistem pakar yang membantu pedagang sayuran membuat keputusan bisnis yang lebih cerdas 
              menggunakan teknologi Naive Bayes untuk prediksi yang akurat.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Tentang Naive Bayes</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Algoritma probabilitas untuk klasifikasi</li>
              <li>• Menggunakan teorema Bayes dengan asumsi independensi</li>
              <li>• Efektif untuk prediksi dengan data kategorikal</li>
              <li>• Cocok untuk analisis risiko dan rekomendasi</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Fitur Utama</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• Prediksi harga berdasarkan kondisi pasar</li>
              <li>• Analisis risiko perdagangan</li>
              <li>• Estimasi keuntungan real-time</li>
              <li>• Rekomendasi sayuran terbaik untuk dijual</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 PasarTrade Expert. Menggunakan algoritma Naive Bayes untuk prediksi perdagangan sayuran.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <span>Created by</span>
              <span className="font-semibold">Demas W</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;