
export interface ImageIndicator {
  type: string;
  description: string;
  weight: number;
}

export class ImageDetectionEngine {
  async analyzeImageIndicators(file: File): Promise<ImageIndicator[]> {
    const indicators: ImageIndicator[] = [];
    
    // Analyse des métadonnées EXIF
    const hasExif = await this.hasExifData(file);
    if (!hasExif) {
      indicators.push({ 
        type: 'metadata', 
        description: 'Absence de métadonnées EXIF naturelles', 
        weight: 0.4 
      });
    }

    // Analyse de la taille et compression
    const dimensions = await this.getImageDimensions(file);
    const compressionRatio = file.size / (dimensions.width * dimensions.height);
    
    if (compressionRatio < 0.1) {
      indicators.push({ 
        type: 'compression', 
        description: 'Compression inhabituelle pour une photo naturelle', 
        weight: 0.3 
      });
    }

    // Analyse des dimensions (les IA génèrent souvent des tailles standard)
    const standardSizes = [512, 1024, 768, 256];
    const isStandardSize = standardSizes.includes(dimensions.width) || standardSizes.includes(dimensions.height);
    if (isStandardSize && dimensions.width === dimensions.height) {
      indicators.push({ 
        type: 'dimensions', 
        description: 'Dimensions carrées standard typiques de la génération IA', 
        weight: 0.5 
      });
    }

    // Simulation d'analyse des artefacts visuels
    const hasVisualArtifacts = await this.detectVisualArtifacts(file);
    if (hasVisualArtifacts) {
      indicators.push({ 
        type: 'artifacts', 
        description: 'Artefacts visuels caractéristiques de la génération IA', 
        weight: 0.6 
      });
    }

    // Analyse du nom de fichier
    const fileName = file.name.toLowerCase();
    const aiPatterns = ['generated', 'ai_', 'dalle', 'midjourney', 'stable', 'synthetic'];
    const hasAIPattern = aiPatterns.some(pattern => fileName.includes(pattern));
    if (hasAIPattern) {
      indicators.push({ 
        type: 'filename', 
        description: 'Nom de fichier suggérant une origine IA', 
        weight: 0.7 
      });
    }

    return indicators;
  }

  private async hasExifData(file: File): Promise<boolean> {
    // Simulation - dans un vrai contexte, analyserait les vraies métadonnées EXIF
    return Math.random() > 0.4;
  }

  private async getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = () => resolve({ width: 0, height: 0 });
      img.src = URL.createObjectURL(file);
    });
  }

  private async detectVisualArtifacts(file: File): Promise<boolean> {
    // Simulation d'analyse d'artefacts - dans la réalité, utiliserait de l'analyse d'image avancée
    return Math.random() > 0.5;
  }

  calculateConfidence(indicators: ImageIndicator[]): number {
    const totalWeight = indicators.reduce((sum, ind) => sum + ind.weight, 0);
    return Math.min(1 / (1 + Math.exp(-2.5 * (totalWeight - 0.6))), 0.92);
  }
}
