import React, { useState } from 'react';
import { Upload, FileText, BarChart3, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDropzone } from 'react-dropzone';

interface DatasetStats {
  totalRows: number;
  totalColumns: number;
  missingValues: number;
  duplicates: number;
  dataTypes: { [key: string]: number };
}

interface BiasAnalysis {
  type: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  recommendation: string;
}

interface QualityScore {
  overall: number;
  completeness: number;
  consistency: number;
  uniqueness: number;
}

const DatasetAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);
  const [stats, setStats] = useState<DatasetStats | null>(null);
  const [biases, setBiases] = useState<BiasAnalysis[]>([]);
  const [qualityScore, setQualityScore] = useState<QualityScore | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setAnalyzed(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/json': ['.json'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
    },
    maxFiles: 1
  });

  const analyzeDataset = () => {
    setAnalyzing(true);
    
    // Simulation d'analyse
    setTimeout(() => {
      // Données simulées pour démonstration
      setStats({
        totalRows: 10000,
        totalColumns: 15,
        missingValues: 250,
        duplicates: 45,
        dataTypes: {
          'Numérique': 8,
          'Catégoriel': 5,
          'Texte': 2
        }
      });

      setQualityScore({
        overall: 78,
        completeness: 97.5,
        consistency: 85,
        uniqueness: 99.5
      });

      setBiases([
        {
          type: 'Biais de sélection',
          severity: 'medium',
          description: 'Les données montrent une surreprésentation de certaines catégories',
          recommendation: 'Équilibrer les classes en utilisant des techniques de sur-échantillonnage ou sous-échantillonnage'
        },
        {
          type: 'Valeurs aberrantes',
          severity: 'low',
          description: '2% des valeurs numériques sont considérées comme aberrantes',
          recommendation: 'Examiner ces valeurs pour déterminer si elles sont légitimes ou doivent être traitées'
        },
        {
          type: 'Biais temporel',
          severity: 'high',
          description: 'Les données sont concentrées sur une période spécifique',
          recommendation: 'Collecter des données sur une période plus large pour améliorer la généralisation'
        }
      ]);

      setAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'default';
    }
  };

  const getQualityColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-orange-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Importer un Dataset
          </CardTitle>
          <CardDescription>
            Formats supportés : CSV, JSON, XLSX (max 50 MB)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
              isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
            }`}
          >
            <input {...getInputProps()} />
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            {file ? (
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            ) : (
              <div>
                <p className="font-medium">
                  {isDragActive ? 'Déposez le fichier ici' : 'Glissez-déposez un fichier ou cliquez pour sélectionner'}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  CSV, JSON ou XLSX
                </p>
              </div>
            )}
          </div>

          {file && !analyzed && (
            <Button 
              onClick={analyzeDataset} 
              disabled={analyzing}
              className="w-full mt-4"
              size="lg"
            >
              {analyzing ? 'Analyse en cours...' : 'Analyser le Dataset'}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Analysis Results */}
      {analyzed && stats && qualityScore && (
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="quality">Qualité</TabsTrigger>
            <TabsTrigger value="biases">Biais</TabsTrigger>
            <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques Générales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Nombre de lignes</p>
                    <p className="text-2xl font-bold">{stats.totalRows.toLocaleString()}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Nombre de colonnes</p>
                    <p className="text-2xl font-bold">{stats.totalColumns}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Valeurs manquantes</p>
                    <p className="text-2xl font-bold text-orange-500">{stats.missingValues}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Doublons</p>
                    <p className="text-2xl font-bold text-red-500">{stats.duplicates}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-3">Types de données</p>
                  <div className="space-y-2">
                    {Object.entries(stats.dataTypes).map(([type, count]) => (
                      <div key={type} className="flex justify-between items-center">
                        <span className="text-sm">{type}</span>
                        <Badge variant="secondary">{count} colonnes</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quality Tab */}
          <TabsContent value="quality" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Score de Qualité</CardTitle>
                <CardDescription>
                  Évaluation de la qualité globale du dataset
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className={`text-6xl font-bold ${getQualityColor(qualityScore.overall)}`}>
                    {qualityScore.overall}%
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Score global</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Complétude</span>
                      <span className="font-medium">{qualityScore.completeness}%</span>
                    </div>
                    <Progress value={qualityScore.completeness} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Cohérence</span>
                      <span className="font-medium">{qualityScore.consistency}%</span>
                    </div>
                    <Progress value={qualityScore.consistency} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Unicité</span>
                      <span className="font-medium">{qualityScore.uniqueness}%</span>
                    </div>
                    <Progress value={qualityScore.uniqueness} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Biases Tab */}
          <TabsContent value="biases" className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {biases.length} biais potentiels détectés dans votre dataset
              </AlertDescription>
            </Alert>

            {biases.map((bias, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{bias.type}</CardTitle>
                    <Badge variant={getSeverityColor(bias.severity)}>
                      {bias.severity === 'high' ? 'Élevé' : bias.severity === 'medium' ? 'Moyen' : 'Faible'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Description</p>
                    <p className="text-sm text-muted-foreground">{bias.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Recommandation</p>
                    <p className="text-sm text-muted-foreground">{bias.recommendation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Recommendations Tab */}
          <TabsContent value="recommendations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recommandations d'Amélioration</CardTitle>
                <CardDescription>
                  Actions suggérées pour optimiser votre dataset
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3 p-3 border rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Traiter les valeurs manquantes</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Utilisez l'imputation ou supprimez les lignes avec trop de valeurs manquantes
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 border rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Supprimer les doublons</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        45 lignes dupliquées ont été identifiées et peuvent être supprimées
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 border rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Normaliser les données numériques</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Appliquez une normalisation (Min-Max ou Z-score) pour améliorer les performances du modèle
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 border rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Équilibrer les classes</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Utilisez SMOTE ou sous-échantillonnage pour corriger le déséquilibre des classes
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-3 border rounded-lg">
                    <BarChart3 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Encoder les variables catégorielles</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Appliquez One-Hot Encoding ou Label Encoding selon le type de variable
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4" variant="outline">
                  Télécharger le rapport complet (PDF)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default DatasetAnalyzer;
