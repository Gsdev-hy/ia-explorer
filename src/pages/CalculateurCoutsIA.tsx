
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calculator, TrendingUp, Users, Server, User, DollarSign, Lightbulb } from 'lucide-react';
import Hero from '@/components/Hero';

interface CostCalculation {
  development: number;
  infrastructure: number;
  maintenance: number;
  training: number;
  total: number;
  monthlyOperational: number;
  roi: number;
}

const CalculateurCoutsIA = () => {
  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState([2]);
  const [teamSize, setTeamSize] = useState([3]);
  const [duration, setDuration] = useState([6]);
  const [dataVolume, setDataVolume] = useState('');
  const [expectedROI, setExpectedROI] = useState([150]);
  const [calculation, setCalculation] = useState<CostCalculation | null>(null);

  const projectTypes = [
    { value: 'chatbot', label: 'Chatbot / Assistant virtuel', multiplier: 1.0 },
    { value: 'vision', label: 'Vision par ordinateur', multiplier: 1.5 },
    { value: 'nlp', label: 'Traitement du langage naturel', multiplier: 1.3 },
    { value: 'predictive', label: 'Analyse prédictive', multiplier: 1.2 },
    { value: 'recommendation', label: 'Système de recommandation', multiplier: 1.1 },
    { value: 'automation', label: 'Automatisation de processus', multiplier: 1.4 }
  ];

  const dataVolumeOptions = [
    { value: 'small', label: 'Petit (< 1GB)', multiplier: 0.8 },
    { value: 'medium', label: 'Moyen (1-100GB)', multiplier: 1.0 },
    { value: 'large', label: 'Grand (100GB-1TB)', multiplier: 1.5 },
    { value: 'huge', label: 'Très grand (> 1TB)', multiplier: 2.0 }
  ];

  const calculateCosts = () => {
    if (!projectType || !dataVolume) return;

    const selectedProject = projectTypes.find(p => p.value === projectType);
    const selectedDataVolume = dataVolumeOptions.find(d => d.value === dataVolume);
    
    if (!selectedProject || !selectedDataVolume) return;

    // Calculs basés sur des moyennes du marché
    const baseDailyCost = 800; // Coût journalier moyen d'un développeur IA
    const complexityMultiplier = complexity[0] / 3; // Normalisation sur 3
    const projectMultiplier = selectedProject.multiplier;
    const dataMultiplier = selectedDataVolume.multiplier;

    // Calcul des coûts
    const development = baseDailyCost * teamSize[0] * duration[0] * 22 * complexityMultiplier * projectMultiplier;
    const infrastructure = development * 0.15 * dataMultiplier; // 15% du dev, ajusté par volume de données
    const training = teamSize[0] * 2000 * complexityMultiplier; // Formation équipe
    const maintenance = development * 0.20; // 20% du coût de développement par an
    
    const total = development + infrastructure + training + maintenance;
    const monthlyOperational = (infrastructure + (maintenance / 12));
    const roi = (expectedROI[0] / 100) * total;

    setCalculation({
      development: Math.round(development),
      infrastructure: Math.round(infrastructure),
      maintenance: Math.round(maintenance),
      training: Math.round(training),
      total: Math.round(total),
      monthlyOperational: Math.round(monthlyOperational),
      roi: Math.round(roi)
    });
  };

  useEffect(() => {
    calculateCosts();
  }, [projectType, complexity, teamSize, duration, dataVolume, expectedROI]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <Hero
        title="Calculateur de coûts IA"
        subtitle="Estimez les coûts d'implémentation de votre solution d'intelligence artificielle et évaluez le retour sur investissement potentiel."
      />

      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Header avec info auteur */}
          <Card className="mb-8 bg-gradient-to-r from-primary/5 to-green-50 dark:to-green-950/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Créé par Geoffroy Streit</CardTitle>
                  <CardDescription>
                    Outil pratique pour la planification budgétaire de projets IA
                  </CardDescription>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ce calculateur vous aide à estimer les coûts réels d'un projet IA en prenant en compte tous les aspects : 
                développement, infrastructure, formation, maintenance et retour sur investissement.
              </p>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulaire de configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Configuration du projet
                </CardTitle>
                <CardDescription>
                  Définissez les paramètres de votre projet IA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="project-type">Type de projet IA</Label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le type de projet" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Complexité du projet</Label>
                  <div className="px-2">
                    <Slider
                      value={complexity}
                      onValueChange={setComplexity}
                      max={5}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Simple</span>
                      <span>Complexe</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Niveau de complexité : {complexity[0]}/5
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Taille de l'équipe</Label>
                  <div className="px-2">
                    <Slider
                      value={teamSize}
                      onValueChange={setTeamSize}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 personne</span>
                      <span>10+ personnes</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Équipe de {teamSize[0]} développeur{teamSize[0] > 1 ? 's' : ''}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Durée de développement (mois)</Label>
                  <div className="px-2">
                    <Slider
                      value={duration}
                      onValueChange={setDuration}
                      max={24}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 mois</span>
                      <span>24+ mois</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Développement sur {duration[0]} mois
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="data-volume">Volume de données</Label>
                  <Select value={dataVolume} onValueChange={setDataVolume}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le volume de données" />
                    </SelectTrigger>
                    <SelectContent>
                      {dataVolumeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>ROI attendu (%)</Label>
                  <div className="px-2">
                    <Slider
                      value={expectedROI}
                      onValueChange={setExpectedROI}
                      max={500}
                      min={50}
                      step={25}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>50%</span>
                      <span>500%+</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ROI attendu : {expectedROI[0]}%
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Résultats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Estimation des coûts
                </CardTitle>
                <CardDescription>
                  Breakdown détaillé des coûts estimés
                </CardDescription>
              </CardHeader>
              <CardContent>
                {calculation ? (
                  <div className="space-y-6">
                    {/* Coûts détaillés */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Développement</span>
                        <span className="font-medium">{formatCurrency(calculation.development)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Infrastructure cloud</span>
                        <span className="font-medium">{formatCurrency(calculation.infrastructure)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Formation équipe</span>
                        <span className="font-medium">{formatCurrency(calculation.training)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Maintenance (1ère année)</span>
                        <span className="font-medium">{formatCurrency(calculation.maintenance)}</span>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Coût total initial</span>
                        <span className="text-primary">{formatCurrency(calculation.total)}</span>
                      </div>
                    </div>

                    {/* Métriques clés */}
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-blue-50 dark:bg-blue-950/20">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Server className="h-4 w-4 text-blue-600" />
                            <span className="text-sm font-medium">Coûts mensuels</span>
                          </div>
                          <p className="text-lg font-semibold text-blue-600">
                            {formatCurrency(calculation.monthlyOperational)}
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-green-50 dark:bg-green-950/20">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-medium">ROI projeté</span>
                          </div>
                          <p className="text-lg font-semibold text-green-600">
                            {formatCurrency(calculation.roi)}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Conseils */}
                    <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                      <CardContent className="pt-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-yellow-600" />
                          <span className="text-sm font-medium">Conseils d'optimisation</span>
                        </div>
                        <ul className="text-xs space-y-1 text-muted-foreground">
                          <li>• Commencez par un MVP pour valider l'approche</li>
                          <li>• Considérez les solutions cloud managées pour réduire l'infrastructure</li>
                          <li>• Planifiez la formation de l'équipe en amont</li>
                          <li>• Prévoyez 20-30% de budget supplémentaire pour les imprévus</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Configurez votre projet pour voir l'estimation des coûts</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Section informative */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Facteurs influençant les coûts</CardTitle>
              <CardDescription>
                Comprendre les éléments qui impactent le budget d'un projet IA
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Badge variant="outline">Complexité</Badge>
                  <p className="text-sm text-muted-foreground">
                    Plus le problème est complexe, plus il nécessite d'expertise spécialisée 
                    et de temps de développement.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">Données</Badge>
                  <p className="text-sm text-muted-foreground">
                    Le volume et la qualité des données impactent les coûts de stockage, 
                    traitement et nettoyage.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">Infrastructure</Badge>
                  <p className="text-sm text-muted-foreground">
                    Les besoins en puissance de calcul varient selon le type de modèle 
                    et la charge de travail.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline">Expertise</Badge>
                  <p className="text-sm text-muted-foreground">
                    Les talents en IA sont rares et coûteux. La formation de l'équipe 
                    est un investissement nécessaire.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default CalculateurCoutsIA;
