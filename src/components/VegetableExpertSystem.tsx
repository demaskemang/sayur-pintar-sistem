import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Leaf, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

// Naive Bayes training data (simplified example)
const trainingData = {
  sayuran: {
    'tomat': { musim: 'kering', cuaca: 'panas', permintaan: 'tinggi', harga: 'tinggi', keuntungan: 0.8 },
    'wortel': { musim: 'hujan', cuaca: 'dingin', permintaan: 'tinggi', harga: 'sedang', keuntungan: 0.7 },
    'kubis': { musim: 'kering', cuaca: 'sejuk', permintaan: 'sedang', harga: 'rendah', keuntungan: 0.6 },
    'bayam': { musim: 'hujan', cuaca: 'sejuk', permintaan: 'tinggi', harga: 'sedang', keuntungan: 0.75 },
    'brokoli': { musim: 'kering', cuaca: 'dingin', permintaan: 'tinggi', harga: 'tinggi', keuntungan: 0.85 },
    'selada': { musim: 'kering', cuaca: 'sejuk', permintaan: 'sedang', harga: 'sedang', keuntungan: 0.65 }
  }
};

interface PredictionInput {
  sayuran: string;
  musim: string;
  cuaca: string;
  permintaan: string;
  modal: number;
}

interface PredictionResult {
  rekomendasi: string;
  probabilitas: number;
  estimasiKeuntungan: number;
  risiko: 'rendah' | 'sedang' | 'tinggi';
}

