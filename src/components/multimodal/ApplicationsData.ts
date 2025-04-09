
import React from 'react';
import { 
  ImagePlus, Music, Code, Video, 
  MessagesSquare, FileText, Volume2, 
  Pencil, Palette, Braces, Sparkles, 
  Building, Users, UserSquare2
} from 'lucide-react';

export interface AppExample {
  id: string;
  title: string;
  icon: string; // Changed to string to store icon name
  iconComponent: React.ElementType; // Added to store the actual component reference
  description: string;
  link: string;
  imagePath: string;
  tools: string[];
  examples: string[];
}

export const multimodalExamples: AppExample[] = [
  {
    id: "generation-images",
    title: "Génération d'images",
    description: "Création d'images à partir de descriptions textuelles avec Midjourney, DALL-E, Stable Diffusion. Utilisez des prompts détaillés et spécifiez le style artistique souhaité.",
    icon: "ImagePlus",
    iconComponent: ImagePlus,
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
    icon: "Music",
    iconComponent: Music,
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
    icon: "Code",
    iconComponent: Code,
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
    icon: "Video",
    iconComponent: Video,
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
    icon: "MessagesSquare",
    iconComponent: MessagesSquare,
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
    icon: "FileText",
    iconComponent: FileText,
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
    icon: "Volume2",
    iconComponent: Volume2,
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
    icon: "Palette",
    iconComponent: Palette,
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
    icon: "Pencil",
    iconComponent: Pencil,
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
    icon: "Braces",
    iconComponent: Braces,
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
    icon: "Building",
    iconComponent: Building,
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
    icon: "Users",
    iconComponent: Users,
    link: "#education-formation",
    imagePath: "/pics/image-placeholder.jpg",
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
    icon: "UserSquare2",
    iconComponent: UserSquare2,
    link: "#avatars-digitaux",
    imagePath: "/pics/avatar-placeholder.jpg",
    tools: ["Ready Player Me", "Inworld AI", "Synthesia", "Soul Machines", "Replica Studios"],
    examples: [
      "Avatar pour présentateur virtuel d'événements professionnels en ligne",
      "Personnage animé pour formation avec expressions faciales réalistes",
      "Assistant virtuel personnalisé avec personnalité adaptée à votre marque"
    ]
  }
];
