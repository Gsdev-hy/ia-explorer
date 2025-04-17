
import React from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, FileText, Globe, Scale, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ExploreMoreSection from '@/components/common/ExploreMoreSection';

/**
 * Page sur l'éthique et la gouvernance de l'IA
 * @returns {JSX.Element} Le composant de la page Éthique et Gouvernance
 */
const EthiqueGouvernance = () => {
  const exploreLinks = [
    {
      to: "/niveaux-ia",
      label: "Niveaux d'IA",
      variant: "default" as const
    },
    {
      to: "/ethique",
      label: "Éthique de l'IA",
      variant: "outline" as const
    },
    {
      to: "/glossaire",
      label: "Glossaire des termes",
      variant: "secondary" as const
    }
  ];

  return (
    <>
      <Hero
        title="Éthique et Gouvernance de l'IA"
        subtitle="Comprendre les cadres réglementaires, les enjeux éthiques et les initiatives de gouvernance liés au développement de l'intelligence artificielle."
      />

      <section className="section-container">
        <div className="max-w-3xl mx-auto mb-12">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/niveaux-ia" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour aux niveaux d'IA
            </Link>
          </Button>

          <SectionHeading
            pretitle="Vue d'ensemble"
            title="Cadres de gouvernance pour l'IA"
            description="À mesure que l'IA progresse vers des niveaux supérieurs de capacités, la mise en place de cadres robustes de gouvernance devient cruciale pour assurer un développement responsable et bénéfique pour l'humanité."
            center={false}
          />

          <div className="prose prose-slate dark:prose-invert max-w-none mt-8">
            <p>
              La gouvernance de l'IA englobe l'ensemble des mécanismes, principes, normes et institutions qui encadrent le développement, le déploiement et l'utilisation des systèmes d'intelligence artificielle. Elle vise à maximiser les bénéfices de l'IA tout en minimisant ses risques potentiels pour les individus et la société.
            </p>
            <p>
              Face à l'évolution rapide des capacités de l'IA, la gouvernance doit être adaptative, prospective et inclusive, impliquant une diversité de parties prenantes : chercheurs, entreprises, gouvernements, organisations internationales et société civile.
            </p>
          </div>
        </div>

        <Tabs defaultValue="reglementations" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full mb-8">
            <TabsTrigger value="reglementations" className="flex items-center gap-2">
              <Scale className="h-4 w-4" />
              <span className="hidden sm:inline">Réglementations</span>
            </TabsTrigger>
            <TabsTrigger value="initiatives" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Initiatives</span>
            </TabsTrigger>
            <TabsTrigger value="principes" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Principes</span>
            </TabsTrigger>
            <TabsTrigger value="defis" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Défis</span>
            </TabsTrigger>
            <TabsTrigger value="international" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">International</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="reglementations">
            <Card>
              <CardHeader>
                <CardTitle>Cadres réglementaires</CardTitle>
                <CardDescription>
                  Les principales réglementations encadrant l'IA à travers le monde
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">AI Act européen</h3>
                    <p className="text-muted-foreground">
                      Premier cadre réglementaire complet au monde pour l'IA, adopté en 2023, qui classe les systèmes d'IA selon leur niveau de risque :
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                      <li>Risque inacceptable (interdits)</li>
                      <li>Risque élevé (obligations strictes)</li>
                      <li>Risque limité (obligations de transparence)</li>
                      <li>Risque minimal (peu ou pas de régulation)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">RGPD (Europe)</h3>
                    <p className="text-muted-foreground">
                      Bien que centré sur la protection des données personnelles, le RGPD encadre indirectement l'IA par ses dispositions sur :
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                      <li>Le droit à l'explication des décisions automatisées</li>
                      <li>Les évaluations d'impact relatives à la protection des données</li>
                      <li>Le principe de minimisation des données</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">Blueprint for an AI Bill of Rights (États-Unis)</h3>
                    <p className="text-muted-foreground">
                      Document non contraignant publié en 2022 qui propose cinq principes pour guider la conception et le déploiement de systèmes d'IA :
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                      <li>Des systèmes sûrs et efficaces</li>
                      <li>Protection contre la discrimination algorithmique</li>
                      <li>Protection des données</li>
                      <li>Notification et explication</li>
                      <li>Alternatives, options de désactivation et recours humain</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">Décret exécutif sur l'IA (États-Unis)</h3>
                    <p className="text-muted-foreground">
                      Signé en octobre 2023, ce décret établit de nouvelles normes de sécurité et de protection pour l'IA, exigeant que les développeurs de systèmes d'IA avancés partagent les résultats de leurs tests de sécurité avec le gouvernement fédéral.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    En savoir plus sur l'AI Act
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="initiatives">
            <Card>
              <CardHeader>
                <CardTitle>Initiatives de gouvernance</CardTitle>
                <CardDescription>
                  Organisations et initiatives notables travaillant sur la gouvernance de l'IA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold">Partnership on AI</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Coalition fondée en 2016 par Amazon, Google, Facebook, IBM et Microsoft, qui a depuis élargi ses membres pour inclure des organisations à but non lucratif, des institutions académiques et des entreprises du monde entier.
                    </p>
                    <p className="text-sm mt-2">
                      Travaille sur les meilleures pratiques en matière d'IA, la recherche sur l'alignement des valeurs, et l'élaboration de normes industrielles.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold">Center for AI Safety (CAIS)</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Organisation à but non lucratif qui se concentre sur la réduction des risques liés à l'IA avancée.
                    </p>
                    <p className="text-sm mt-2">
                      Mène des recherches techniques sur l'alignement et la sécurité de l'IA, et promeut une gouvernance internationale des systèmes d'IA puissants.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold">AI Governance International (AGI)</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Réseau mondial d'experts qui travaillent sur des cadres de gouvernance pour l'IA.
                    </p>
                    <p className="text-sm mt-2">
                      Facilite le dialogue entre différentes parties prenantes et promeut la coopération internationale sur les questions de gouvernance de l'IA.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold">Global Partnership on AI (GPAI)</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Initiative internationale lancée en 2020 pour guider le développement responsable de l'IA basée sur les droits humains, l'inclusion, la diversité, l'innovation et la croissance économique.
                    </p>
                    <p className="text-sm mt-2">
                      Regroupe des experts de la science, de l'industrie, de la société civile et des gouvernements pour combler l'écart entre la théorie et la pratique sur l'IA.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold">The Future of Life Institute</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Organisation qui travaille à réduire les risques existentiels, notamment ceux liés à l'IA avancée.
                    </p>
                    <p className="text-sm mt-2">
                      A publié en 2015 la "Lettre ouverte sur l'IA" et en 2023 une lettre appelant à une pause dans le développement des systèmes d'IA plus puissants que GPT-4.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-semibold">Observatoire des impacts de l'IA</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Initiative francophone basée au Québec qui étudie les impacts sociaux, économiques et éthiques de l'IA.
                    </p>
                    <p className="text-sm mt-2">
                      Développe des outils d'évaluation et de certification pour les systèmes d'IA, en mettant l'accent sur leur responsabilité sociale.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="principes">
            <Card>
              <CardHeader>
                <CardTitle>Principes directeurs</CardTitle>
                <CardDescription>
                  Cadres éthiques et principes fondamentaux pour une IA responsable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">Principes d'Asilomar</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Développés lors d'une conférence en 2017, ces 23 principes portent sur la recherche, l'éthique et les valeurs, et les questions à long terme liées à l'IA.
                    </p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="font-medium text-sm">Sécurité</p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Les systèmes d'IA devraient être sûrs et sécurisés tout au long de leur cycle de vie.
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="font-medium text-sm">Transparence des échecs</p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Si un système d'IA cause un préjudice, il devrait être possible de déterminer pourquoi.
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="font-medium text-sm">Alignement des valeurs</p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Les systèmes d'IA devraient être conçus pour être compatibles avec les idéaux de dignité humaine, de droits, de libertés et de diversité culturelle.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">Principes de l'OCDE sur l'IA</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Adoptés en 2019, ces principes recommandent que l'IA soit :
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                      <li>Au service des personnes et de la planète</li>
                      <li>Respectueuse des valeurs démocratiques</li>
                      <li>Transparente et explicable</li>
                      <li>Robuste, sûre et sécurisée</li>
                      <li>Les organisations qui la développent doivent être responsables</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">Principes UNESCO sur l'IA</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Recommandation adoptée en 2021 qui établit un cadre éthique global pour l'IA basé sur les valeurs et principes suivants :
                    </p>
                    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="font-medium text-sm">Proportionnalité et innocuité</p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Les systèmes d'IA ne devraient pas dépasser ce qui est nécessaire pour atteindre des objectifs légitimes et devraient être proportionnés et ne pas violer le droit international.
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="font-medium text-sm">Équité et non-discrimination</p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Les acteurs de l'IA devraient promouvoir l'inclusion sociale et lutter contre les biais discriminatoires dans les données.
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="font-medium text-sm">Durabilité</p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Les acteurs de l'IA devraient évaluer l'impact environnemental des systèmes d'IA tout au long de leur cycle de vie.
                        </p>
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="font-medium text-sm">Droit à la vie privée</p>
                        <p className="text-xs mt-1 text-muted-foreground">
                          Les systèmes d'IA doivent respecter, protéger et promouvoir la vie privée tout au long de leur cycle de vie.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold">Déclaration de Montréal pour l'IA responsable</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Initiative lancée en 2017 qui propose dix principes pour une IA éthique :
                    </p>
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-2">
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Bien-être</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Autonomie</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Intimité</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Solidarité</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Démocratie</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Équité</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Inclusion</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Prudence</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Responsabilité</p>
                      </div>
                      <div className="p-2 bg-secondary/30 rounded-lg text-center">
                        <p className="text-xs font-medium">Soutenabilité</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href="https://www.montrealdeclaration-responsibleai.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Consulter la Déclaration de Montréal
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="defis">
            <Card>
              <CardHeader>
                <CardTitle>Défis de gouvernance</CardTitle>
                <CardDescription>
                  Enjeux majeurs pour la conception de cadres de gouvernance efficaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        Le problème de l'alignement
                      </h3>
                      <p className="text-sm mt-2">
                        Comment s'assurer que les systèmes d'IA avancés restent alignés sur les valeurs et objectifs humains, même lorsqu'ils deviennent plus autonomes et puissants?
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        Ce défi devient critique à mesure que l'IA progresse vers des niveaux supérieurs d'intelligence et d'autonomie.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        Gouvernance des systèmes émergents
                      </h3>
                      <p className="text-sm mt-2">
                        Comment anticiper et encadrer les capacités émergentes des systèmes d'IA complexes, qui peuvent développer des comportements imprévus non anticipés lors de leur conception?
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        Les grands modèles de langage récents ont démontré des capacités émergentes surprenantes, soulignant ce défi.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        Gouvernance mondiale et équitable
                      </h3>
                      <p className="text-sm mt-2">
                        Comment créer des cadres de gouvernance qui incluent toutes les nations et cultures, sans perpétuer les inégalités économiques et technologiques existantes?
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        Le développement de l'IA est aujourd'hui concentré dans quelques régions du monde, créant un déséquilibre dans les perspectives et priorités de gouvernance.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        Équilibre innovation-régulation
                      </h3>
                      <p className="text-sm mt-2">
                        Comment établir des garde-fous efficaces sans étouffer l'innovation et les applications bénéfiques de l'IA?
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        Une régulation trop stricte pourrait concentrer le pouvoir dans les mains de quelques grandes entreprises capables de se conformer, tandis qu'une régulation trop faible pourrait conduire à des applications dangereuses.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        Adaptation à l'évolution rapide
                      </h3>
                      <p className="text-sm mt-2">
                        Comment créer des cadres de gouvernance suffisamment flexibles pour s'adapter au rythme accéléré du développement technologique?
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        Les processus législatifs traditionnels sont souvent trop lents pour suivre l'évolution rapide des capacités de l'IA.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h3 className="text-lg font-semibold flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-primary" />
                        Imputabilité et responsabilité
                      </h3>
                      <p className="text-sm mt-2">
                        Comment attribuer la responsabilité des décisions et actions des systèmes d'IA autonomes, particulièrement lorsque ces systèmes sont opaques?
                      </p>
                      <p className="text-sm mt-2 text-muted-foreground">
                        Les chaînes de développement et de déploiement de l'IA impliquent souvent de multiples acteurs, compliquant l'attribution de responsabilité.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="international">
            <Card>
              <CardHeader>
                <CardTitle>Coopération internationale</CardTitle>
                <CardDescription>
                  Initiatives et forums de coopération mondiale sur la gouvernance de l'IA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Forums internationaux sur l'IA</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <h4 className="font-medium">Sommet mondial sur l'IA</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Réunit annuellement des leaders du secteur, des chercheurs et des décideurs politiques pour discuter de l'avenir de l'IA.
                        </p>
                      </div>
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <h4 className="font-medium">Forum sur la gouvernance de l'IA</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Plateforme de dialogue entre différentes parties prenantes sur les défis de gouvernance de l'IA.
                        </p>
                      </div>
                      <div className="p-4 bg-secondary/30 rounded-lg">
                        <h4 className="font-medium">Summit on Responsible AI</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Se concentre sur les aspects éthiques et responsables du développement de l'IA.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Initiatives récentes</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <h4 className="font-medium">Processus de Bletchley Park sur la sécurité de l'IA</h4>
                        <p className="text-sm mt-2">
                          Lancé en novembre 2023 au Royaume-Uni, ce sommet a réuni des représentants de 28 pays pour discuter des risques des IA avancées et établir un cadre international de coopération sur la sécurité de l'IA.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          A abouti à la "Déclaration de Bletchley" signée par 29 pays et l'Union européenne, reconnaissant les risques potentiels des modèles d'IA avancés et s'engageant à une coopération internationale.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <h4 className="font-medium">Sommet mondial sur l'intelligence artificielle de Séoul</h4>
                        <p className="text-sm mt-2">
                          Organisé en mai 2023, ce sommet a rassemblé des experts internationaux pour discuter de la gouvernance de l'IA générative.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          A mis l'accent sur la nécessité d'approches équilibrées qui favorisent l'innovation tout en atténuant les risques.
                        </p>
                      </div>
                      
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <h4 className="font-medium">Accord de Hiroshima sur l'IA</h4>
                        <p className="text-sm mt-2">
                          Adopté lors du sommet du G7 en mai 2023, cet accord établit un "processus de Hiroshima sur l'IA" pour développer des normes internationales.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Les pays du G7 se sont engagés à développer des "directives internationales sur l'IA" tout en reconnaissant le besoin d'approches adaptées aux contextes locaux.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Organisations internationales impliquées</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Nations Unies</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Plusieurs agences de l'ONU travaillent sur l'IA, notamment l'UNESCO qui a adopté une Recommandation sur l'éthique de l'IA en 2021, premier instrument normatif mondial dans ce domaine.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">OCDE</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            A établi les Principes de l'OCDE sur l'IA en 2019, recommandations adoptées par tous les pays membres et plusieurs non-membres, qui ont servie de base pour de nombreuses initiatives nationales.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Union européenne</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Pionnière avec l'AI Act, premier cadre législatif complet sur l'IA au monde, qui établit une approche basée sur les risques pour la réglementation des systèmes d'IA.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium">Conseil de l'Europe</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Travaille sur un cadre juridique contraignant pour l'IA basé sur les droits humains, la démocratie et l'État de droit, avec une Convention sur l'IA en développement depuis 2022.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle>Perspectives d'avenir</CardTitle>
              <CardDescription>
                Évolution probable de la gouvernance de l'IA dans les prochaines années
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  À mesure que l'IA progresse vers des niveaux supérieurs de capacités, la gouvernance de l'IA est susceptible d'évoluer selon plusieurs axes :
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <span className="font-medium">Gouvernance adaptative</span> : Des cadres réglementaires qui évoluent en fonction des capacités émergentes des systèmes d'IA.
                  </li>
                  <li>
                    <span className="font-medium">Mécanismes d'audit indépendants</span> : Développement d'organisations tierces pour évaluer les systèmes d'IA avancés.
                  </li>
                  <li>
                    <span className="font-medium">Harmonisation internationale</span> : Convergence progressive des cadres nationaux vers des standards communs.
                  </li>
                  <li>
                    <span className="font-medium">Co-gouvernance multi-parties prenantes</span> : Implication accrue de la société civile, des chercheurs et du secteur privé dans l'élaboration des politiques.
                  </li>
                  <li>
                    <span className="font-medium">Mécanismes de gouvernance intégrés</span> : Intégration de garde-fous éthiques directement dans l'architecture des systèmes d'IA.
                  </li>
                </ul>
                <p className="mt-4 text-sm italic">
                  "La gouvernance de l'IA n'est pas seulement une question technique ou politique, mais un défi collectif qui requiert la participation de toutes les composantes de la société."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ExploreMoreSection links={exploreLinks} />
    </>
  );
};

export default EthiqueGouvernance;
