import React from 'react';
import { Database, TrendingUp, AlertTriangle, CheckCircle, Construction } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

const DatasetAnalyzerHeader = () => {
  return (
    <div className="space-y-6">
      {/* Dev Notice */}
      <Alert className="border-orange-500/50 bg-orange-500/10">
        <Construction className="h-4 w-4 text-orange-500" />
        <AlertDescription className="text-foreground">
          <span className="font-semibold">🚧 Outil en développement actif</span> - Nouvelles fonctionnalités en cours d'ajout. 
          Certaines analyses sont simulées à des fins de démonstration.
        </AlertDescription>
      </Alert>

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Database className="h-8 w-8 text-primary" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <h1 className="text-4xl font-bold">Analyseur de Dataset IA</h1>
          <Badge variant="outline" className="text-orange-500 border-orange-500">
            BETA
          </Badge>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Analysez la qualité, les biais et la distribution de vos datasets pour l'entraînement de modèles IA. 
          Obtenez des recommandations d'amélioration personnalisées et des visualisations détaillées.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-4 gap-4 mt-8">
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Analyse Qualité</h3>
            <p className="text-sm text-muted-foreground">
              Détection des valeurs manquantes et incohérences
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Détection de Biais</h3>
            <p className="text-sm text-muted-foreground">
              Identification des biais dans vos données
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Visualisations</h3>
            <p className="text-sm text-muted-foreground">
              Graphiques interactifs de distribution
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Database className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Recommandations</h3>
            <p className="text-sm text-muted-foreground">
              Conseils d'amélioration personnalisés
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Creator Info */}
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Développé par <span className="font-semibold">Geoffroy Streit</span>
        </p>
      </div>
    </div>
  );
};

export default DatasetAnalyzerHeader;
