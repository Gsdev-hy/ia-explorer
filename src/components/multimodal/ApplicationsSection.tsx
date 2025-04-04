
import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { FeatureGrid } from '@/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  ImagePlus, Music, Code, Video, 
  MessagesSquare, FileText, Volume2, 
  Pencil, Palette, Braces, Sparkles, 
  PanelTop, Lightbulb, Workflow, 
  ArrowRightCircle, Building, Users2, UserSquare2
} from 'lucide-react';
import InteractiveWorkflow from '@/components/multimodal/InteractiveWorkflow';
import AICreationShowcase from '@/components/multimodal/AICreationShowcase';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface ApplicationsSectionProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ activeTab, setActiveTab }) => {
  const { toast } = useToast();
  const [selectedExample, setSelectedExample] = useState<string | null>(null);

  const handleExampleClick = (id: string, title: string) => {
    setSelectedExample(id);
    toast({
      title: `Information sur ${title}`,
      description: "Un exemple concret d'utilisation apparaîtra bientôt dans cette section.",
      duration: 3000,
    });
  };

  const multimodalExamples = [
    {
      id: "generation-images",
      title: "Génération d'images",
      description: "Création d'images à partir de descriptions textuelles avec Midjourney, DALL-E, Stable Diffusion. Utilisez des prompts détaillés et spécifiez le style artistique souhaité.",
      icon: <ImagePlus size={24} className="text-fuchsia-500" />,
      link: "#generation-images",
      imagePath: "/pics/image-generation.jpg",
      tools: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Imagen"],
      examples: [
        "Une forêt enchantée au crépuscule, avec des lanternes flottantes et des créatures magiques",
        "Portrait d'une femme âgée, style renaissance, éclairage dramatique Rembrandt",
        "Concept art futuriste d'une ville flottante avec des tours bioniques"
      ]
    },
    {
      id: "creation-musicale",
      title: "Création musicale",
      description: "Composition de musique avec Suno AI, MusicLM, Mubert. Décrivez l'ambiance, le genre et les instruments pour obtenir les meilleurs résultats.",
      icon: <Music size={24} className="text-blue-500" />,
      link: "#creation-musicale",
      imagePath: "/pics/music-creation.jpg",
      tools: ["Suno AI", "MusicLM", "Mubert", "Udio", "Harmonai"],
      examples: [
        "Composition électronique ambient avec des sons d'eau et des synthés relaxants",
        "Mélodie joyeuse au piano avec progression d'accords en Do majeur, temps modéré",
        "Musique orchestrale épique avec percussions puissantes et choeur"
      ]
    },
    {
      id: "generation-code",
      title: "Génération de code",
      description: "Assistance à la programmation avec GitHub Copilot, CodeWhisperer. Commentez clairement ce que vous souhaitez accomplir pour guider l'IA efficacement.",
      icon: <Code size={24} className="text-emerald-500" />,
      link: "#generation-code",
      imagePath: "/pics/code-generation.jpg",
      tools: ["GitHub Copilot", "Amazon CodeWhisperer", "Tabnine", "Replit Ghostwriter"],
      examples: [
        "Fonction pour valider un formulaire avec vérification d'email et de mot de passe",
        "API REST pour gérer un système d'inventaire avec authentification",
        "Animation CSS pour un menu déroulant avec transition fluide"
      ]
    },
    {
      id: "creation-video",
      title: "Création vidéo",
      description: "Production de vidéos avec Runway, Synthesia, D-ID. Combinez texte, images et narration pour des résultats optimaux.",
      icon: <Video size={24} className="text-amber-500" />,
      link: "#creation-video",
      imagePath: "/pics/video-creation.jpg",
      tools: ["Runway Gen-2", "Synthesia", "D-ID", "Pika Labs", "Luma AI"],
      examples: [
        "Vidéo promotionnelle de 30 secondes présentant un produit tech avec animation 3D",
        "Transformation d'une image fixe en vidéo avec mouvement de caméra cinématique",
        "Personnage animé présentant une formation professionnelle"
      ]
    },
    {
      id: "conversation-multimodale",
      title: "Conversation multimodale",
      description: "Dialogues intégrant texte, images et autres médias avec GPT-4V, Claude Opus, Gemini. Posez des questions précises sur les éléments visuels.",
      icon: <MessagesSquare size={24} className="text-indigo-500" />,
      link: "#conversation-multimodale",
      imagePath: "/pics/multimodal-conversation.jpg",
      tools: ["GPT-4o", "Claude Opus", "Gemini", "Anthropic Claude 3 Opus"],
      examples: [
        "Analyse détaillée d'un graphique financier avec identification des tendances clés",
        "Explication d'un schéma technique complexe avec annotations",
        "Identification des plats et ingrédients dans une photo de repas"
      ]
    },
    {
      id: "redaction-assistee",
      title: "Rédaction assistée",
      description: "Aide à l'écriture avec ChatGPT, Claude, Notion AI. Définissez clairement le ton, le style et le public cible dans vos instructions.",
      icon: <FileText size={24} className="text-purple-500" />,
      link: "#redaction-assistee",
      imagePath: "/pics/assisted-writing.jpg",
      tools: ["ChatGPT", "Claude", "Notion AI", "Writer.com", "Jasper"],
      examples: [
        "Rédaction d'un article de blog technique sur l'IA explicable dans un style accessible",
        "Email professionnel de demande de partenariat avec ton diplomatique",
        "Résumé concis d'un rapport de recherche scientifique de 20 pages"
      ]
    },
    {
      id: "synthese-vocale",
      title: "Synthèse vocale",
      description: "Conversion de texte en parole avec ElevenLabs, Resemble AI, Play.ht. Ajustez l'émotion et le rythme pour une narration naturelle.",
      icon: <Volume2 size={24} className="text-pink-500" />,
      link: "#synthese-vocale",
      imagePath: "/pics/voice-synthesis.jpg",
      tools: ["ElevenLabs", "Resemble AI", "Play.ht", "Wellsaid Labs", "Murf.ai"],
      examples: [
        "Narration émotionnelle pour un documentaire sur la conservation marine",
        "Message d'accueil professionnel pour un standard téléphonique d'entreprise",
        "Livre audio avec différentes voix pour chaque personnage"
      ]
    },
    {
      id: "design-graphique",
      title: "Design graphique",
      description: "Création de designs et logos avec Canva AI, Adobe Firefly. Combinez des instructions textuelles avec des références visuelles pour guider l'IA.",
      icon: <Palette size={24} className="text-rose-500" />,
      link: "#design-graphique",
      imagePath: "/pics/graphic-design.jpg",
      tools: ["Canva AI", "Adobe Firefly", "Galileo AI", "Designs.ai", "Brandmark"],
      examples: [
        "Logo minimaliste pour une startup technologique dans le domaine de la santé",
        "Affiche promotionnelle pour un festival de musique style rétro années 80",
        "Modèle de présentation professionnelle avec palette de couleurs harmonieuse"
      ]
    },
    {
      id: "edition-contenu",
      title: "Édition de contenu",
      description: "Amélioration et correction de textes avec Grammarly, DeepL Write. Spécifiez le niveau de formalité et le type de modifications souhaités.",
      icon: <Pencil size={24} className="text-cyan-500" />,
      link: "#edition-contenu",
      imagePath: "/pics/content-editing.jpg",
      tools: ["Grammarly", "DeepL Write", "Hemingway App", "ProWritingAid", "QuillBot"],
      examples: [
        "Amélioration stylistique d'un essai académique pour publication",
        "Simplification d'un texte technique pour un public non-spécialiste",
        "Correction et reformulation d'une traduction automatique brute"
      ]
    },
    {
      id: "automatisation-taches",
      title: "Automatisation de tâches",
      description: "Intégration d'IA dans les workflows avec Zapier AI, Make.com. Utilisez des descriptifs clairs des actions à automatiser pour de meilleurs résultats.",
      icon: <Braces size={24} className="text-orange-500" />,
      link: "#automatisation-taches",
      imagePath: "/pics/task-automation.jpg",
      tools: ["Zapier AI", "Make.com", "n8n", "Bardeen", "IFTTT"],
      examples: [
        "Automatisation du traitement des demandes clients avec analyse de sentiment",
        "Système de classification automatique des emails entrants par priorité",
        "Workflow d'approbation de documents avec extraction de données clés"
      ]
    },
    {
      id: "marketing-ia",
      title: "Marketing IA",
      description: "Optimisation des campagnes marketing avec Copy.ai, Persado. Créez des contenus ciblés et analysez leur impact potentiel avant publication.",
      icon: <Building size={24} className="text-lime-500" />,
      link: "#marketing-ia",
      imagePath: "/lovable-uploads/93b1a36e-0fc6-4f70-8be1-d27437de628c.png",
      tools: ["Copy.ai", "Persado", "MarketMuse", "Phrasee", "Albert"],
      examples: [
        "Génération de slogans accrocheurs pour une campagne publicitaire",
        "Création de contenu pour email marketing avec tests A/B",
        "Optimisation de textes pour améliorer le taux de conversion"
      ]
    },
    {
      id: "education-formation",
      title: "Éducation & Formation",
      description: "Création de matériel pédagogique avec Khan Academy Khanmigo, Duolingo AI. Adaptez le contenu au niveau et au style d'apprentissage de l'apprenant.",
      icon: <Users2 size={24} className="text-violet-500" />,
      link: "#education-formation",
      imagePath: "/placeholder.svg",
      tools: ["Khanmigo", "Duolingo AI", "Quizlet", "Pearson AI", "Coursera Coach"],
      examples: [
        "Module d'apprentissage interactif sur un sujet scientifique complexe",
        "Exercices personnalisés adaptés aux difficultés spécifiques de l'apprenant",
        "Simulation de dialogue pour l'apprentissage des langues étrangères"
      ]
    },
    {
      id: "avatars-digitaux",
      title: "Avatars digitaux",
      description: "Création d'avatars photoréalistes ou stylisés avec Ready Player Me, Inworld AI. Définissez la personnalité et les caractéristiques uniques de votre représentation virtuelle.",
      icon: <UserSquare2 size={24} className="text-teal-500" />,
      link: "#avatars-digitaux",
      imagePath: "/placeholder.svg",
      tools: ["Ready Player Me", "Inworld AI", "Synthesia", "Soul Machines", "Replica Studios"],
      examples: [
        "Avatar pour présentateur virtuel d'événements professionnels en ligne",
        "Personnage animé pour formation avec expressions faciales réalistes",
        "Assistant virtuel personnalisé avec personnalité adaptée à votre marque"
      ]
    },
  ];

  // Composant personnalisé pour les cartes d'applications avec images
  const AppCard = ({ app }) => (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
        <div className="aspect-[3/2] w-full overflow-hidden">
          <img 
            src={app.imagePath} 
            alt={app.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-primary/10">
              {app.icon}
            </div>
            <h3 className="font-semibold heading-sm">{app.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm flex-grow">{app.description}</p>
          
          <div className="mt-3 mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1.5">Outils populaires:</p>
            <div className="flex flex-wrap gap-1.5">
              {app.tools.slice(0, 2).map((tool, i) => (
                <span key={i} className="inline-block px-2 py-1 bg-secondary/40 text-xs rounded-full">
                  {tool}
                </span>
              ))}
              {app.tools.length > 2 && (
                <span className="inline-block px-2 py-1 bg-secondary/20 text-xs rounded-full">
                  +{app.tools.length - 2}
                </span>
              )}
            </div>
          </div>
          
          <button 
            onClick={() => handleExampleClick(app.id, app.title)}
            className="mt-auto inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
            aria-label={`En savoir plus sur ${app.title}`}
          >
            Découvrir <ArrowRightCircle size={14} />
          </button>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section id="applications-creatives" className="section-container">
      <SectionHeading
        pretitle="Applications créatives"
        title="Les IA multimodales en action"
        description="Les IA actuelles peuvent générer et manipuler divers types de médias, ouvrant de nouvelles possibilités créatives dans de nombreux domaines."
        center
      />

      <Tabs defaultValue="applications" className="mt-10 mb-8" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-xl">
            <TabsTrigger value="applications" className="flex gap-2 items-center">
              <Sparkles size={16} />
              <span>Applications</span>
            </TabsTrigger>
            <TabsTrigger value="fonctionnement" className="flex gap-2 items-center">
              <PanelTop size={16} />
              <span>Fonctionnement</span>
            </TabsTrigger>
            <TabsTrigger value="showcase" className="flex gap-2 items-center">
              <Lightbulb size={16} />
              <span>Exemples</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="applications" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {multimodalExamples.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
          
          {selectedExample && (
            <div className="mt-10 p-6 border border-primary/10 rounded-xl bg-secondary/5">
              <h3 className="heading-sm mb-4">Exemples de prompts pour {multimodalExamples.find(e => e.id === selectedExample)?.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {multimodalExamples.find(e => e.id === selectedExample)?.examples.map((example, i) => (
                  <div key={i} className="bg-secondary/20 p-4 rounded-lg border border-primary/5">
                    <p className="text-sm font-mono">{example}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="fonctionnement" className="animate-fade-in space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="heading-sm mb-4 flex items-center gap-2">
                <Workflow className="text-primary" size={20} />
                Comment fonctionnent les IA multimodales
              </h3>
              <p className="text-muted-foreground mb-4">
                Les IA multimodales sont capables de traiter et générer différents types de médias (texte, image, son, vidéo) 
                en utilisant une architecture neuronale unifiée qui comprend des encodeurs et décodeurs spécialisés pour chaque modalité.
              </p>
              <p className="text-muted-foreground">
                Elles transforment différents types d'entrées en représentations vectorielles (embeddings) partageant 
                un même espace latent, permettant ainsi des conversions et des interactions entre modalités.
              </p>
            </div>

            <InteractiveWorkflow />
          </div>
        </TabsContent>
        
        <TabsContent value="showcase" className="animate-fade-in">
          <AICreationShowcase />
        </TabsContent>
      </Tabs>

      <div className="my-10 flex justify-center">
        <Button asChild size="lg" className="rounded-full animate-pulse">
          <a href="#prompting-efficace" className="flex items-center gap-2">
            <span>Découvrir l'art du prompting</span>
            <ArrowRightCircle size={18} />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ApplicationsSection;
