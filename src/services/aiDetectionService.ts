import { TextDetectionEngine, TextIndicator } from './detection/textDetection';
import { ImageDetectionEngine, ImageIndicator } from './detection/imageDetection';
import { AudioDetectionEngine, AudioIndicator } from './detection/audioDetection';
import { DetectionPreset, getPresetById } from './detection/detectionPresets';
import { ExportService } from './exportService';

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
    
    if (preset?.settings.thresholds?.text) {
      confidence = confidence * this.getSensitivityMultiplier(preset.settings.sensitivity);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.text || 0.7);
    const processingTime = performance.now() - startTime;

    return this.createDetectionResult({
      fileType: 'text',
      fileName: 'text_input.txt',
      isAIGenerated,
      confidence: Math.min(confidence, 0.95),
      method: 'Advanced Statistical Analysis + Pattern Recognition + Linguistic Modeling',
      details: `Analysé ${text.length} caractères, ${text.split(/\s+/).length} mots avec ${indicators.length} indicateurs détectés`,
      indicators: indicators.map(i => i.description),
      preset: preset?.name,
      processingTime,
      metadata: { fileSize: text.length },
      rawIndicators: indicators
    });
  }

  async detectImage(file: File, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    const indicators = await this.imageEngine.analyzeImageIndicators(file);
    let confidence = this.imageEngine.calculateConfidence(indicators);
    
    if (preset?.settings.thresholds?.image) {
      confidence = confidence * this.getSensitivityMultiplier(preset.settings.sensitivity);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.image || 0.6);
    const processingTime = performance.now() - startTime;

    return this.createDetectionResult({
      fileType: 'image',
      fileName: file.name,
      isAIGenerated,
      confidence: Math.min(confidence, 0.92),
      method: 'Deep Neural Network Analysis + EXIF Inspection + Visual Artifact Detection',
      details: 'Analyse complète des métadonnées, patterns visuels et signatures de génération IA',
      indicators: indicators.map(i => i.description),
      preset: preset?.name,
      processingTime,
      metadata: {
        fileSize: file.size,
        dimensions: await this.getImageDimensions(file),
      },
      rawIndicators: indicators
    });
  }

  async detectAudio(file: File, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    const indicators = await this.audioEngine.analyzeAudioIndicators(file);
    let confidence = this.audioEngine.calculateConfidence(indicators);
    
    if (preset?.settings.thresholds?.audio) {
      confidence = confidence * this.getSensitivityMultiplier(preset.settings.sensitivity);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.audio || 0.65);
    const processingTime = performance.now() - startTime;

    return this.createDetectionResult({
      fileType: 'audio',
      fileName: file.name,
      isAIGenerated,
      confidence: Math.min(confidence, 0.88),
      method: 'Advanced Spectral Analysis + Voice Synthesis Detection + Acoustic Modeling',
      details: 'Analyse spectrale complète, détection de patterns synthétiques et modélisation acoustique',
      indicators: indicators.map(i => i.description),
      preset: preset?.name,
      processingTime,
      metadata: {
        fileSize: file.size,
        duration: await this.getAudioDuration(file),
      },
      rawIndicators: indicators
    });
  }

  private createDetectionResult(params: {
    fileType: 'text' | 'image' | 'audio';
    fileName: string;
    isAIGenerated: boolean;
    confidence: number;
    method: string;
    details: string;
    indicators: string[];
    preset?: string;
    processingTime: number;
    metadata?: any;
    rawIndicators?: any[];
  }): DetectionResult {
    return {
      id: `${params.fileType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fileName: params.fileName,
      fileType: params.fileType,
      isAIGenerated: params.isAIGenerated,
      confidence: params.confidence,
      analysis: {
        method: params.method,
        details: params.details,
        indicators: params.indicators,
        timestamp: new Date().toISOString(),
        preset: params.preset,
        processingTime: Math.round(params.processingTime)
      },
      metadata: params.metadata,
      rawIndicators: params.rawIndicators
    };
  }

  private getSensitivityMultiplier(sensitivity: 'low' | 'medium' | 'high'): number {
    switch (sensitivity) {
      case 'high': return 1.2;
      case 'low': return 0.8;
      default: return 1;
    }
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
    return format === 'json' 
      ? ExportService.exportToJson(results)
      : ExportService.exportToCsv(results);
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