const VegetableExpertSystem = () => {
  const [input, setInput] = useState<PredictionInput>({
    sayuran: '',
    musim: '',
    cuaca: '',
    permintaan: '',
    modal: 0
  });

  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simplified Naive Bayes implementation
  const calculateNaiveBayes = (input: PredictionInput): PredictionResult => {
    const vegetableData = trainingData.sayuran[input.sayuran as keyof typeof trainingData.sayuran];
    
    if (!vegetableData) {
      return {
        rekomendasi: 'Data tidak tersedia',
        probabilitas: 0,
        estimasiKeuntungan: 0,
        risiko: 'tinggi'
      };
    }

    // Calculate probability based on matching conditions
    let probabilitas = 0.5; // base probability
    
    if (vegetableData.musim === input.musim) probabilitas += 0.2;
    if (vegetableData.cuaca === input.cuaca) probabilitas += 0.2;
    if (vegetableData.permintaan === input.permintaan) probabilitas += 0.1;
    
    probabilitas = Math.min(probabilitas, 1);
    
    // Calculate profit estimation
    const baseProfit = vegetableData.keuntungan;
    const estimasiKeuntungan = input.modal * baseProfit * probabilitas;
    
    // Determine risk level
    let risiko: 'rendah' | 'sedang' | 'tinggi' = 'sedang';
    if (probabilitas > 0.7) risiko = 'rendah';
    else if (probabilitas < 0.4) risiko = 'tinggi';
    
    // Generate recommendation
    let rekomendasi = '';
    if (probabilitas > 0.7) {
      rekomendasi = `Sangat direkomendasikan untuk berdagang ${input.sayuran}`;
    } else if (probabilitas > 0.5) {
      rekomendasi = `Cukup baik untuk berdagang ${input.sayuran}`;
    } else {
      rekomendasi = `Sebaiknya pertimbangkan sayuran lain`;
    }

    return {
      rekomendasi,
      probabilitas: probabilitas * 100,
      estimasiKeuntungan,
      risiko
    };
  };

  const handlePredict = async () => {
    if (!input.sayuran || !input.musim || !input.cuaca || !input.permintaan || input.modal <= 0) {
      toast.error('Harap lengkapi semua field');
      return;
    }

    setIsLoading(true);
    
    // Simulate processing time
    setTimeout(() => {
      const prediction = calculateNaiveBayes(input);
      setResult(prediction);
      setIsLoading(false);
      toast.success('Prediksi berhasil dihitung!');
    }, 1000);
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'rendah': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'sedang': return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'tinggi': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      default: return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'rendah': return 'bg-success';
      case 'sedang': return 'bg-warning';
      case 'tinggi': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="shadow-lg border-0" style={{ boxShadow: 'var(--shadow-soft)' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Leaf className="h-6 w-6" />
              Input Data Perdagangan
            </CardTitle>
            <CardDescription>
              Masukkan informasi untuk mendapatkan rekomendasi perdagangan sayuran
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="sayuran">Jenis Sayuran</Label>
              <Select onValueChange={(value) => setInput({...input, sayuran: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih jenis sayuran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tomat">Tomat</SelectItem>
                  <SelectItem value="wortel">Wortel</SelectItem>
                  <SelectItem value="kubis">Kubis</SelectItem>
                  <SelectItem value="bayam">Bayam</SelectItem>
                  <SelectItem value="brokoli">Brokoli</SelectItem>
                  <SelectItem value="selada">Selada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="musim">Musim</Label>
                <Select onValueChange={(value) => setInput({...input, musim: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih musim" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kering">Musim Kering</SelectItem>
                    <SelectItem value="hujan">Musim Hujan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cuaca">Kondisi Cuaca</Label>
                <Select onValueChange={(value) => setInput({...input, cuaca: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih cuaca" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="panas">Panas</SelectItem>
                    <SelectItem value="sejuk">Sejuk</SelectItem>
                    <SelectItem value="dingin">Dingin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="permintaan">Tingkat Permintaan Pasar</Label>
              <Select onValueChange={(value) => setInput({...input, permintaan: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih tingkat permintaan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rendah">Rendah</SelectItem>
                  <SelectItem value="sedang">Sedang</SelectItem>
                  <SelectItem value="tinggi">Tinggi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal">Modal Investasi (Rp)</Label>
              <Input
                id="modal"
                type="number"
                placeholder="Masukkan modal dalam rupiah"
                value={input.modal || ''}
                onChange={(e) => setInput({...input, modal: Number(e.target.value)})}
              />
            </div>

            <Button 
              onClick={handlePredict} 
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300"
              style={{ background: 'var(--gradient-primary)' }}
            >
              {isLoading ? 'Memproses...' : 'Analisis Prediksi'}
              <TrendingUp className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="shadow-lg border-0" style={{ boxShadow: 'var(--shadow-soft)' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-6 w-6" />
              Hasil Prediksi Naive Bayes
            </CardTitle>
            <CardDescription>
              Rekomendasi berdasarkan analisis algoritma Naive Bayes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-accent/50">
                  <h3 className="font-semibold text-accent-foreground mb-2">Rekomendasi:</h3>
                  <p className="text-accent-foreground">{result.rekomendasi}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-secondary">
                    <div className="text-2xl font-bold text-primary">
                      {result.probabilitas.toFixed(1)}%
                    </div>
                    <div className="text-sm text-muted-foreground">Probabilitas Keberhasilan</div>
                    <Progress value={result.probabilitas} className="mt-2" />
                  </div>

                  <div className="text-center p-4 rounded-lg bg-secondary">
                    <div className="text-2xl font-bold text-success">
                      Rp {result.estimasiKeuntungan.toLocaleString('id-ID')}
                    </div>
                    <div className="text-sm text-muted-foreground">Estimasi Keuntungan</div>
                  </div>

                  <div className="text-center p-4 rounded-lg bg-secondary">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      {getRiskIcon(result.risiko)}
                      <span className="text-lg font-semibold capitalize">{result.risiko}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Tingkat Risiko</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Badge 
                    variant="outline" 
                    className={`${getRiskColor(result.risiko)} text-white border-0 px-4 py-2`}
                  >
                    Tingkat Kepercayaan: {result.probabilitas > 70 ? 'Tinggi' : result.probabilitas > 50 ? 'Sedang' : 'Rendah'}
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <Leaf className="h-16 w-16 mx-auto opacity-50" />
                </div>
                <p className="text-muted-foreground">
                  Masukkan data di form sebelah kiri untuk mendapatkan prediksi perdagangan sayuran
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VegetableExpertSystem;