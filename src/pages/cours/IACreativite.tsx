
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import LessonSection from '@/components/courses/LessonSection';
import ZoomOn from '@/components/courses/ZoomOn';
import CodeExample from '@/components/courses/CodeExample';
import CourseConclusion from '@/components/courses/CourseConclusion';
import DidYouKnow from '@/components/courses/DidYouKnow';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';
import StatsGrid from '@/components/courses/StatsGrid';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, 
  Lightbulb, 
  Wand2, 
  Camera, 
  Music, 
  PenTool,
  Brain,
  Users,
  Target,
  CheckCircle2,
  Rocket,
  Zap,
  TrendingUp,
  Layers,
  Sparkles
} from 'lucide-react';

const IACreativite = () => {
  const didYouKnowItems = [
    {
      title: "Révolution créative",
      content: "En 2023, plus de 15 milliards d'images ont été générées par IA, transformant radicalement les industries créatives et démocratisant l'art numérique."
    },
    {
      title: "Collaboration humain-IA",
      content: "Les meilleurs résultats créatifs émergent de la collaboration, où l'IA amplifie la créativité humaine plutôt que de la remplacer."
    },
    {
      title: "Nouveaux métiers",
      content: "L'IA a créé de nouveaux rôles comme 'AI Art Director' ou 'Creative Prompt Engineer', redéfinissant le paysage professionnel créatif."
    }
  ];

  const creativeDomains = [
    { icon: <Camera className="h-6 w-6" />, title: "Génération d'images", desc: "DALL-E, Midjourney, Stable Diffusion" },
    { icon: <Music className="h-6 w-6" />, title: "Composition musicale", desc: "AIVA, Mubert, Boomy" },
    { icon: <PenTool className="h-6 w-6" />, title: "Rédaction créative", desc: "GPT-4, Claude, Jasper" },
    { icon: <Wand2 className="h-6 w-6" />, title: "Design graphique", desc: "Canva AI, Adobe Firefly" },
  ];

  const creativityStats = [
    { value: "90%", description: "de temps économisé sur la production" },
    { value: "5x", description: "plus d'idées générées par session" },
    { value: "300%", description: "d'amélioration de la créativité" }
  ];

  const workflowStats = [
    { value: "75%", description: "de réduction du temps de concept à prototype" },
    { value: "12x", description: "plus de variations créées en une session" },
    { value: "60%", description: "d'augmentation de la satisfaction créative" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-pink-50/30">
      <Hero
        title="IA et Créativité"
        subtitle="Révolutionner votre Processus Créatif"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="IA et Créativité : Révolutionner votre Processus Créatif"
          subtitle="Découvrez comment l'IA transforme la création et libère votre potentiel artistique"
          author="Geoffroy Streit"
          authorDescription="Expert en IA et fondateur d'IA Explorer"
          duration="2-3 heures"
          level="Débutant à Avancé"
          audience="Créatifs, designers, marketeurs, entrepreneurs"
          tags={["Créativité", "Design", "Art numérique", "Innovation", "Interne"]}
        />

        <DidYouKnow 
          items={didYouKnowItems}
          bgGradient="from-purple-50 to-pink-50"
          borderColor="border-purple-200"
        />

        <CourseModule
          title="L'IA dans l'écosystème créatif"
          description="Explorez les différents domaines où l'IA révolutionne la créativité"
          modules={[
            {
              icon: <Palette className="h-5 w-5" />,
              title: "Arts visuels",
              items: [
                "Génération d'images et d'illustrations",
                "Retouche et amélioration automatiques",
                "Style transfer et transformations artistiques"
              ]
            },
            {
              icon: <Music className="h-5 w-5" />,
              title: "Audio et musique",
              items: [
                "Composition assistée par IA",
                "Génération de voix et podcasts",
                "Mastering et production automatisés"
              ]
            },
            {
              icon: <PenTool className="h-5 w-5" />,
              title: "Contenu textuel",
              items: [
                "Rédaction créative et storytelling",
                "Génération de scripts et scénarios",
                "Copywriting et marketing créatif"
              ]
            }
          ]}
        />

        <LessonSection
          title="Comprendre la créativité artificielle"
          icon={<Brain className="h-6 w-6" />}
          delay={1}
        >
          <div className="space-y-4">
            <p>
              La{' '}
              <TechnicalTooltip 
                term="Créativité Artificielle"
                definition="Capacité des systèmes IA à générer du contenu original et créatif"
              >
                créativité artificielle
              </TechnicalTooltip>{' '}
              ne remplace pas la créativité humaine, elle l'amplifie et la démocratise.
            </p>
            
            <AnalogyBox
              title="Analogie : L'assistant créatif ultime"
              content="Imaginez un assistant qui maîtrise tous les styles artistiques, connaît l'histoire de l'art, et peut générer instantanément des variations de vos idées. C'est exactement ce que propose l'IA créative !"
              variant="info"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {creativeDomains.map((domain, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50/50">
                  <div className="text-purple-600 mb-2 flex justify-center">
                    {domain.icon}
                  </div>
                  <h5 className="font-medium text-sm mb-1">{domain.title}</h5>
                  <p className="text-xs text-muted-foreground">{domain.desc}</p>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                Les trois niveaux de la créativité IA
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">1. Génératrice</h5>
                  <p className="text-sm text-blue-700">Crée du contenu basé sur des patterns existants</p>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">2. Exploratrice</h5>
                  <p className="text-sm text-green-700">Explore de nouvelles combinaisons dans un domaine donné</p>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">3. Transformatrice</h5>
                  <p className="text-sm text-purple-700">Redéfinit les règles et crée de nouveaux paradigmes</p>
                </Card>
              </div>
            </div>
          </div>
        </LessonSection>

        <ZoomOn title="Les 4 piliers de la co-création humain-IA">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300 shrink-0">1</Badge>
                <div>
                  <h5 className="font-medium mb-1">Inspiration</h5>
                  <p className="text-sm text-muted-foreground">L'IA génère des idées et concepts pour stimuler votre créativité</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-green-100 text-green-800 border-green-300 shrink-0">2</Badge>
                <div>
                  <h5 className="font-medium mb-1">Itération</h5>
                  <p className="text-sm text-muted-foreground">Raffinement rapide des idées avec des variations instantanées</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-orange-100 text-orange-800 border-orange-300 shrink-0">3</Badge>
                <div>
                  <h5 className="font-medium mb-1">Exécution</h5>
                  <p className="text-sm text-muted-foreground">Production rapide de contenus de haute qualité</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-purple-100 text-purple-800 border-purple-300 shrink-0">4</Badge>
                <div>
                  <h5 className="font-medium mb-1">Optimisation</h5>
                  <p className="text-sm text-muted-foreground">Amélioration continue basée sur les retours et analyses</p>
                </div>
              </div>
            </div>
          </div>
        </ZoomOn>

        <LessonSection
          title="Techniques de prompt créatif avancées"
          icon={<Wand2 className="h-6 w-6" />}
          delay={2}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Génération d'images : La technique du storytelling visuel
              </h4>
              <p className="mb-3">
                Pour des images captivantes, racontez une histoire complète incluant 
                l'ambiance, les émotions et les détails sensoriels.
              </p>
              
              <CodeExample
                title="Exemple de prompt créatif pour image"
                language="Prompt Midjourney"
                code={`Un café parisien au coucher du soleil, vue depuis la fenêtre d'un appartement haussmannien. 
La lumière dorée filtre à travers les rideaux de dentelle, illuminant une tasse de café fumant 
posée sur un livre ouvert. Dans la rue en contrebas, des silhouettes se pressent sous les 
réverbères qui s'allument. Style impressionniste, palette chaude, atmosphère nostalgique, 
photographie argentique, grain léger --ar 16:9 --v 6`}
                explanation="Ce prompt combine description visuelle, émotions, style artistique et paramètres techniques pour un résultat optimal."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Rédaction créative : La méthode des contraintes créatives
              </h4>
              <p className="mb-3">
                Les contraintes stimulent la créativité. Imposez des limites pour obtenir 
                des résultats plus originaux et focalisés.
              </p>
              
              <CodeExample
                title="Exemple de contraintes créatives"
                language="Prompt GPT-4"
                code={`Écris une nouvelle de 300 mots exactement qui :
- Se déroule entièrement dans un ascenseur en panne
- Met en scène 3 personnages aux professions opposées
- Inclut un objet mystérieux qui change tout
- Utilise uniquement des dialogues (pas de narration)
- Se termine par une chute inattendue
- Évoque le thème de la confiance sans le mentionner explicitement

Style : Minimaliste et rythmé, inspiré de Raymond Carver`}
                explanation="Les contraintes forcent l'IA à être créative dans un cadre défini, produisant souvent des résultats surprenants."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Composition musicale : Structure et émotion
              </h4>
              <p className="mb-3">
                Pour la création musicale, définissez l'architecture émotionnelle de votre composition.
              </p>
              
              <CodeExample
                title="Prompt pour composition musicale"
                language="Prompt Suno/AIVA"
                code={`Compose une pièce instrumentale de 3 minutes qui raconte l'histoire d'un voyageur :

Structure émotionnelle :
- 0-30s : Départ (anticipation, légère mélancolie) - Piano solo, tempo modéré
- 30s-1m30 : Voyage (aventure, découverte) - Ajout cordes, rythme plus dynamique  
- 1m30-2m30 : Épreuve (tension, incertitude) - Dissonances, tempo accéléré
- 2m30-3m : Retour (apaisement, sagesse) - Retour au piano, harmonie enrichie

Style : Cinématique, influences de Ludovico Einaudi et Max Richter
Tonalité : Ré mineur vers Ré majeur (résolution finale)`}
                explanation="Structure narrative claire avec évolution émotionnelle et références stylistiques précises."
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Workflows créatifs optimisés"
          icon={<Target className="h-6 w-6" />}
          delay={3}
        >
          <div className="space-y-6">
            <p>
              Un{' '}
              <TechnicalTooltip 
                term="Workflow Créatif"
                definition="Processus structuré combinant outils IA et créativité humaine pour un résultat optimal"
              >
                workflow créatif
              </TechnicalTooltip>{' '}
              bien pensé multiplie votre productivité créative par 10.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-6 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Workflow type : Création d'une campagne marketing
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white shrink-0">1</Badge>
                  <div>
                    <strong>Brainstorming</strong> - Génération d'idées avec ChatGPT
                    <p className="text-sm text-blue-700 mt-1">20 concepts créatifs en 5 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white shrink-0">2</Badge>
                  <div>
                    <strong>Visuel</strong> - Création d'images avec Midjourney
                    <p className="text-sm text-blue-700 mt-1">Déclinaisons visuelles instantanées</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white shrink-0">3</Badge>
                  <div>
                    <strong>Copywriting</strong> - Rédaction avec Claude/GPT-4
                    <p className="text-sm text-blue-700 mt-1">Adaptation du ton et du style</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-600 text-white shrink-0">4</Badge>
                  <div>
                    <strong>Optimisation</strong> - Tests A/B et itérations
                    <p className="text-sm text-blue-700 mt-1">Amélioration continue des performances</p>
                  </div>
                </div>
              </div>
            </div>

            <StatsGrid stats={creativityStats} />

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                Workflow avancé : Création multimodale
              </h4>
              <p className="mb-3">
                Combinez différents types de contenus pour créer des expériences immersives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-3">Projet : Court-métrage IA</h5>
                  <ol className="text-sm space-y-1 text-purple-700">
                    <li>1. Script avec ChatGPT</li>
                    <li>2. Storyboard avec Midjourney</li>
                    <li>3. Voix-off avec ElevenLabs</li>
                    <li>4. Musique avec Suno</li>
                    <li>5. Montage avec Runway</li>
                  </ol>
                </Card>
                
                <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <h5 className="font-medium text-green-800 mb-3">Projet : Livre illustré</h5>
                  <ol className="text-sm space-y-1 text-green-700">
                    <li>1. Histoire avec Claude</li>
                    <li>2. Personnages avec DALL-E</li>
                    <li>3. Illustrations avec Stable Diffusion</li>
                    <li>4. Mise en page avec Canva AI</li>
                    <li>5. Narration audio avec Murf</li>
                  </ol>
                </Card>
              </div>
            </div>

            <StatsGrid stats={workflowStats} columns={3} />
          </div>
        </LessonSection>

        <ZoomOn title="Outils incontournables par domaine créatif">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
              <h5 className="font-medium text-pink-800 mb-3 flex items-center gap-2">
                <Camera className="h-4 w-4" />
                Image & Design
              </h5>
              <ul className="text-sm space-y-1 text-pink-700">
                <li>• <strong>Midjourney</strong> - Art conceptuel</li>
                <li>• <strong>DALL-E 3</strong> - Images réalistes</li>
                <li>• <strong>Stable Diffusion</strong> - Contrôle avancé</li>
                <li>• <strong>Adobe Firefly</strong> - Intégration workflow</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <h5 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
                <PenTool className="h-4 w-4" />
                Texte & Copy
              </h5>
              <ul className="text-sm space-y-1 text-blue-700">
                <li>• <strong>GPT-4</strong> - Rédaction polyvalente</li>
                <li>• <strong>Claude</strong> - Créativité littéraire</li>
                <li>• <strong>Jasper</strong> - Marketing focused</li>
                <li>• <strong>Copy.ai</strong> - Templates prêts</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
              <h5 className="font-medium text-purple-800 mb-3 flex items-center gap-2">
                <Music className="h-4 w-4" />
                Audio & Vidéo
              </h5>
              <ul className="text-sm space-y-1 text-purple-700">
                <li>• <strong>Suno</strong> - Génération musicale</li>
                <li>• <strong>ElevenLabs</strong> - Voix synthétiques</li>
                <li>• <strong>Runway</strong> - Vidéo génératrice</li>
                <li>• <strong>Murf</strong> - Narration IA</li>
              </ul>
            </Card>
          </div>
        </ZoomOn>

        <LessonSection
          title="Techniques avancées de création"
          icon={<Zap className="h-6 w-6" />}
          delay={4}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Style Transfer et adaptation
              </h4>
              <p className="mb-3">
                Apprenez à adapter des styles existants pour créer votre signature visuelle unique.
              </p>
              
              <CodeExample
                title="Technique de style transfer avancée"
                language="Prompt Midjourney"
                code={`Portrait d'une femme moderne dans le style de Gustav Klimt, mais adapté à l'époque contemporaine :
- Conserve : motifs géométriques dorés, compositions symboliques, richesse décorative
- Modernise : vêtements actuels (blazer, smartphone), arrière-plan urbain, éclairage naturel
- Ajoute : touches de couleurs néon subtiles dans les motifs dorés
- Style : fusion Art nouveau / photographie de mode contemporaine
- Ambiance : sophistiquée mais accessible, luxueuse mais authentique
--ar 3:4 --style raw --stylize 750`}
                explanation="Cette technique crée un pont entre l'art classique et la modernité, générant un style unique."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                Création de concepts visuels complexes
              </h4>
              <p className="mb-3">
                Maîtrisez l'art de décomposer des idées abstraites en éléments visuels concrets.
              </p>
              
              <AnalogyBox
                title="De l'abstrait au concret"
                content="Transformer 'l'innovation' en image, c'est comme traduire une mélodie en couleurs. Il faut d'abord identifier les émotions et sensations associées, puis les transposer en éléments visuels tangibles : formes, lumières, mouvements."
                variant="tip"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card className="p-4 border-orange-200 bg-orange-50">
                  <h5 className="font-medium text-orange-800 mb-2">Concept abstrait : "Innovation"</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Émotions : Excitement, curiosité, transformation</li>
                    <li>• Formes : Spirales, explosions, métamorphoses</li>
                    <li>• Couleurs : Gradient électrique, néons</li>
                    <li>• Mouvement : Ascension, expansion, fusion</li>
                  </ul>
                </Card>
                
                <Card className="p-4 border-green-200 bg-green-50">
                  <h5 className="font-medium text-green-800 mb-2">Traduction visuelle</h5>
                  <p className="text-sm text-green-700">
                    "Une spirale de particules lumineuses émergeant d'un prisme cristallin, 
                    se transformant en formes géométriques complexes dans un gradient 
                    électrique bleu-violet, sur fond noir étoilé"
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Collaboration créative avec l'IA
              </h4>
              <p className="mb-3">
                Découvrez comment établir un dialogue créatif productif avec l'IA.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">Les 5 phases du dialogue créatif</h5>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">1</div>
                    <p className="text-indigo-700"><strong>Exploration</strong><br/>Brainstorming libre</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">2</div>
                    <p className="text-indigo-700"><strong>Focalisation</strong><br/>Sélection d'idées</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">3</div>
                    <p className="text-indigo-700"><strong>Développement</strong><br/>Approfondissement</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">4</div>
                    <p className="text-indigo-700"><strong>Raffinement</strong><br/>Optimisation</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">5</div>
                    <p className="text-indigo-700"><strong>Finalisation</strong><br/>Validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Éthique et bonnes pratiques"
          icon={<Users className="h-6 w-6" />}
          delay={5}
        >
          <div className="space-y-4">
            <p>
              L'utilisation créative de l'IA soulève des questions importantes sur 
              l'{' '}
              <TechnicalTooltip 
                term="Authenticité"
                definition="Caractère de ce qui est original et non copié, respectueux des droits d'auteur"
              >
                authenticité
              </TechnicalTooltip>{' '}
              et la propriété intellectuelle.
            </p>
            
            <AnalogyBox
              title="Principes éthiques essentiels"
              content="Utiliser l'IA créative, c'est comme cuisiner avec des ingrédients de qualité : il faut connaître la provenance, respecter les recettes traditionnelles, tout en innovant avec responsabilité. L'éthique, c'est la différence entre un chef respectueux et un simple copieur."
              variant="info"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <h5 className="font-medium text-green-800 mb-2">✅ Bonnes pratiques</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Combiner IA et expertise humaine</li>
                    <li>• Citer les outils utilisés</li>
                    <li>• Respecter les licences d'usage</li>
                    <li>• Développer son style unique</li>
                    <li>• Créditer les inspirations</li>
                    <li>• Vérifier l'originalité des résultats</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <h5 className="font-medium text-red-800 mb-2">❌ À éviter</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Copier des œuvres existantes</li>
                    <li>• Publier sans vérification</li>
                    <li>• Ignorer les droits d'auteur</li>
                    <li>• Dépendre entièrement de l'IA</li>
                    <li>• Tromper sur l'origine du contenu</li>
                    <li>• Utiliser des données privées</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Construire sa signature créative
              </h4>
              <p className="mb-3">
                L'objectif n'est pas de remplacer votre créativité, mais de développer un style unique 
                qui combine vos sensibilités et les capacités de l'IA.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-4 rounded-lg">
                <h5 className="font-medium text-yellow-800 mb-2">Méthode pour développer votre signature</h5>
                <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                  <li>Identifiez vos préférences esthétiques naturelles</li>
                  <li>Expérimentez avec différents styles d'IA</li>
                  <li>Notez les combinaisons qui vous parlent</li>
                  <li>Développez vos prompts signature</li>
                  <li>Créez une cohérence dans vos productions</li>
                  <li>Évoluez progressivement votre style</li>
                </ol>
              </div>
            </div>
          </div>
        </LessonSection>

        <CourseConclusion
          title="Libérez votre potentiel créatif avec l'IA"
          description="Vous maîtrisez maintenant les fondamentaux de la créativité assistée par IA. Il est temps de créer et d'innover !"
          learningPoints={[
            "Comprendre les possibilités créatives de l'IA",
            "Maîtriser les techniques de prompt créatif avancées",
            "Construire des workflows créatifs efficaces",
            "Utiliser les bons outils selon vos besoins",
            "Respecter l'éthique et les bonnes pratiques",
            "Développer votre signature créative unique",
            "Collaborer efficacement avec l'IA",
            "Créer des contenus multimodaux complexes"
          ]}
          nextSteps={[
            "Expérimentez avec différents outils créatifs",
            "Développez votre style personnel unique",
            "Rejoignez des communautés d'artistes IA",
            "Suivez le cours 'Prompt Engineering' pour optimiser vos résultats",
            "Créez votre premier projet créatif avec IA",
            "Explorez la création multimodale",
            "Participez à des défis créatifs communautaires",
            "Documentez et partagez votre processus créatif"
          ]}
        />
      </div>
    </div>
  );
};

export default IACreativite;
