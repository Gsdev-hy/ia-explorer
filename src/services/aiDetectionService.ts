
export interface DetectionResult {
  id: string;
  fileName: string;
  fileType: 'text' | 'image' | 'audio';
  isAIGenerated: boolean;
  confidence: number;
  analysis: {
    method: string;
    details: string;
    indicators: string[];
    timestamp: string;
  };
  metadata?: {
    fileSize: number;
    duration?: number;
    dimensions?: { width: number; height: number };
  };
}

export interface DetectionProvider {
  name: string;
  type: 'text' | 'image' | 'audio' | 'all';
  enabled: boolean;
  apiKey?: string;
}

class AIDetectionService {
  private providers: DetectionProvider[] = [
    { name: 'GPTZero', type: 'text', enabled: true },
    { name: 'AI Content Detector', type: 'text', enabled: true },
    { name: 'Hive Moderation', type: 'image', enabled: true },
    { name: 'DeepWare', type: 'audio', enabled: true },
  ];

  async detectText(text: string): Promise<DetectionResult> {
    // Simulation d'analyse de texte IA
    const indicators = this.analyzeTextIndicators(text);
    const confidence = this.calculateTextConfidence(indicators);
    const isAIGenerated = confidence > 0.7;

    return {
      id: `text_${Date.now()}`,
      fileName: 'text_input.txt',
      fileType: 'text',
      isAIGenerated,
      confidence,
      analysis: {
        method: 'Statistical Analysis + Pattern Recognition',
        details: `Analysé ${text.length} caractères avec ${indicators.length} indicateurs détectés`,
        indicators: indicators.map(i => i.description),
        timestamp: new Date().toISOString(),
      },
      metadata: {
        fileSize: text.length,
      }
    };
  }

  async detectImage(file: File): Promise<DetectionResult> {
    // Simulation d'analyse d'image IA
    const indicators = await this.analyzeImageIndicators(file);
    const confidence = this.calculateImageConfidence(indicators);
    const isAIGenerated = confidence > 0.6;

    return {
      id: `image_${Date.now()}`,
      fileName: file.name,
      fileType: 'image',
      isAIGenerated,
      confidence,
      analysis: {
        method: 'Neural Network Analysis + Metadata Inspection',
        details: `Analyse des patterns visuels et métadonnées EXIF`,
        indicators: indicators.map(i => i.description),
        timestamp: new Date().toISOString(),
      },
      metadata: {
        fileSize: file.size,
        dimensions: await this.getImageDimensions(file),
      }
    };
  }

  async detectAudio(file: File): Promise<DetectionResult> {
    // Simulation d'analyse audio IA
    const indicators = await this.analyzeAudioIndicators(file);
    const confidence = this.calculateAudioConfidence(indicators);
    const isAIGenerated = confidence > 0.65;

    return {
      id: `audio_${Date.now()}`,
      fileName: file.name,
      fileType: 'audio',
      isAIGenerated,
      confidence,
      analysis: {
        method: 'Spectral Analysis + Voice Synthesis Detection',
        details: `Analyse spectrale et détection de synthèse vocale`,
        indicators: indicators.map(i => i.description),
        timestamp: new Date().toISOString(),
      },
      metadata: {
        fileSize: file.size,
        duration: await this.getAudioDuration(file),
      }
    };
  }

