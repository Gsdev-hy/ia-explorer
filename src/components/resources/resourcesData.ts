
export interface IAToolResource {
  name: string;
  description: string;
  url: string;
  category: string;
  author?: string;
}

export interface Resource {
  title: string;
  source: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
}

export interface ScientificPublication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  description: string;
  link: string;
  doi?: string;
}

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

export const realResources: Resource[] = [
  {
    title: "Introduction au Machine Learning",
    source: "OpenClassrooms",
    description: "Cours complet pour débuter dans le machine learning avec des exemples pratiques.",
    link: "https://openclassrooms.com/fr/courses/4011851-initiez-vous-au-machine-learning",
    type: "cours",
    year: 2023,
    tags: ["machine learning", "débutant", "python"]
  },
  {
    title: "L'Intelligence Artificielle pour tous",
    source: "France Université Numérique",
    description: "MOOC accessible à tous pour comprendre les enjeux et applications de l'IA.",
    link: "https://www.fun-mooc.fr/fr/cours/intelligence-artificielle-pour-tous/",
    type: "cours",
    year: 2023,
    tags: ["IA générale", "débutant", "vulgarisation"]
  },
  {
    title: "Deep Learning avec TensorFlow",
    source: "Coursera",
    description: "Spécialisation complète sur le deep learning et TensorFlow.",
    link: "https://www.coursera.org/specializations/tensorflow-in-practice",
    type: "cours",
    year: 2023,
    tags: ["deep learning", "tensorflow", "avancé"]
  },
  {
    title: "Intelligence Artificielle : Manuel de survie",
    source: "Laurent Alexandre",
    description: "Un livre accessible qui explore les enjeux sociétaux de l'IA.",
    link: "https://www.amazon.fr/Intelligence-artificielle-Manuel-survie-Laurent/dp/2709664437",
    type: "livre",
    year: 2019,
    tags: ["société", "éthique", "futur"]
  },
  {
    title: "Weapons of Math Destruction",
    source: "Cathy O'Neil",
    description: "Une analyse critique des algorithmes et de leur impact sur la société.",
    link: "https://weaponsofmathdestructionbook.com/",
    type: "livre",
    year: 2016,
    tags: ["éthique", "algorithmes", "société"]
  }
];

export const scientificPublications: ScientificPublication[] = [
  {
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar"],
    journal: "NIPS",
    year: 2017,
    description: "L'article fondateur qui introduit l'architecture Transformer, révolutionnant le traitement du langage naturel.",
    link: "https://arxiv.org/abs/1706.03762",
    doi: "10.48550/arXiv.1706.03762"
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    authors: ["Kaiming He", "Xiangyu Zhang", "Shaoqing Ren", "Jian Sun"],
    journal: "CVPR",
    year: 2016,
    description: "Introduction des réseaux résiduels (ResNet) qui ont permis l'entraînement de réseaux très profonds.",
    link: "https://arxiv.org/abs/1512.03385",
    doi: "10.1109/CVPR.2016.90"
  },
  {
    title: "Generative Adversarial Networks",
    authors: ["Ian Goodfellow", "Jean Pouget-Abadie", "Mehdi Mirza"],
    journal: "NIPS",
    year: 2014,
    description: "L'article original introduisant les GANs, une approche révolutionnaire pour la génération de données.",
    link: "https://arxiv.org/abs/1406.2661",
    doi: "10.48550/arXiv.1406.2661"
  }
];
