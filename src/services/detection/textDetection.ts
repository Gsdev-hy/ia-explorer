
export interface TextIndicator {
  type: string;
  description: string;
  weight: number;
}

export class TextDetectionEngine {
  analyzeTextIndicators(text: string): TextIndicator[] {
    const indicators: TextIndicator[] = [];
    
    // Analyse de la répétitivité des phrases
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgSentenceLength = sentences.reduce((sum, s) => sum + s.length, 0) / sentences.length;
    
    if (avgSentenceLength > 30) {
      indicators.push({ 
        type: 'length', 
        description: 'Phrases inhabituellement uniformes et longues', 
        weight: 0.4 
      });
    }

    // Analyse du vocabulaire et diversité lexicale
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    const lexicalDiversity = uniqueWords.size / words.length;
    
    if (lexicalDiversity < 0.5) {
      indicators.push({ 
        type: 'vocabulary', 
        description: 'Diversité lexicale très faible', 
        weight: 0.5 
      });
    }

    // Détection de patterns IA spécifiques
    const aiPatterns = [
      { pattern: /\b(furthermore|moreover|additionally|consequently|however)\b/gi, weight: 0.3 },
      { pattern: /\b(it('s| is) important to note|it('s| is) worth noting)\b/gi, weight: 0.4 },
      { pattern: /\b(in conclusion|to summarize|in summary)\b/gi, weight: 0.3 },
      { pattern: /\b(comprehensive|multifaceted|holistic|nuanced)\b/gi, weight: 0.2 },
    ];
    
    let totalPatternWeight = 0;
    aiPatterns.forEach(({ pattern, weight }) => {
      const matches = text.match(pattern);
      if (matches && matches.length > 1) {
        totalPatternWeight += weight * matches.length;
      }
    });

    if (totalPatternWeight > 0.5) {
      indicators.push({ 
        type: 'patterns', 
        description: 'Expressions typiques des modèles IA détectées', 
        weight: Math.min(totalPatternWeight, 0.7) 
      });
    }

    // Analyse de la structure et cohésion
    const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
    const avgParagraphLength = paragraphs.reduce((sum, p) => sum + p.length, 0) / paragraphs.length;
    
    if (avgParagraphLength > 200 && paragraphs.length > 2) {
      const lengthVariance = this.calculateVariance(paragraphs.map(p => p.length));
      if (lengthVariance < 1000) {
        indicators.push({ 
          type: 'structure', 
          description: 'Structure de paragraphes trop uniforme', 
          weight: 0.3 
        });
      }
    }

    // Détection de répétitions de structures
    const sentenceStarts = sentences.map(s => s.trim().split(' ').slice(0, 3).join(' '));
    const uniqueStarts = new Set(sentenceStarts);
    if (sentenceStarts.length > 5 && uniqueStarts.size / sentenceStarts.length < 0.8) {
      indicators.push({ 
        type: 'repetition', 
        description: 'Répétition excessive de structures de phrases', 
        weight: 0.4 
      });
    }

    return indicators;
  }

  private calculateVariance(numbers: number[]): number {
    const mean = numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
    const squaredDiffs = numbers.map(n => Math.pow(n - mean, 2));
    return squaredDiffs.reduce((sum, sq) => sum + sq, 0) / numbers.length;
  }

  calculateConfidence(indicators: TextIndicator[]): number {
    const totalWeight = indicators.reduce((sum, ind) => sum + ind.weight, 0);
    // Fonction de saturation pour éviter les scores trop élevés
    return Math.min(1 / (1 + Math.exp(-3 * (totalWeight - 0.5))), 0.95);
  }
}
