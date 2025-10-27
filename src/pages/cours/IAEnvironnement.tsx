import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import ExpandableSection from '@/components/courses/ExpandableSection';
import InteractiveExample from '@/components/courses/InteractiveExample';
import QuickFactBox from '@/components/courses/QuickFactBox';
import AnalogiePedagogique from '@/components/courses/AnalogiePedagogique';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Leaf, 
  Zap, 
  Droplet, 
  Trash2,
  TrendingDown,
  Server,
  Smartphone,
  Cloud,
  AlertTriangle,
  Lightbulb,
  TreePine,
  Thermometer,
  Cpu,
  Factory,
  Recycle,
  Battery,
  Globe,
  BookOpen,
  Target
} from 'lucide-react';

const IAEnvironnement = () => {
  const headerProps = {
    title: "Green IT : L'Impact Environnemental de l'IA et du Numérique",
    subtitle: "Comprendre et réduire l'empreinte écologique de nos technologies",
    author: "Geoffroy Streit",
    authorDescription: "Éducateur en IA et développement durable numérique",
    duration: "3-4 heures",
    level: "Intermédiaire",
    audience: "Développeurs, décideurs IT, citoyens concernés",
    tags: ["Green IT", "Environnement", "Empreinte carbone", "IA durable", "Écoconception", "2024"]
  };

  const impactMetrics = [
    { label: "Émissions CO₂ IA mondiale", value: "300Mt/an", trend: "up" as const },
    { label: "Consommation électrique", value: "1% mondial", trend: "up" as const },
    { label: "Croissance annuelle", value: "+40%", trend: "up" as const },
    { label: "Potentiel réduction GreenIT", value: "-60%", trend: "down" as const }
  ];

  const datacentersMetrics = [
    { label: "Énergie datacenters monde", value: "200 TWh/an", trend: "up" as const },
    { label: "Refroidissement", value: "40% énergie", trend: "stable" as const },
    { label: "PUE moyen global", value: "1.58", trend: "down" as const },
    { label: "PUE best-in-class", value: "1.12", trend: "stable" as const }
  ];

  const smartphoneMetrics = [
    { label: "Smartphones produits/an", value: "1.4 milliards", trend: "up" as const },
    { label: "Émissions CO₂ fabrication", value: "70-90%", trend: "stable" as const },
    { label: "Durée vie moyenne", value: "2.5 ans", trend: "up" as const },
    { label: "Taux recyclage", value: "20%", trend: "up" as const }
  ];

  const ecoActionsSteps = [
    {
      title: "Audit de l'existant",
      description: "Mesurer l'empreinte carbone actuelle : serveurs, équipements, consommation",
      result: "Baseline carbone : 450 tCO₂e/an, consommation 2.3 GWh/an"
    },
    {
      title: "Optimisation modèles IA",
      description: "Réduire la taille et complexité des modèles sans perdre performance",
      result: "Modèle compressé 75%, précision -2%, consommation -80%"
    },
    {
      title: "Infrastructure verte",
      description: "Migration vers datacenters bas-carbone, énergies renouvelables",
      result: "Émissions -55%, coûts énergétiques -30%"
    },
    {
      title: "Sensibilisation équipes",
      description: "Former les développeurs aux pratiques de code écoresponsable",
      result: "Adoption bonnes pratiques 85%, efficacité énergétique +40%"
    }
  ];

  const module1Data = [
    {
      icon: <Thermometer className="h-5 w-5 text-primary" />,
      title: "L'empreinte carbone du numérique",
      items: [
        "4% des émissions mondiales GES (plus que l'aviation)",
        "Croissance exponentielle : +8% par an",
        "3 phases : fabrication (60%), usage (30%), fin de vie (10%)",
        "1 email = 4g CO₂, 1 recherche web = 7g CO₂",
        "Streaming vidéo : 300Mt CO₂/an (1% mondial)",
        "Fabrication d'un smartphone : 50-100 kg CO₂"
      ]
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: "L'IA : une technologie énergivore",
      items: [
        "Entraînement GPT-3 : 550t CO₂ (vie de 5 américains)",
        "1 requête ChatGPT : 10x plus énergivore qu'une recherche Google",
        "Datacenters IA : consommation = pays comme Irlande",
        "Refroidissement : 40% de l'énergie des datacenters",
        "Effet rebond : gains efficacité → plus d'usage",
        "Obsolescence des GPU : cycle 2-3 ans"
      ]
    },
    {
      icon: <Recycle className="h-5 w-5 text-primary" />,
      title: "Ressources et déchets électroniques",
      items: [
        "50Mt déchets électroniques/an (croissance +21%)",
        "Taux recyclage : seulement 17% mondial",
        "Terres rares : extraction polluante, réserves limitées",
        "1 smartphone : 70 matériaux, dont 50 métaux",
        "Obsolescence programmée : durée de vie réduite",
        "E-waste : métaux lourds, toxiques pour l'environnement"
      ]
    }
  ];

  const analogyElements = [
    {
      aspect: "Entraînement d'un grand modèle IA",
      explanation: "Imaginez faire 5 allers-retours Paris-New York en avion pour une seule personne",
      mathConcept: "~500-1000 tonnes de CO₂ pour GPT-3/GPT-4"
    },
    {
      aspect: "Consommation d'un datacenter géant",
      explanation: "C'est comme alimenter une ville de 100 000 habitants en électricité pendant un an",
      mathConcept: "~200-500 MW de puissance, 1.5-4 TWh/an"
    },
    {
      aspect: "Fabrication d'un smartphone",
      explanation: "Équivaut à laisser une ampoule LED de 10W allumée pendant 7 mois non-stop",
      mathConcept: "~50-100 kg CO₂, 200 kg de matières premières"
    },
    {
      aspect: "Streaming Netflix 1h en HD",
      explanation: "Comme laisser tourner une voiture à l'arrêt pendant 10 minutes",
      mathConcept: "~36-100g CO₂ selon réseau et équipement"
    }
  ];

  const didYouKnowItems = [
    {
      title: "L'entraînement de GPT-3 a émis autant de CO₂ que...",
      content: "550 tonnes de CO₂, soit l'équivalent de 123 voitures essence pendant un an, ou 5 vies d'américains moyens. Et ce n'est que l'entraînement initial, pas les millions de requêtes quotidiennes."
    },
    {
      title: "Le paradoxe de l'efficacité énergétique (effet rebond)",
      content: "Quand on rend l'IA plus efficace, on l'utilise davantage. Résultat : la consommation totale augmente. C'est le paradoxe de Jevons : les gains d'efficacité sont annulés par l'augmentation de l'usage."
    },
    {
      title: "Votre smartphone a voyagé 4 fois autour du monde",
      content: "Les composants d'un iPhone parcourent ~160 000 km avant assemblage : terres rares d'Afrique et Chine, écrans de Corée, puces de Taïwan, assemblage en Chine, puis livraison mondiale."
    },
    {
      title: "Les océans stockent aussi nos données... et se réchauffent",
      content: "Les câbles sous-marins transportent 99% du trafic internet. Leur fabrication et maintenance émettent du CO₂, et les datacenters côtiers utilisent parfois l'eau de mer pour refroidissement, réchauffant légèrement les écosystèmes marins."
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

        {/* Introduction avec mise en situation */}
        <CourseModule
          title="Introduction : Le coût invisible de notre révolution numérique"
          description="Comprendre l'impact environnemental réel de l'IA, du cloud et de nos smartphones"
        >
          <Alert className="mb-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <TreePine className="h-5 w-5 text-green-600" />
            <AlertDescription>
              <strong>Mise en situation :</strong> Chaque jour, vous utilisez votre smartphone, recherchez sur Google, 
              streamez des vidéos, utilisez ChatGPT. Ces gestes anodins ont un coût caché : une empreinte carbone 
              collective qui dépasse celle de l'aviation mondiale. Ce cours vous révèle la face cachée du numérique.
            </AlertDescription>
          </Alert>

          <Card className="mb-6 border-amber-200 dark:border-amber-800">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-amber-500" />
                    Le mythe du "cloud" dématérialisé
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    On parle de "cloud" (nuage), comme si nos données flottaient dans l'air. La réalité ? 
                    Des millions de serveurs physiques, consommant autant d'électricité qu'un pays entier, 
                    refroidis par des systèmes énergivores, fabriqués avec des métaux rares extraits dans 
                    des conditions sociales et environnementales souvent désastreuses.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg text-xs space-y-1">
                    <p>💡 <strong>Réalité :</strong> Le numérique c'est :</p>
                    <p>• 34 milliards d'équipements connectés</p>
                    <p>• 8 000 datacenters dans le monde</p>
                    <p>• 1,5 million de km de câbles sous-marins</p>
                    <p>• 4% des émissions mondiales de GES</p>
                  </div>
                </div>
                <QuickFactBox
                  title="Impact IA et numérique en 2024"
                  facts={impactMetrics}
                  variant="warning"
                />
              </div>
            </CardContent>
          </Card>

          <ZoomOn title="Pourquoi l'IA est-elle particulièrement polluante ?">
            <div className="space-y-4">
              <p className="mb-3">
                L'intelligence artificielle moderne, et en particulier les grands modèles de langage (LLM) comme 
                GPT-4 ou Claude, nécessitent deux phases extrêmement gourmandes en énergie :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-red-200">
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Factory className="h-4 w-4 text-red-500" />
                      Phase 1 : Entraînement (Training)
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      L'entraînement d'un modèle comme GPT-3 nécessite des milliers de GPU haut de gamme 
                      tournant pendant plusieurs semaines.
                    </p>
                    <div className="text-xs bg-muted/50 p-2 rounded space-y-1">
                      <p>• <strong>Durée :</strong> 2-4 semaines non-stop</p>
                      <p>• <strong>Hardware :</strong> 10 000+ GPU A100</p>
                      <p>• <strong>Énergie :</strong> 1300 MWh (~$5M)</p>
                      <p>• <strong>CO₂ :</strong> 500-1000 tonnes</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-orange-500" />
                      Phase 2 : Inférence (Usage)
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Chaque requête consomme de l'énergie. Avec des millions d'utilisateurs quotidiens, 
                      l'impact cumulé dépasse souvent celui de l'entraînement.
                    </p>
                    <div className="text-xs bg-muted/50 p-2 rounded space-y-1">
                      <p>• <strong>1 requête ChatGPT :</strong> ~0.3 Wh</p>
                      <p>• <strong>vs recherche Google :</strong> 10x plus</p>
                      <p>• <strong>100M requêtes/jour :</strong> 30 MWh/jour</p>
                      <p>• <strong>Annuel :</strong> ~11 GWh = ville 3000 hab</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <Lightbulb className="h-4 w-4 text-blue-500" />
                <AlertDescription>
                  <strong>Effet rebond (Jevons Paradox) :</strong> Plus l'IA devient efficace, plus on l'utilise. 
                  GPT-4 est 3x plus efficace que GPT-3, mais utilisé 10x plus. Résultat : impact total x3.
                </AlertDescription>
              </Alert>
            </div>
          </ZoomOn>

          <AnalogiePedagogique
            title="🌍 Ordres de grandeur : Comprendre l'impact par l'analogie"
            description="Pour mieux saisir ces chiffres abstraits, voici des comparaisons concrètes"
            elements={analogyElements}
          />

          <ExpandableSection 
            title="📊 Répartition de l'empreinte numérique mondiale" 
            icon={<Target className="h-4 w-4" />}
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                L'empreinte environnementale du numérique se répartit entre trois grandes catégories :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-blue-500" />
                      Équipements utilisateurs (44%)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <p className="text-muted-foreground">
                      Smartphones, ordinateurs, tablettes, objets connectés. La fabrication compte pour 70-90% 
                      de leur empreinte totale.
                    </p>
                    <div className="bg-muted/50 p-2 rounded">
                      <p>• 34 milliards d'équipements</p>
                      <p>• Renouvellement tous les 2-3 ans</p>
                      <p>• Fabrication très polluante</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Server className="h-4 w-4 text-purple-500" />
                      Datacenters et cloud (28%)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <p className="text-muted-foreground">
                      Serveurs hébergeant sites web, applications, IA. Consommation électrique continue, 
                      refroidissement massif.
                    </p>
                    <div className="bg-muted/50 p-2 rounded">
                      <p>• 8 000 datacenters mondiaux</p>
                      <p>• 200 TWh/an (1% élec mondiale)</p>
                      <p>• 40% pour refroidissement</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-green-500" />
                      Réseaux et télécoms (28%)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <p className="text-muted-foreground">
                      Infrastructures réseau : câbles, antennes 4G/5G, routeurs. Transport des données 
                      entre utilisateurs et serveurs.
                    </p>
                    <div className="bg-muted/50 p-2 rounded">
                      <p>• 1.5M km câbles sous-marins</p>
                      <p>• Millions d'antennes relais</p>
                      <p>• Croissance trafic : +30%/an</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <AlertDescription>
                  <strong>Attention :</strong> Ces chiffres évoluent rapidement. La 5G, l'IoT et l'IA générative 
                  accélèrent la croissance. Sans action, l'empreinte numérique pourrait doubler d'ici 2030.
                </AlertDescription>
              </Alert>
            </div>
          </ExpandableSection>
        </CourseModule>

        {/* Module 1 : Impact détaillé */}
        <CourseModule
          title="Module 1 : Comprendre les impacts environnementaux"
          description="Décryptage des trois piliers de l'empreinte écologique du numérique"
          modules={module1Data}
        />

        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <ZoomOn title="🏭 Focus : Les datacenters, usines numériques invisibles">
            <div className="space-y-4">
              <p className="mb-3">
                Les datacenters sont les usines du 21ème siècle : des bâtiments remplis de dizaines de milliers 
                de serveurs, fonctionnant 24/7, générant une chaleur intense nécessitant des systèmes de 
                refroidissement massifs.
              </p>
              
              <QuickFactBox
                title="Datacenters en chiffres"
                facts={datacentersMetrics}
                variant="warning"
              />

              <ExpandableSection 
                title="Les 3 défis majeurs des datacenters" 
                icon={<Server className="h-4 w-4" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        1. Consommation électrique
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <p className="text-muted-foreground">
                        Un datacenter moyen consomme autant qu'une ville de 10 000 habitants. 
                        Les plus grands (hyperscalers) : équivalent de plusieurs villes moyennes.
                      </p>
                      <div className="bg-muted/50 p-2 rounded">
                        <p><strong>Moyenne :</strong> 200 MW</p>
                        <p><strong>Hyperscalers :</strong> 500+ MW</p>
                        <p><strong>Coût annuel :</strong> $50-200M</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Droplet className="h-4 w-4" />
                        2. Consommation d'eau
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <p className="text-muted-foreground">
                        Les systèmes de refroidissement par évaporation consomment des millions de litres d'eau, 
                        créant tensions dans régions arides.
                      </p>
                      <div className="bg-muted/50 p-2 rounded">
                        <p><strong>Moyen :</strong> 3-5M litres/jour</p>
                        <p><strong>Google (2022) :</strong> 15 milliards L</p>
                        <p><strong>Microsoft :</strong> 5 milliards L</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Thermometer className="h-4 w-4" />
                        3. Dissipation thermique
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <p className="text-muted-foreground">
                        40% de l'énergie sert au refroidissement. La chaleur dégagée équivaut à une centrale 
                        thermique, réchauffant parfois les écosystèmes environnants.
                      </p>
                      <div className="bg-muted/50 p-2 rounded">
                        <p><strong>Chaleur produite :</strong> ~200 MW</p>
                        <p><strong>Refroidissement :</strong> 40% énergie</p>
                        <p><strong>PUE optimal :</strong> &lt; 1.2</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <Alert className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <Leaf className="h-4 w-4 text-green-500" />
                <AlertDescription>
                  <strong>Solutions émergentes :</strong> Datacenters en Scandinavie (climat froid + électricité hydro), 
                  récupération de chaleur pour chauffage urbain, refroidissement liquide immergé, 
                  intelligence artificielle pour optimiser la climatisation (Google : -40% énergie refroidissement).
                </AlertDescription>
              </Alert>
            </div>
          </ZoomOn>

          <ZoomOn title="📱 Focus : Smartphones et obsolescence programmée">
            <div className="space-y-4">
              <p className="mb-3">
                Votre smartphone est l'objet le plus complexe et le plus polluant que vous possédez. 
                Sa fabrication concentre 70 à 90% de son empreinte carbone totale. Le garder le plus longtemps 
                possible est le geste écologique le plus impactant.
              </p>
              
              <QuickFactBox
                title="Smartphones : L'envers du décor"
                facts={smartphoneMetrics}
                variant="warning"
              />

              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Le vrai coût d'un smartphone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Ressources nécessaires</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>200 kg</strong> de matières premières extraites</li>
                        <li>• <strong>70 matériaux</strong> dont 50 métaux différents</li>
                        <li>• <strong>15-20 terres rares</strong> (lithium, cobalt, néodyme...)</li>
                        <li>• <strong>50-100 kg CO₂</strong> émis lors de la fabrication</li>
                        <li>• <strong>12 000 litres d'eau</strong> pour extraction minéraux</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Cycle de vie</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>Durée vie moyenne :</strong> 2-3 ans (France)</li>
                        <li>• <strong>Obsolescence logicielle :</strong> support 2-5 ans</li>
                        <li>• <strong>Taux de réparation :</strong> &lt;30%</li>
                        <li>• <strong>Taux de recyclage :</strong> ~20% monde</li>
                        <li>• <strong>Métaux récupérés :</strong> &lt;5% terres rares</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="mt-4">
                    <Lightbulb className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Conseil d'or :</strong> Garder son smartphone 4 ans au lieu de 2 divise par deux son impact 
                      environnemental. C'est plus efficace que tous les petits gestes quotidiens (emails, streaming...) réunis.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <ExpandableSection 
                title="🔋 Batteries et terres rares : la face cachée" 
                icon={<Battery className="h-4 w-4" />}
              >
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Les batteries lithium-ion et l'extraction des terres rares posent des défis environnementaux 
                    et sociaux majeurs.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-4">
                        <h5 className="font-medium text-sm mb-2">Extraction du lithium</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          Principalement en Amérique du Sud (Argentine, Chili, Bolivie) : pompage d'eau souterraine 
                          dans déserts salins, asséchant nappes phréatiques.
                        </p>
                        <div className="bg-muted/50 p-2 rounded text-xs">
                          <p>• <strong>Eau consommée :</strong> 500 000L / tonne lithium</p>
                          <p>• <strong>Impact :</strong> sécheresses, agriculture détruite</p>
                          <p>• <strong>Communautés :</strong> conflits d'usage de l'eau</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-4">
                        <h5 className="font-medium text-sm mb-2">Extraction du cobalt</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          70% du cobalt mondial vient de RD Congo, avec conditions de travail souvent inhumaines, 
                          travail des enfants, pollution des sols.
                        </p>
                        <div className="bg-muted/50 p-2 rounded text-xs">
                          <p>• <strong>Mineurs artisanaux :</strong> ~200 000 (dont enfants)</p>
                          <p>• <strong>Salaire :</strong> $1-2/jour dans mines informelles</p>
                          <p>• <strong>Pollution :</strong> métaux lourds dans eau/sols</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <AlertDescription className="text-xs">
                      <strong>Dilemme :</strong> Ces matériaux sont essentiels pour la transition énergétique 
                      (batteries véhicules électriques, stockage énergies renouvelables). Il faut améliorer conditions 
                      d'extraction, augmenter recyclage, développer alternatives (batteries sodium, état solide).
                    </AlertDescription>
                  </Alert>
                </div>
              </ExpandableSection>
            </div>
          </ZoomOn>

          <DidYouKnow items={didYouKnowItems} />
        </div>

        {/* Module 2 : Solutions et actions */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                Module 2 : Agir pour un numérique plus responsable
              </CardTitle>
              <p className="text-muted-foreground">Solutions concrètes à tous les niveaux : individuel, entreprise, société</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ExpandableSection 
                title="💡 Actions individuelles (tout de suite)" 
                icon={<Lightbulb className="h-4 w-4" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Équipements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-1">
                      <p>✅ Garder son smartphone 4+ ans</p>
                      <p>✅ Réparer plutôt que remplacer</p>
                      <p>✅ Acheter reconditionné (-70% impact)</p>
                      <p>✅ Recycler correctement (e-waste)</p>
                      <p>✅ Désactiver fonctions inutiles</p>
                      <p>✅ Choisir indice réparabilité élevé</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Cloud className="h-4 w-4" />
                        Usage quotidien
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-1">
                      <p>✅ Réduire qualité streaming (720p vs 4K)</p>
                      <p>✅ Télécharger vs streamer</p>
                      <p>✅ Désabonner newsletters inutiles</p>
                      <p>✅ Nettoyer boîte mail et cloud</p>
                      <p>✅ Bloquer vidéos auto-play</p>
                      <p>✅ Limiter usage IA générative</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Sensibilisation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-1">
                      <p>✅ Se former (ce cours !)</p>
                      <p>✅ Partager connaissances</p>
                      <p>✅ Mesurer son empreinte (carbonalyser)</p>
                      <p>✅ Suivre acteurs Green IT</p>
                      <p>✅ Exiger transparence marques</p>
                      <p>✅ Voter avec son portefeuille</p>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <ExpandableSection 
                title="🏢 Actions entreprises et développeurs" 
                icon={<Factory className="h-4 w-4" />}
              >
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Écoconception logicielle</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Optimisation code</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Algorithms efficaces (complexité O)</li>
                            <li>• Lazy loading, code splitting</li>
                            <li>• Compression images (WebP, AVIF)</li>
                            <li>• Minification, tree-shaking</li>
                            <li>• Cache intelligent</li>
                            <li>• Éviter over-engineering</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Modèles IA sobres</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Quantification (16-bit, 8-bit, 4-bit)</li>
                            <li>• Pruning (élagage neurones inutiles)</li>
                            <li>• Distillation (petit modèle apprend du grand)</li>
                            <li>• Modèles légers (Phi-3, Gemma, Mistral-7B)</li>
                            <li>• Edge AI (calcul local vs cloud)</li>
                            <li>• Cache réponses fréquentes</li>
                          </ul>
                        </div>
                      </div>

                      <Alert className="mt-3">
                        <Target className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          <strong>Exemple concret :</strong> Un modèle IA quantifié à 4-bit consomme 8x moins de mémoire 
                          et 4-6x moins d'énergie qu'en 32-bit, avec seulement 1-2% de perte de précision. Adopté massivement, 
                          cela économiserait l'équivalent énergétique d'une ville de 50 000 habitants.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Infrastructure et hébergement</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-muted/50 p-3 rounded">
                          <h5 className="font-semibold mb-1">Hébergement vert</h5>
                          <p>Choisir datacenters alimentés énergies renouvelables, PUE &lt; 1.3, certifications 
                          environnementales (ISO 14001, Green Grid)</p>
                        </div>
                        <div className="bg-muted/50 p-3 rounded">
                          <h5 className="font-semibold mb-1">Optimisation serveurs</h5>
                          <p>Virtualisation, conteneurisation, auto-scaling, shut down nocturne environnements dev/test, 
                          monitoring consommation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <InteractiveExample
                title="Cas pratique : Stratégie Green IT en entreprise"
                description="Suivons la transformation d'une startup tech vers un numérique responsable"
                steps={ecoActionsSteps}
                finalMessage="Résultat : Émissions -55%, coûts -30%, image de marque +60%, recrutement facilité. ROI positif dès 18 mois. Le Green IT n'est plus un coût, c'est un investissement rentable et différenciant."
              />
            </CardContent>
          </Card>
        </div>

        {/* Ressources et références */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                📚 Ressources et références scientifiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">Rapports de référence</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• <strong>The Shift Project (2019-2023) :</strong> "Impact environnemental du numérique : tendances à 5 ans et gouvernance de la 5G"</li>
                  <li>• <strong>ADEME & ARCEP (2023) :</strong> "Empreinte environnementale du numérique en France"</li>
                  <li>• <strong>IEA (2024) :</strong> "Electricity 2024 - Analysis and forecast to 2026 : Datacenters"</li>
                  <li>• <strong>Nature (2021) :</strong> "Carbon Emissions and Large Neural Network Training" - Patterson et al.</li>
                  <li>• <strong>MIT (2023) :</strong> "AI and Compute: Power Consumption Trends in Machine Learning"</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">Outils de mesure</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">🌿 Carbonalyser (The Shift Project)</p>
                    <p className="text-muted-foreground">Extension navigateur pour mesurer impact carbone de sa navigation</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">📊 Website Carbon Calculator</p>
                    <p className="text-muted-foreground">Estime empreinte carbone d'un site web</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">🔍 GreenIT Analysis</p>
                    <p className="text-muted-foreground">Audit écoconception de sites web</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">⚡ ML CO2 Impact</p>
                    <p className="text-muted-foreground">Calculer empreinte entraînement modèles ML</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">Organismes et labels</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GreenIT.fr</Badge>
                  <Badge variant="outline">Institut du Numérique Responsable</Badge>
                  <Badge variant="outline">Green Grid (PUE)</Badge>
                  <Badge variant="outline">The Green Web Foundation</Badge>
                  <Badge variant="outline">Climate Neutral Data Centre Pact</Badge>
                  <Badge variant="outline">B Corp Certification</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Vers un numérique soutenable"
          description="L'urgence écologique impose de repenser notre rapport au numérique. Le Green IT n'est pas une option, c'est une nécessité."
          learningPoints={[
            "Le numérique représente 4% des émissions mondiales, en croissance de +8% par an",
            "L'IA est particulièrement énergivore : entraînement ET inférence à grande échelle",
            "70-90% de l'impact d'un smartphone est dans sa fabrication : le garder longtemps est crucial",
            "Les datacenters consomment 1% de l'électricité mondiale, optimisables via PUE &lt; 1.2 et EnR",
            "L'écoconception logicielle peut réduire l'impact de 60% : code efficace, IA sobre, hébergement vert",
            "Le Green IT est rentable : ROI positif, image de marque, attraction talents, conformité réglementaire"
          ]}
          nextSteps={[
            "Mesurer votre empreinte numérique personnelle avec Carbonalyser",
            "Appliquer les actions individuelles : garder équipements 4+ ans, réparer, reconditionné",
            "Pour les développeurs : se former à l'écoconception, utiliser modèles IA légers",
            "Pour les entreprises : réaliser bilan carbone numérique, stratégie Green IT",
            "Sensibiliser votre entourage : partager ce cours, créer discussions",
            "Suivre évolutions réglementaires : lois climat, directives européennes",
            "Explorer nos autres cours : IA éthique, gouvernance responsable"
          ]}
        />
      </section>
    </>
  );
};

export default IAEnvironnement;
