import React, { useState } from 'react';
import { Upload, FileText, BarChart3, AlertCircle, Download, Eye, TrendingUp, PieChart, Activity, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDropzone } from 'react-dropzone';
import { Separator } from '@/components/ui/separator';

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
          severity: 'high',
          description: 'Les données montrent une surreprésentation de certaines catégories (65% classe A vs 35% classes B-E)',
          recommendation: 'Équilibrer les classes en utilisant SMOTE (Synthetic Minority Over-sampling Technique) ou sous-échantillonnage de la classe majoritaire'
        },
        {
          type: 'Valeurs aberrantes (Outliers)',
          severity: 'low',
          description: '2% des valeurs numériques sont considérées comme aberrantes (au-delà de 3 écarts-types)',
          recommendation: 'Examiner ces valeurs pour déterminer si elles sont légitimes ou doivent être traitées avec une transformation logarithmique ou un cap'
        },
        {
          type: 'Biais temporel',
          severity: 'high',
          description: 'Les données sont concentrées sur une période spécifique (80% des données de 2023)',
          recommendation: 'Collecter des données sur une période plus large (2020-2024) pour améliorer la généralisation et la robustesse du modèle'
        },
        {
          type: 'Corrélation excessive',
          severity: 'medium',
          description: 'Plusieurs features présentent une corrélation >0.9, pouvant causer de la multicolinéarité',
          recommendation: 'Appliquer une analyse PCA (Principal Component Analysis) ou supprimer les features redondantes'
        },
        {
          type: 'Distribution déséquilibrée',
          severity: 'medium',
          description: 'Certaines variables catégorielles ont une distribution très déséquilibrée (classe rare <5%)',
          recommendation: 'Regrouper les catégories rares ou utiliser des techniques d\'encodage adaptées comme Target Encoding'
        }
      ]);

      setAnalyzing(false);
      setAnalyzed(true);
    }, 2500);
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
    if (score >= 80) return 'text-primary';
    if (score >= 60) return 'text-destructive';
    return 'text-destructive';
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="quality">Qualité</TabsTrigger>
            <TabsTrigger value="distribution">Distribution</TabsTrigger>
            <TabsTrigger value="biases">Biais</TabsTrigger>
            <TabsTrigger value="recommendations">Actions</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Statistiques Générales
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
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
                      <p className="text-2xl font-bold text-destructive">{stats.missingValues}</p>
                      <p className="text-xs text-muted-foreground">({((stats.missingValues / (stats.totalRows * stats.totalColumns)) * 100).toFixed(2)}%)</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Doublons</p>
                      <p className="text-2xl font-bold text-destructive">{stats.duplicates}</p>
                      <p className="text-xs text-muted-foreground">({((stats.duplicates / stats.totalRows) * 100).toFixed(2)}%)</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
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

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Métriques Avancées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Taille mémoire estimée</span>
                      <span className="font-bold">~23.4 MB</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Densité des données</span>
                      <span className="font-bold">98.3%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Variables numériques</span>
                      <span className="font-bold">8 / 15</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Variables catégorielles</span>
                      <span className="font-bold">5 / 15</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">Cardinalité moyenne</span>
                      <span className="font-bold">~342 valeurs uniques</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Prêt pour l'entraînement</span>
                      <Badge variant="outline" className="text-destructive border-destructive">
                        Nettoyage requis
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Aperçu des colonnes
                </CardTitle>
                <CardDescription>
                  Détails sur les principales colonnes du dataset
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['user_id', 'age', 'income', 'category', 'purchase_date'].map((col, idx) => (
                    <div key={col} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{col}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Type: {idx < 3 ? 'Numérique' : 'Catégoriel'} • {Math.floor(Math.random() * 50)} valeurs manquantes
                        </p>
                      </div>
                      <Badge variant="outline">
                        {idx === 0 ? 'Unique' : idx < 3 ? 'Continue' : 'Discrète'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quality Tab */}
          <TabsContent value="quality" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Score de Qualité Global</CardTitle>
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
                    <Badge 
                      variant={qualityScore.overall >= 80 ? "default" : qualityScore.overall >= 60 ? "secondary" : "destructive"}
                      className="mt-2"
                    >
                      {qualityScore.overall >= 80 ? "Excellente qualité" : qualityScore.overall >= 60 ? "Qualité moyenne" : "Amélioration nécessaire"}
                    </Badge>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          Complétude
                        </span>
                        <span className="font-medium">{qualityScore.completeness}%</span>
                      </div>
                      <Progress value={qualityScore.completeness} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Mesure la proportion de valeurs non-manquantes
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Cohérence
                        </span>
                        <span className="font-medium">{qualityScore.consistency}%</span>
                      </div>
                      <Progress value={qualityScore.consistency} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Évalue la conformité des formats et types de données
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-accent-foreground" />
                          Unicité
                        </span>
                        <span className="font-medium">{qualityScore.uniqueness}%</span>
                      </div>
                      <Progress value={qualityScore.uniqueness} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Mesure l'absence de doublons dans le dataset
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Problèmes Détectés</CardTitle>
                  <CardDescription>
                    Liste des problèmes de qualité identifiés
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <span className="font-semibold">Critique:</span> 250 valeurs manquantes dans des colonnes importantes
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <span className="font-semibold">Attention:</span> 45 lignes dupliquées détectées
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <span className="font-semibold">Info:</span> Formats de dates incohérents dans 3 colonnes
                    </AlertDescription>
                  </Alert>

                  <Separator />

                  <div className="space-y-2 pt-2">
                    <h4 className="text-sm font-semibold">Recommandations prioritaires</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Imputer ou supprimer les valeurs manquantes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Dédupliquer les lignes identiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Standardiser les formats de dates</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Distribution Tab */}
          <TabsContent value="distribution" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Distribution des Données
                </CardTitle>
                <CardDescription>
                  Visualisation de la répartition des valeurs dans le dataset
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="bg-blue-500/10 border-blue-500/50">
                  <Activity className="h-4 w-4 text-blue-500" />
                  <AlertDescription className="text-foreground">
                    <span className="font-semibold">Fonctionnalité en développement:</span> Les graphiques interactifs de distribution seront bientôt disponibles
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Distribution des classes (variable cible)</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Classe A</span>
                            <span className="font-medium">65%</span>
                          </div>
                          <Progress value={65} className="h-3" />
                        </div>
                        <Badge>6,500 lignes</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Classe B</span>
                            <span className="font-medium">20%</span>
                          </div>
                          <Progress value={20} className="h-3" />
                        </div>
                        <Badge>2,000 lignes</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Classe C</span>
                            <span className="font-medium">10%</span>
                          </div>
                          <Progress value={10} className="h-3" />
                        </div>
                        <Badge>1,000 lignes</Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span>Autres</span>
                            <span className="font-medium">5%</span>
                          </div>
                          <Progress value={5} className="h-3" />
                        </div>
                        <Badge>500 lignes</Badge>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium mb-3">Statistiques descriptives (variables numériques)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Colonne</th>
                            <th className="text-right p-2">Min</th>
                            <th className="text-right p-2">Max</th>
                            <th className="text-right p-2">Moyenne</th>
                            <th className="text-right p-2">Médiane</th>
                            <th className="text-right p-2">Écart-type</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 font-medium">age</td>
                            <td className="text-right p-2">18</td>
                            <td className="text-right p-2">85</td>
                            <td className="text-right p-2">42.3</td>
                            <td className="text-right p-2">41.0</td>
                            <td className="text-right p-2">15.2</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">income</td>
                            <td className="text-right p-2">15,000</td>
                            <td className="text-right p-2">250,000</td>
                            <td className="text-right p-2">65,430</td>
                            <td className="text-right p-2">58,000</td>
                            <td className="text-right p-2">28,540</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">score</td>
                            <td className="text-right p-2">0</td>
                            <td className="text-right p-2">100</td>
                            <td className="text-right p-2">72.5</td>
                            <td className="text-right p-2">75.0</td>
                            <td className="text-right p-2">12.8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                <CardTitle>Plan d'Action Recommandé</CardTitle>
                <CardDescription>
                  Actions prioritaires pour optimiser votre dataset avant l'entraînement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-3 p-4 border-l-4 border-l-destructive bg-destructive/5 rounded-lg">
                    <Badge variant="destructive" className="h-6">Priorité 1</Badge>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Traiter les valeurs manquantes (2.5%)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Action:</strong> Imputation par la médiane pour les variables numériques, par le mode pour les catégorielles
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Colonnes concernées: age (15), income (89), score (146)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 border-l-4 border-l-primary bg-primary/5 rounded-lg">
                    <Badge className="h-6 bg-primary text-primary-foreground">Priorité 2</Badge>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Équilibrer les classes (déséquilibre 65/35)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Action:</strong> Appliquer SMOTE pour sur-échantillonner les classes minoritaires
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Cible: obtenir une répartition 45/30/15/10 pour améliorer la généralisation
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 border-l-4 border-l-primary bg-primary/5 rounded-lg">
                    <Badge className="h-6 bg-primary text-primary-foreground">Priorité 2</Badge>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Supprimer les doublons (0.45%)</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Action:</strong> Utiliser drop_duplicates() pour éliminer les 45 lignes identiques
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Vérifier si les doublons sont légitimes (ex: achats multiples du même client)
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 border-l-4 border-l-secondary bg-secondary/5 rounded-lg">
                    <Badge className="h-6 bg-secondary text-secondary-foreground">Priorité 3</Badge>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Normaliser les données numériques</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Action:</strong> StandardScaler (Z-score) ou MinMaxScaler selon l'algorithme choisi
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Recommandé pour les réseaux de neurones et SVM
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 border-l-4 border-l-secondary bg-secondary/5 rounded-lg">
                    <Badge className="h-6 bg-secondary text-secondary-foreground">Priorité 3</Badge>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Encoder les variables catégorielles</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Action:</strong> One-Hot Encoding pour les variables nominales, Label Encoding pour les ordinales
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 5 colonnes catégorielles à encoder
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 p-4 border-l-4 border-l-accent bg-accent/5 rounded-lg">
                    <Badge className="h-6 bg-accent text-accent-foreground">Bonus</Badge>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Feature Engineering avancé</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        <strong>Action:</strong> Créer des features dérivées (ratios, interactions, agrégations temporelles)
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        💡 Peut améliorer significativement les performances du modèle
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button className="flex-1 gap-2" variant="outline">
                    <Download className="h-4 w-4" />
                    Télécharger le rapport (PDF)
                  </Button>
                  <Button className="flex-1 gap-2" disabled>
                    <Activity className="h-4 w-4" />
                    Script de nettoyage Python
                  </Button>
                </div>

                <Alert className="bg-primary/10 border-primary/50">
                  <Activity className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-sm text-foreground">
                    <span className="font-semibold">À venir:</span> Génération automatique de scripts Python/R pour appliquer toutes les recommandations
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default DatasetAnalyzer;
