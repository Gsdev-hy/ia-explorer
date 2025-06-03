
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import LessonSection from '@/components/courses/LessonSection';
import ZoomOn from '@/components/courses/ZoomOn';
import CodeExample from '@/components/courses/CodeExample';
import CourseConclusion from '@/components/courses/CourseConclusion';
import Illustration from '@/components/courses/Illustration';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, 
  Lightbulb, 
  Wand2, 
  Camera, 
  Music, 
  PenTool,
  Sparkles,
  Brain,
  Users,
  Target,
  CheckCircle2,
  Info,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';

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

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-pink-50/30">
        <Hero
          title="IA et Créativité"
          subtitle="Révolutionner votre Processus Créatif"
        />

        <div className="section-container">
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

          {/* Section Le saviez-vous ? */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Le saviez-vous ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {didYouKnowItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">{item.title}</h4>
                      <p className="text-sm text-purple-700">{item.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
                La <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted decoration-primary">
                    créativité artificielle
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Capacité des systèmes IA à générer du contenu original et créatif</p>
                  </TooltipContent>
                </Tooltip> ne remplace pas la créativité humaine, elle l'amplifie et la démocratise.
              </p>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-4 rounded-lg">
                <div className="flex items-start">
                  <Lightbulb className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">Analogie : L'assistant créatif ultime</h4>
                    <p className="text-purple-700 text-sm">
                      Imaginez un assistant qui maîtrise tous les styles artistiques, connaît l'histoire de l'art, 
                      et peut générer instantanément des variations de vos idées. C'est exactement ce que propose l'IA créative !
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {creativeDomains.map((domain, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50/50">
                      <div className="text-purple-600 mb-2 flex justify-center">
                        {domain.icon}
                      </div>
                      <h5 className="font-medium text-sm mb-1">{domain.title}</h5>
                      <p className="text-xs text-muted-foreground">{domain.desc}</p>
                    </Card>
                  </motion.div>
                ))}
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
            title="Techniques de prompt créatif"
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
            </div>
          </LessonSection>

          <LessonSection
            title="Workflows créatifs optimisés"
            icon={<Target className="h-6 w-6" />}
            delay={3}
          >
            <div className="space-y-6">
              <p>
                Un <Tooltip>
                  <TooltipTrigger className="underline decoration-dotted decoration-primary">
                    workflow créatif
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Processus structuré combinant outils IA et créativité humaine pour un résultat optimal</p>
                  </TooltipContent>
                </Tooltip> bien pensé multiplie votre productivité créative par 10.
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-2">90%</div>
                  <p className="text-sm text-green-700">de temps économisé sur la production</p>
                </Card>
                <Card className="text-center p-4 bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-2">5x</div>
                  <p className="text-sm text-blue-700">plus d'idées générées par session</p>
                </Card>
                <Card className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-2">300%</div>
                  <p className="text-sm text-purple-700">d'amélioration de la créativité</p>
                </Card>
              </div>
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
            title="Éthique et bonnes pratiques"
            icon={<Users className="h-6 w-6" />}
            delay={4}
          >
            <div className="space-y-4">
              <p>
                L'utilisation créative de l'IA soulève des questions importantes sur 
                l'<Tooltip>
                  <TooltipTrigger className="underline decoration-dotted decoration-primary">
                    authenticité
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Caractère de ce qui est original et non copié, respectueux des droits d'auteur</p>
                  </TooltipContent>
                </Tooltip> et la propriété intellectuelle.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-amber-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-amber-800 mb-2">Principes éthiques essentiels</h4>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>• <strong>Transparence</strong> - Mentionnez l'usage de l'IA</li>
                      <li>• <strong>Respect</strong> - Évitez la copie d'styles existants</li>
                      <li>• <strong>Collaboration</strong> - L'IA augmente, ne remplace pas</li>
                      <li>• <strong>Responsabilité</strong> - Vérifiez et validez les contenus</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-green-800 mb-2">✅ Bonnes pratiques</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Combiner IA et expertise humaine</li>
                      <li>• Citer les outils utilisés</li>
                      <li>• Respecter les licences d'usage</li>
                      <li>• Développer son style unique</li>
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
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </LessonSection>

          <CourseConclusion
            title="Libérez votre potentiel créatif avec l'IA"
            description="Vous maîtrisez maintenant les fondamentaux de la créativité assistée par IA. Il est temps de créer et d'innover !"
            learningPoints={[
              "Comprendre les possibilités créatives de l'IA",
              "Maîtriser les techniques de prompt créatif",
              "Construire des workflows créatifs efficaces",
              "Utiliser les bons outils selon vos besoins",
              "Respecter l'éthique et les bonnes pratiques"
            ]}
            nextSteps={[
              "Expérimentez avec différents outils créatifs",
              "Développez votre style personnel unique",
              "Rejoignez des communautés d'artistes IA",
              "Suivez le cours 'Prompt Engineering' pour optimiser vos résultats",
              "Créez votre premier projet créatif avec IA"
            ]}
          />
        </div>
      </div>
    </TooltipProvider>
  );
};

export default IACreativite;
