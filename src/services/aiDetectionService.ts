import { TextDetectionEngine, TextIndicator } from './detection/textDetection';
import { ImageDetectionEngine, ImageIndicator } from './detection/imageDetection';
import { AudioDetectionEngine, AudioIndicator } from './detection/audioDetection';
import { DetectionPreset, getPresetById } from './detection/detectionPresets';

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
    preset?: string;
    processingTime: number;
  };
  metadata?: {
    fileSize: number;
    duration?: number;
    dimensions?: { width: number; height: number };
  };
  rawIndicators?: (TextIndicator | ImageIndicator | AudioIndicator)[];
}

export interface DetectionProvider {
  name: string;
  type: 'text' | 'image' | 'audio' | 'all';
  enabled: boolean;
  apiKey?: string;
}

class AIDetectionService {
  private textEngine = new TextDetectionEngine();
  private imageEngine = new ImageDetectionEngine();
  private audioEngine = new AudioDetectionEngine();

  private providers: DetectionProvider[] = [
    { name: 'GPTZero', type: 'text', enabled: true },
    { name: 'AI Content Detector', type: 'text', enabled: true },
    { name: 'Hive Moderation', type: 'image', enabled: true },
    { name: 'DeepWare', type: 'audio', enabled: true },
    { name: 'Originality.ai', type: 'text', enabled: true },
    { name: 'Copyleaks', type: 'text', enabled: true },
  ];

  async detectText(text: string, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    const indicators = this.textEngine.analyzeTextIndicators(text);
    let confidence = this.textEngine.calculateConfidence(indicators);
    
    // Appliquer les seuils du preset si défini
    if (preset?.settings.thresholds?.text) {
      confidence = confidence * (preset.settings.sensitivity === 'high' ? 1.2 : preset.settings.sensitivity === 'low' ? 0.8 : 1);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.text || 0.7);
    const processingTime = performance.now() - startTime;

    return {
      id: `text_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fileName: 'text_input.txt',
      fileType: 'text',
      isAIGenerated,
      confidence: Math.min(confidence, 0.95),
      analysis: {
        method: 'Advanced Statistical Analysis + Pattern Recognition + Linguistic Modeling',
        details: `Analysé ${text.length} caractères, ${text.split(/\s+/).length} mots avec ${indicators.length} indicateurs détectés`,
        indicators: indicators.map(i => i.description),
        timestamp: new Date().toISOString(),
        preset: preset?.name,
        processingTime: Math.round(processingTime)
      },
      metadata: {
        fileSize: text.length,
      },
      rawIndicators: indicators
    };
  }

  async detectImage(file: File, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    const indicators = await this.imageEngine.analyzeImageIndicators(file);
    let confidence = this.imageEngine.calculateConfidence(indicators);
    
    if (preset?.settings.thresholds?.image) {
      confidence = confidence * (preset.settings.sensitivity === 'high' ? 1.2 : preset.settings.sensitivity === 'low' ? 0.8 : 1);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.image || 0.6);
    const processingTime = performance.now() - startTime;

    return {
      id: `image_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fileName: file.name,
      fileType: 'image',
      isAIGenerated,
      confidence: Math.min(confidence, 0.92),
      analysis: {
        method: 'Deep Neural Network Analysis + EXIF Inspection + Visual Artifact Detection',
        details: `Analyse complète des métadonnées, patterns visuels et signatures de génération IA`,
        indicators: indicators.map(i => i.description),
        timestamp: new Date().toISOString(),
        preset: preset?.name,
        processingTime: Math.round(processingTime)
      },
      metadata: {
        fileSize: file.size,
        dimensions: await this.getImageDimensions(file),
      },
      rawIndicators: indicators
    };
  }

  async detectAudio(file: File, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    const indicators = await this.audioEngine.analyzeAudioIndicators(file);
    let confidence = this.audioEngine.calculateConfidence(indicators);
    
    if (preset?.settings.thresholds?.audio) {
      confidence = confidence * (preset.settings.sensitivity === 'high' ? 1.2 : preset.settings.sensitivity === 'low' ? 0.8 : 1);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.audio || 0.65);
    const processingTime = performance.now() - startTime;

    return {
      id: `audio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fileName: file.name,
      fileType: 'audio',
      isAIGenerated,
      confidence: Math.min(confidence, 0.88),
      analysis: {
        method: 'Advanced Spectral Analysis + Voice Synthesis Detection + Acoustic Modeling',
        details: `Analyse spectrale complète, détection de patterns synthétiques et modélisation acoustique`,
        indicators: indicators.map(i => i.description),
        timestamp: new Date().toISOString(),
        preset: preset?.name,
        processingTime: Math.round(processingTime)
      },
      metadata: {
        fileSize: file.size,
        duration: await this.getAudioDuration(file),
      },
      rawIndicators: indicators
    };
  }

  private async getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = () => resolve({ width: 0, height: 0 });
      img.src = URL.createObjectURL(file);
    });
  }

  private async getAudioDuration(file: File): Promise<number> {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => resolve(audio.duration);
      audio.onerror = () => resolve(0);
      audio.src = URL.createObjectURL(file);
    });
  }

  saveAnalysis(result: DetectionResult): void {
    const history = this.getAnalysisHistory();
    history.unshift(result);
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
      const headers = 'Fichier,Type,IA Détectée,Confiance,Méthode,Preset,Temps de traitement,Timestamp\n';
      const rows = results.map(r => 
        `"${r.fileName}","${r.fileType}","${r.isAIGenerated}","${(r.confidence * 100).toFixed(1)}%","${r.analysis.method}","${r.analysis.preset || 'Aucun'}","${r.analysis.processingTime}ms","${r.analysis.timestamp}"`
      ).join('\n');
      return headers + rows;
    }
  }

  getProviders(): DetectionProvider[] {
    return [...this.providers];
  }

  updateProvider(name: string, enabled: boolean, apiKey?: string): void {
    const provider = this.providers.find(p => p.name === name);
    if (provider) {
      provider.enabled = enabled;
      if (apiKey !== undefined) provider.apiKey = apiKey;
    }
  }
}

export const aiDetectionService = new AIDetectionService();
