
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  Shield,
  Lightbulb,
  BarChart3,
  Cog,
  Rocket
} from 'lucide-react';

const IAEntreprise = () => {
  const headerProps = {
    title: "IA pour l'Entreprise : Stratégie et Implémentation",
    subtitle: "Transformez votre organisation avec l'intelligence artificielle",
    author: "Geoffroy Streit",
    authorDescription: "Expert en transformation digitale et IA d'entreprise",
    duration: "3-4 heures",
    level: "Intermédiaire",
    audience: "Dirigeants, managers et consultants",
    tags: ["IA Entreprise", "Stratégie", "Transformation", "ROI", "2024"]
  };

  const module1Data = [
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Diagnostic stratégique",
      items: [
        "Évaluation de la maturité digitale",
        "Identification des cas d'usage prioritaires",
        "Analyse de l'écosystème concurrentiel",
        "Cartographie des ressources disponibles",
        "Définition des objectifs stratégiques"
      ]
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: "Business case et ROI",
      items: [
        "Calcul du retour sur investissement",
        "Métriques de performance clés",
        "Analyse coûts-bénéfices",
        "Modèles de financement",
        "Présentation aux décideurs"
      ]
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Conduite du changement",
      items: [
        "Gestion de la résistance au changement",
        "Formation des équipes",
        "Communication interne",
        "Accompagnement des utilisateurs",
        "Culture data-driven"
      ]
    }
  ];

  const didYouKnowItems = [
    {
      title: "ROI de l'IA",
      content: "Selon McKinsey, les entreprises qui adoptent l'IA de manière stratégique voient une augmentation de leur marge opérationnelle de 3 à 15% en moyenne."
    },
    {
      title: "Facteur humain",
      content: "70% des projets IA échouent non pas pour des raisons techniques, mais à cause de la résistance au changement et du manque d'adoption par les utilisateurs."
    },
    {
      title: "Time-to-market",
      content: "Les entreprises qui déploient l'IA de façon progressive (approche agile) réduisent leur time-to-market de 40% par rapport aux approches traditionnelles."
    }
  ];

  return (
    <>
      <Hero
        title={headerProps.title}
        subtitle={headerProps.subtitle}
      />

      <section className="section-container">
        <BackToResourcesButton />
        <CourseHeader {...headerProps} />

        {/* Introduction */}
        <CourseModule
          title="Introduction : L'IA comme levier de transformation"
          description="Comprendre les enjeux et opportunités de l'IA en entreprise"
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                L'intelligence artificielle n'est plus une technologie d'avenir : c'est un impératif 
                stratégique pour rester compétitif. Ce cours vous guide dans la transformation de votre 
                organisation, de la stratégie à l'implémentation concrète.
              </p>
              
              <ZoomOn title="Pourquoi l'IA est-elle devenue incontournable ?">
                <p className="mb-3">
                  Dans un monde où les données sont le nouveau pétrole, l'IA permet aux entreprises 
                  de transformer cette ressource en avantage concurrentiel. Elle automatise les tâches 
                  répétitives, améliore la prise de décision et crée de nouveaux modèles économiques.
                </p>
                <p>
                  Les entreprises qui n'adoptent pas l'IA risquent de se faire distancer par leurs 
                  concurrents plus agiles et data-driven.
                </p>
              </ZoomOn>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 : Stratégie */}
        <CourseModule
          title="Module 1 : Élaborer sa stratégie IA"
          description="De la vision à la roadmap : construire une stratégie IA gagnante"
          modules={module1Data}
        />

        <DidYouKnow items={didYouKnowItems} />

        {/* Module 2 : Implémentation */}
        <CourseModule
          title="Module 2 : Mise en œuvre opérationnelle"
          description="Passer de la stratégie à l'action avec une approche pragmatique"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="h-5 w-5 text-primary" />
                  Infrastructure et gouvernance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary">Technique</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Architecture cloud et on-premise</li>
                    <li>• Gouvernance des données</li>
                    <li>• Sécurité et conformité (RGPD)</li>
                    <li>• Outils et plateformes IA</li>
                    <li>• Intégration avec l'existant</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Déploiement et scale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary">Opérationnel</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Approche pilote puis scale</li>
                    <li>• Centre d'excellence IA</li>
                    <li>• Partenariats stratégiques</li>
                    <li>• Mesure et optimisation continue</li>
                    <li>• Plan de contingence</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 3 : Cas d'usage sectoriels */}
        <CourseModule
          title="Module 3 : Cas d'usage par secteur"
          description="Applications concrètes de l'IA selon votre industrie"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Services Financiers</h4>
                <ul className="text-sm space-y-1">
                  <li>• Détection de fraude</li>
                  <li>• Credit scoring</li>
                  <li>• Trading algorithmique</li>
                  <li>• Chatbots clients</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Retail & E-commerce</h4>
                <ul className="text-sm space-y-1">
                  <li>• Recommandations produits</li>
                  <li>• Optimisation des prix</li>
                  <li>• Gestion des stocks</li>
                  <li>• Personnalisation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Industrie & Manufacture</h4>
                <ul className="text-sm space-y-1">
                  <li>• Maintenance prédictive</li>
                  <li>• Contrôle qualité</li>
                  <li>• Optimisation énergétique</li>
                  <li>• Supply chain</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Vers une entreprise augmentée par l'IA"
          description="Récapitulatif de votre parcours et prochaines étapes"
          learningPoints={[
            "Élaborer une stratégie IA alignée sur les objectifs business",
            "Calculer et présenter le ROI de vos projets IA",
            "Gérer la transformation organisationnelle",
            "Implémenter une gouvernance des données efficace",
            "Déployer et faire évoluer vos solutions IA"
          ]}
          nextSteps={[
            "Réaliser un audit IA de votre organisation",
            "Identifier 3 cas d'usage prioritaires",
            "Constituer votre équipe projet IA",
            "Lancer un pilote avec mesure d'impact",
            "Développer votre centre d'excellence IA"
          ]}
        />
      </section>
    </>
  );
};

export default IAEntreprise;
