
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
  Shield, 
  Scale, 
  Eye, 
  Heart, 
  AlertTriangle, 
  CheckCircle2,
  Users,
  Globe,
  BookOpen,
  Gavel
} from 'lucide-react';

const IAEthique = () => {
  const headerProps = {
    title: "IA Éthique et Responsable : Guide Pratique",
    subtitle: "Développer et déployer l'IA de manière éthique et responsable",
    author: "Geoffroy Streit",
    authorDescription: "Expert en éthique de l'IA et gouvernance technologique",
    duration: "2-3 heures",
    level: "Intermédiaire",
    audience: "Développeurs, managers et décideurs",
    tags: ["IA Éthique", "Responsabilité", "Biais", "Transparence", "2024"]
  };

  const module1Data = [
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: "Principes éthiques fondamentaux",
      items: [
        "Équité et non-discrimination",
        "Transparence et explicabilité",
        "Responsabilité et redevabilité",
        "Respect de la vie privée",
        "Bienfaisance et non-malfaisance"
      ]
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: "Identification des risques",
      items: [
        "Biais algorithmiques et leurs sources",
        "Discrimination involontaire",
        "Atteintes à la vie privée",
        "Manipulation et désinformation",
        "Impact sur l'emploi et la société"
      ]
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Cadre réglementaire",
      items: [
        "IA Act européen : obligations",
        "RGPD et protection des données",
        "Standards internationaux (ISO/IEC)",
        "Certifications et audits",
        "Conformité sectorielle"
      ]
    }
  ];

  const didYouKnowItems = [
    {
      title: "Coût des biais",
      content: "Une étude MIT a révélé que les systèmes de reconnaissance faciale ont un taux d'erreur 35% plus élevé pour les femmes à peau foncée que pour les hommes à peau claire."
    },
    {
      title: "IA Act européen",
      content: "L'IA Act impose des amendes pouvant aller jusqu'à 7% du chiffre d'affaires mondial pour les entreprises qui ne respectent pas les règles sur les systèmes IA à haut risque."
    },
    {
      title: "Explicabilité",
      content: "78% des consommateurs font plus confiance aux entreprises qui peuvent expliquer comment leurs algorithmes prennent des décisions les concernant."
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
          title="Introduction : L'impératif éthique de l'IA"
          description="Pourquoi l'éthique n'est pas optionnelle dans l'IA"
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                L'IA transforme notre société, mais avec cette puissance vient une grande responsabilité. 
                Ce cours vous guide pour développer et déployer des systèmes IA éthiques, transparents 
                et respectueux des droits humains.
              </p>
              
              <ZoomOn title="L'urgence de l'IA responsable">
                <p className="mb-3">
                  Chaque jour, l'IA prend des millions de décisions qui affectent la vie des gens : 
                  qui obtient un prêt, qui est embauché, qui reçoit quelle publicité. Ces décisions 
                  peuvent perpétuer ou amplifier des inégalités existantes si nous ne prenons pas 
                  les bonnes précautions.
                </p>
                <p>
                  L'éthique de l'IA n'est pas qu'une question morale : c'est aussi un impératif 
                  business et réglementaire dans un monde où la confiance devient un avantage concurrentiel.
                </p>
              </ZoomOn>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 : Fondamentaux */}
        <CourseModule
          title="Module 1 : Fondamentaux de l'IA éthique"
          description="Maîtriser les concepts et principes essentiels"
          modules={module1Data}
        />

        <DidYouKnow items={didYouKnowItems} />

        {/* Module 2 : Méthodologies pratiques */}
        <CourseModule
          title="Module 2 : Méthodologies et outils"
          description="Techniques concrètes pour développer une IA responsable"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Audit et évaluation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">Méthodologie</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Tests de biais algorithmiques</li>
                    <li>• Évaluation de l'équité</li>
                    <li>• Analyse d'impact éthique</li>
                    <li>• Audit de transparence</li>
                    <li>• Validation par des experts</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Bonnes pratiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">Implémentation</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Équipes diverses et inclusives</li>
                    <li>• Documentation éthique</li>
                    <li>• Tests utilisateurs variés</li>
                    <li>• Surveillance continue</li>
                    <li>• Mécanismes de recours</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 3 : Gouvernance */}
        <CourseModule
          title="Module 3 : Gouvernance et conformité"
          description="Mettre en place une gouvernance IA robuste"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Gavel className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Comité d'éthique IA</h4>
                <ul className="text-sm space-y-1">
                  <li>• Composition multidisciplinaire</li>
                  <li>• Processus de décision</li>
                  <li>• Escalade des enjeux</li>
                  <li>• Revue périodique</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Charte éthique</h4>
                <ul className="text-sm space-y-1">
                  <li>• Valeurs organisationnelles</li>
                  <li>• Lignes directrices</li>
                  <li>• Procédures opérationnelles</li>
                  <li>• Formation du personnel</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-medium mb-2">Conformité réglementaire</h4>
                <ul className="text-sm space-y-1">
                  <li>• Veille réglementaire</li>
                  <li>• Analyse d'impact DPIA</li>
                  <li>• Registres de conformité</li>
                  <li>• Reporting aux autorités</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 4 : Cas pratiques */}
        <CourseModule
          title="Module 4 : Études de cas et dilemmes éthiques"
          description="Analyser des situations réelles et leurs enjeux"
        >
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-medium text-red-700 dark:text-red-400 mb-2">
                    Cas d'étude : Recrutement algorithmique
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Une grande entreprise utilise un algorithme pour présélectionner les CV. 
                    L'analyse révèle un biais contre les candidatures féminines dans le secteur tech.
                  </p>
                  <div className="mt-3 text-sm">
                    <strong>Enjeux :</strong> Discrimination, équité, transparence, responsabilité légale
                  </div>
                </div>

                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-2">
                    Cas d'étude : IA médicale et diagnostic
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Un système d'IA aide au diagnostic médical mais ses recommandations ne sont 
                    pas explicables. Comment garantir la confiance des médecins et patients ?
                  </p>
                  <div className="mt-3 text-sm">
                    <strong>Enjeux :</strong> Explicabilité, responsabilité médicale, sécurité patient
                  </div>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">
                    Cas d'étude : Modération de contenu
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Une plateforme sociale utilise l'IA pour modérer les contenus. Comment équilibrer 
                    liberté d'expression et protection des utilisateurs ?
                  </p>
                  <div className="mt-3 text-sm">
                    <strong>Enjeux :</strong> Liberté d'expression, protection, biais culturels
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Vers une IA au service de l'humanité"
          description="Récapitulatif et engagement pour une IA responsable"
          learningPoints={[
            "Maîtriser les principes éthiques fondamentaux de l'IA",
            "Identifier et mitiger les biais algorithmiques",
            "Implémenter une gouvernance IA robuste",
            "Assurer la conformité réglementaire",
            "Développer une culture de responsabilité"
          ]}
          nextSteps={[
            "Réaliser un audit éthique de vos systèmes IA",
            "Rédiger votre charte éthique IA",
            "Former vos équipes aux enjeux éthiques",
            "Mettre en place un comité d'éthique",
            "Suivre l'évolution réglementaire"
          ]}
        />
      </section>
    </>
  );
};

export default IAEthique;