  private analyzeTextIndicators(text: string) {
    const indicators = [];
    
    // Analyse de la répétitivité
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgSentenceLength = sentences.reduce((sum, s) => sum + s.length, 0) / sentences.length;
    if (avgSentenceLength > 25) {
      indicators.push({ type: 'length', description: 'Phrases inhabituellement uniformes', weight: 0.3 });
    }

    // Analyse du vocabulaire
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    const lexicalDiversity = uniqueWords.size / words.length;
    if (lexicalDiversity < 0.6) {
      indicators.push({ type: 'vocabulary', description: 'Diversité lexicale faible', weight: 0.4 });
    }

    // Détection de patterns IA communs
    const aiPatterns = [
      /\b(furthermore|moreover|additionally|consequently)\b/gi,
      /\b(it('s| is) important to note)\b/gi,
      /\b(in conclusion|to summarize)\b/gi,
    ];
    
    let patternCount = 0;
    aiPatterns.forEach(pattern => {
      const matches = text.match(pattern);
      if (matches) patternCount += matches.length;
    });

    if (patternCount > 2) {
      indicators.push({ type: 'patterns', description: 'Expressions typiques des IA détectées', weight: 0.5 });
    }

    return indicators;
  }

  private async analyzeImageIndicators(file: File) {
    const indicators = [];
    
    // Analyse des métadonnées
    const hasExif = await this.hasExifData(file);
    if (!hasExif) {
      indicators.push({ type: 'metadata', description: 'Absence de métadonnées EXIF naturelles', weight: 0.4 });
    }

    // Analyse de la compression
    const compressionRatio = file.size / (1024 * 1024); // Approximation
    if (compressionRatio < 0.5) {
      indicators.push({ type: 'compression', description: 'Compression inhabituelle pour une photo naturelle', weight: 0.3 });
    }

    // Simulation d'analyse des artefacts
    const hasArtifacts = Math.random() > 0.6;
    if (hasArtifacts) {
      indicators.push({ type: 'artifacts', description: 'Artefacts de génération détectés', weight: 0.6 });
    }

    return indicators;
  }

  private async analyzeAudioIndicators(file: File) {
    const indicators = [];
    
    // Analyse de la qualité audio
    const fileSize = file.size;
    const estimatedDuration = fileSize / (128 * 1024 / 8); // Approximation pour 128kbps
    
    if (estimatedDuration > 0 && fileSize / estimatedDuration < 16000) {
      indicators.push({ type: 'quality', description: 'Qualité audio trop uniforme', weight: 0.4 });
    }

    // Simulation d'analyse spectrale
    const hasSpectralAnomalies = Math.random() > 0.5;
    if (hasSpectralAnomalies) {
      indicators.push({ type: 'spectral', description: 'Anomalies spectrales caractéristiques de la synthèse', weight: 0.5 });
    }

    // Détection de patterns de voix synthétique
    const hasSyntheticPatterns = Math.random() > 0.4;
    if (hasSyntheticPatterns) {
      indicators.push({ type: 'voice', description: 'Patterns de voix synthétique détectés', weight: 0.7 });
    }

    return indicators;
  }

  private calculateTextConfidence(indicators: any[]): number {
    const totalWeight = indicators.reduce((sum, ind) => sum + ind.weight, 0);
    return Math.min(totalWeight, 0.95);
  }

  private calculateImageConfidence(indicators: any[]): number {
    const totalWeight = indicators.reduce((sum, ind) => sum + ind.weight, 0);
    return Math.min(totalWeight, 0.92);
  }

  private calculateAudioConfidence(indicators: any[]): number {
    const totalWeight = indicators.reduce((sum, ind) => sum + ind.weight, 0);
    return Math.min(totalWeight, 0.88);
  }

  private async hasExifData(file: File): Promise<boolean> {
    // Simulation simple - dans un vrai cas, on analyserait les métadonnées EXIF
    return Math.random() > 0.3;
  }

  private async getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.src = URL.createObjectURL(file);
    });
  }

  private async getAudioDuration(file: File): Promise<number> {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => resolve(audio.duration);
      audio.src = URL.createObjectURL(file);
    });
  }

  // Méthodes pour la gestion de l'historique
  saveAnalysis(result: DetectionResult): void {
    const history = this.getAnalysisHistory();
    history.unshift(result);
    // Limiter à 100 analyses
    if (history.length > 100) {
      history.splice(100);
    }
    localStorage.setItem('ai_detection_history', JSON.stringify(history));
  }

  getAnalysisHistory(): DetectionResult[] {
    const stored = localStorage.getItem('ai_detection_history');
    return stored ? JSON.parse(stored) : [];
  }

  clearHistory(): void {
    localStorage.removeItem('ai_detection_history');
  }

  exportResults(results: DetectionResult[], format: 'json' | 'csv'): string {
    if (format === 'json') {
      return JSON.stringify(results, null, 2);
    } else {
      const headers = 'Fichier,Type,IA Détectée,Confiance,Méthode,Timestamp\n';
      const rows = results.map(r => 
        `"${r.fileName}","${r.fileType}","${r.isAIGenerated}","${(r.confidence * 100).toFixed(1)}%","${r.analysis.method}","${r.analysis.timestamp}"`
      ).join('\n');
      return headers + rows;
    }
  }
}

export const aiDetectionService = new AIDetectionService();
