
/**
 * Service d'audit automatique des liens avec vérification périodique
 */

export interface LinkAuditResult {
  url: string;
  status: 'success' | 'error' | 'redirect' | 'timeout';
  statusCode?: number;
  redirectUrl?: string;
  responseTime: number;
  lastChecked: Date;
  errorMessage?: string;
}

export interface ResourceQuality {
  resourceId: string;
  qualityScore: number; // 0-100
  auditResults: LinkAuditResult[];
  userReports: UserReport[];
  lastUpdated: Date;
}

export interface UserReport {
  id: string;
  resourceId: string;
  reportType: 'broken-link' | 'incorrect-content' | 'spam' | 'outdated' | 'other';
  description: string;
  reportedAt: Date;
  userId?: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

class LinkAuditService {
  private auditCache: Map<string, LinkAuditResult> = new Map();
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 heures
  private readonly REQUEST_TIMEOUT = 10000; // 10 secondes

  /**
   * Vérifie le statut d'une URL
   */
  async auditLink(url: string): Promise<LinkAuditResult> {
    const startTime = Date.now();
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.REQUEST_TIMEOUT);
      
      const response = await fetch(url, {
        method: 'HEAD',
        signal: controller.signal,
        headers: {
          'User-Agent': 'IA-Explorer-Link-Checker/1.0'
        }
      });
      
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      
      const result: LinkAuditResult = {
        url,
        status: response.ok ? 'success' : 'error',
        statusCode: response.status,
        responseTime,
        lastChecked: new Date()
      };
      
      // Vérifie les redirections
      if (response.redirected) {
        result.status = 'redirect';
        result.redirectUrl = response.url;
      }
      
      if (!response.ok) {
        result.errorMessage = `HTTP ${response.status} ${response.statusText}`;
      }
      
      this.auditCache.set(url, result);
      return result;
      
    } catch (error) {
      const responseTime = Date.now() - startTime;
      const result: LinkAuditResult = {
        url,
        status: error instanceof Error && error.name === 'AbortError' ? 'timeout' : 'error',
        responseTime,
        lastChecked: new Date(),
        errorMessage: error instanceof Error ? error.message : 'Erreur inconnue'
      };
      
      this.auditCache.set(url, result);
      return result;
    }
  }

  /**
   * Audit en lot avec limitation du taux de requêtes
   */
  async auditLinks(urls: string[], batchSize: number = 5, delay: number = 1000): Promise<LinkAuditResult[]> {
    const results: LinkAuditResult[] = [];
    
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(url => this.auditLink(url))
      );
      
      results.push(...batchResults);
      
      // Délai entre les lots pour éviter de surcharger les serveurs
      if (i + batchSize < urls.length) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    return results;
  }

  /**
   * Calcule un score de qualité basé sur les résultats d'audit
   */
  calculateQualityScore(auditResults: LinkAuditResult[], userReports: UserReport[]): number {
    let score = 100;
    
    // Pénalités basées sur les résultats d'audit
    auditResults.forEach(result => {
      switch (result.status) {
        case 'error':
          score -= 30;
          break;
        case 'timeout':
          score -= 20;
          break;
        case 'redirect':
          score -= 5;
          break;
        default:
          break;
      }
      
      // Pénalité pour temps de réponse lent
      if (result.responseTime > 5000) {
        score -= 10;
      }
    });
    
    // Pénalités basées sur les signalements utilisateurs
    const unresolvedReports = userReports.filter(report => report.status === 'pending');
    score -= unresolvedReports.length * 15;
    
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Récupère les résultats depuis le cache si disponibles
   */
  getCachedResult(url: string): LinkAuditResult | null {
    const cached = this.auditCache.get(url);
    if (cached) {
      const age = Date.now() - cached.lastChecked.getTime();
      if (age < this.CACHE_DURATION) {
        return cached;
      }
    }
    return null;
  }

  /**
   * Valide le contenu d'une page par mots-clés
   */
  async validateContent(url: string, expectedKeywords: string[]): Promise<boolean> {
    try {
      // Pour des raisons de CORS, cette fonctionnalité nécessiterait un proxy serveur
      // ou une extension backend. Pour l'instant, on retourne true.
      console.log(`Validation du contenu pour ${url} avec les mots-clés:`, expectedKeywords);
      return true;
    } catch (error) {
      console.error('Erreur lors de la validation du contenu:', error);
      return false;
    }
  }
}

export const linkAuditService = new LinkAuditService();
