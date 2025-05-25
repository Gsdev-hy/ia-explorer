
import { IAToolResource } from '../resourcesData';

export const iaTools: IAToolResource[] = [
  {
    name: "ChatGPT",
    description: "Assistant conversationnel basé sur GPT pour diverses tâches de rédaction et d'analyse",
    link: "https://chat.openai.com/",
    category: "Assistant IA",
    pricing: "Freemium",
    features: ["Conversation", "Rédaction", "Analyse", "Code"]
  },
  {
    name: "Claude",
    description: "Assistant IA d'Anthropic spécialisé dans les conversations longues et nuancées",
    link: "https://claude.ai/",
    category: "Assistant IA", 
    pricing: "Freemium",
    features: ["Conversation", "Analyse", "Rédaction", "Éthique"]
  },
  {
    name: "Midjourney",
    description: "Générateur d'images IA de haute qualité via Discord",
    link: "https://midjourney.com/",
    category: "Génération d'images",
    pricing: "Payant",
    features: ["Images", "Art", "Design", "Créativité"]
  },
  {
    name: "DALL-E 3",
    description: "Générateur d'images IA intégré à ChatGPT et Bing",
    link: "https://openai.com/dall-e-3",
    category: "Génération d'images",
    pricing: "Payant",
    features: ["Images", "Créativité", "Design"]
  },
  {
    name: "Stable Diffusion",
    description: "Modèle open source de génération d'images",
    link: "https://stability.ai/",
    category: "Génération d'images",
    pricing: "Gratuit",
    features: ["Open source", "Images", "Personnalisable"]
  },
  {
    name: "GitHub Copilot",
    description: "Assistant de programmation IA intégré aux éditeurs de code",
    link: "https://github.com/features/copilot",
    category: "Programmation",
    pricing: "Payant",
    features: ["Code", "Autocomplétion", "Documentation"]
  },
  {
    name: "Notion AI",
    description: "Assistant IA intégré à Notion pour la productivité et la rédaction",
    link: "https://www.notion.so/product/ai",
    category: "Productivité",
    pricing: "Freemium",
    features: ["Rédaction", "Résumés", "Organisation"]
  },
  {
    name: "Perplexity",
    description: "Moteur de recherche conversationnel avec sources",
    link: "https://www.perplexity.ai/",
    category: "Recherche",
    pricing: "Freemium",
    features: ["Recherche", "Sources", "Conversation"]
  },
  {
    name: "Runway ML",
    description: "Suite d'outils IA pour la création vidéo et le montage",
    link: "https://runwayml.com/",
    category: "Vidéo",
    pricing: "Freemium",
    features: ["Vidéo", "Montage", "Effets spéciaux"]
  },
  {
    name: "ElevenLabs",
    description: "Synthèse vocale IA ultra-réaliste en plusieurs langues",
    link: "https://elevenlabs.io/",
    category: "Audio",
    pricing: "Freemium",
    features: ["Voix", "Synthèse", "Multilingue"]
  }
];
