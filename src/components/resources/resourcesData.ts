import { IAToolResource } from './resourcesData';

export const iaTools: IAToolResource[] = [
  // Nouveaux outils créés par Geoffroy Streit
  {
    name: "Simulateur d'IA",
    description: "Interface interactive pour tester et comprendre différents concepts d'IA : reconnaissance d'images, génération de texte, classification, et plus encore. Créé par Geoffroy Streit.",
    url: "/simulateur-ia",
    category: "Éducatif",
    author: "Geoffroy Streit"
  },
  {
    name: "Calculateur de coûts IA",
    description: "Outil pratique pour estimer les coûts d'implémentation de solutions IA dans votre entreprise. Analyse les besoins, ressources et retour sur investissement. Créé par Geoffroy Streit.",
    url: "/calculateur-couts-ia",
    category: "Business",
    author: "Geoffroy Streit"
  },
  // Outils existants
  {
    name: "ChatGPT",
    description: "Un modèle de langage développé par OpenAI, capable de générer du texte, de traduire des langues, d'écrire différents types de contenu créatif et de répondre à vos questions de manière informative.",
    url: "https://chat.openai.com",
    category: "Modèle de langage"
  },
  {
    name: "DALL-E 2",
    description: "Un système d'IA développé par OpenAI qui peut créer des images réalistes et de l'art à partir d'une description en langage naturel.",
    url: "https://openai.com/dall-e-2/",
    category: "Génération d'images"
  },
  {
    name: "Midjourney",
    description: "Un programme d'IA qui crée des images à partir de descriptions textuelles, similaire à DALL-E, mais avec un style artistique distinct.",
    url: "https://www.midjourney.com",
    category: "Génération d'images"
  },
  {
    name: "Stable Diffusion",
    description: "Un modèle de diffusion latente capable de générer des images détaillées à partir de descriptions textuelles.",
    url: "https://stability.ai/stable-diffusion",
    category: "Génération d'images"
  },
  {
    name: "GitHub Copilot",
    description: "Un assistant de programmation IA qui aide les développeurs en suggérant du code et des fonctions entières.",
    url: "https://github.com/features/copilot",
    category: "Développement"
  },
  {
    name: "Notion AI",
    description: "Intégration d'IA dans Notion pour l'aide à la rédaction, au brainstorming et à l'organisation de contenu.",
    url: "https://www.notion.so/product/ai",
    category: "Productivité"
  },
  {
    name: "Jasper",
    description: "Plateforme d'IA pour la création de contenu marketing, articles de blog, et copies publicitaires.",
    url: "https://www.jasper.ai",
    category: "Marketing"
  },
  {
    name: "Copy.ai",
    description: "Générateur de contenu IA pour créer des textes marketing, des emails, et du contenu social media.",
    url: "https://www.copy.ai",
    category: "Marketing"
  },
  {
    name: "Runway ML",
    description: "Suite d'outils créatifs alimentés par l'IA pour la génération et l'édition de vidéos, d'images et d'audio.",
    url: "https://runwayml.com",
    category: "Créatif"
  },
  {
    name: "Synthesia",
    description: "Plateforme de création de vidéos IA avec des avatars virtuels qui peuvent parler dans plusieurs langues.",
    url: "https://www.synthesia.io",
    category: "Vidéo"
  }
];

export interface IAToolResource {
  name: string;
  description: string;
  url: string;
  category: string;
  author?: string;
}
