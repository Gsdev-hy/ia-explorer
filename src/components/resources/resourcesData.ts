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
  year: number;
  journal: string;
  description: string;
  link: string;
  tags?: string[];
}

export interface IAToolResource {
  name: string;
  description: string;
  category: string;
  link: string;
  author?: string;
  features: string[];
  pricing: "Gratuit" | "Freemium" | "Payant";
}

export const realResources: Resource[] = [
  // Nouveaux cours en tête de liste
  {
    title: "Comment utiliser intelligemment les intelligences artificielles au travail",
    source: "Geoffroy Streit",
    description: "Guide complet pour intégrer efficacement l'IA dans votre environnement professionnel. Découvrez les meilleures pratiques, outils et stratégies pour optimiser votre productivité au travail avec l'IA.",
    link: "/cours/utiliser-ia-travail",
    type: "cours",
    year: 2024,
    tags: ["Usage professionnel", "Productivité", "Stratégie", "Outils IA", "Gestion", "Collaboration", "Workflow", "Efficacité", "Management"]
  },
  {
    title: "Comment organiser les différents types de services IA que l'on utilise ?",
    source: "Geoffroy Streit",
    description: "Méthode structurée pour organiser, catégoriser et gérer efficacement tous vos outils et services IA. Apprenez à créer votre écosystème IA personnel optimal.",
    link: "/cours/organiser-services-ia",
    type: "cours",
    year: 2024,
    tags: ["Organisation", "Gestion", "Services IA", "Catégorisation", "Écosystème", "Planification", "Optimisation", "Structure", "Méthode"]
  },

  // Cours existant
  {
    title: "Comment utiliser intelligemment les intelligences artificielles au quotidien",
    source: "Geoffroy Streit",
    description: "Guide pratique pour intégrer efficacement l'IA dans votre vie personnelle et professionnelle. Apprenez à optimiser votre productivité tout en évitant les pièges.",
    link: "/cours/utiliser-ia-quotidien",
    type: "cours",
    year: 2024,
    tags: ["Usage quotidien", "Productivité", "Pratique", "Débutant", "Guide", "Assistant IA", "Optimisation", "Éthique", "Bonnes pratiques"]
  },

  // Cours existants
  {
    title: "Introduction au Machine Learning",
    source: "Université de Montréal",
    description: "Cours complet pour débuter dans le machine learning avec des exercices pratiques.",
    link: "https://www.coursera.org/learn/machine-learning-course",
    type: "cours",
    year: 2023,
    tags: ["Machine Learning", "Débutant", "Mathématiques"]
  },
  {
    title: "L'Intelligence Artificielle pour tous",
    source: "École Polytechnique",
    description: "MOOC accessible qui explique les concepts fondamentaux de l'IA sans prérequis techniques.",
    link: "https://www.coursera.org/learn/ai-for-everyone-fr",
    type: "cours",
    year: 2024,
    tags: ["IA Générale", "Débutant", "Vulgarisation"]
  },
  {
    title: "Deep Learning avec TensorFlow",
    source: "Université Paris-Saclay",
    description: "Spécialisation complète sur le deep learning et l'utilisation de TensorFlow.",
    link: "https://www.coursera.org/specializations/tensorflow-in-practice",
    type: "cours",
    year: 2023,
    tags: ["Deep Learning", "TensorFlow", "Avancé"]
  },

  // Livres existants
  {
    title: "Intelligence Artificielle : Manuel de survie",
    source: "Laurent Alexandre",
    description: "Guide pratique pour comprendre les enjeux sociétaux de l'IA.",
    link: "https://www.amazon.fr/Intelligence-Artificielle-Manuel-survie-Laurent/dp/2709661470",
    type: "livre",
    year: 2019,
    tags: ["Société", "Éthique", "Vulgarisation"]
  },
  {
    title: "Weapons of Math Destruction",
    source: "Cathy O'Neil",
    description: "Analyse critique des algorithmes et de leurs impacts sur la société (traduit en français).",
    link: "https://www.amazon.fr/Algorithmes-destruction-massive-Cathy-ONeil/dp/2021423913",
    type: "livre",
    year: 2018,
    tags: ["Éthique", "Algorithmes", "Société"]
  },

  // Articles
  {
    title: "Les défis éthiques de l'Intelligence Artificielle",
    source: "Le Monde",
    description: "Article de fond sur les questions éthiques soulevées par le développement de l'IA.",
    link: "https://www.lemonde.fr/pixels/article/2023/03/15/les-defis-ethiques-de-l-intelligence-artificielle_6166789_4408996.html",
    type: "article",
    year: 2023,
    tags: ["Éthique", "Actualité", "Débat"]
  },
  {
    title: "ChatGPT et les LLM : révolution ou évolution ?",
    source: "Sciences et Avenir",
    description: "Analyse approfondie des modèles de langage et de leur impact sur nos sociétés.",
    link: "https://www.sciencesetavenir.fr/high-tech/intelligence-artificielle/chatgpt-et-les-llm-revolution-ou-evolution_169876",
    type: "article",
    year: 2024,
    tags: ["LLM", "ChatGPT", "Analyse"]
  },

  // Vidéos
  {
    title: "L'IA expliquée simplement",
    source: "Science Étonnante",
    description: "Série de vidéos vulgarisant les concepts d'intelligence artificielle.",
    link: "https://www.youtube.com/watch?v=oV74Najm6Nc",
    type: "vidéo",
    year: 2023,
    tags: ["Vulgarisation", "YouTube", "Éducation"]
  },
  {
    title: "Les réseaux de neurones artificiels",
    source: "Computerphile",
    description: "Explication détaillée du fonctionnement des réseaux de neurones (sous-titres français).",
    link: "https://www.youtube.com/watch?v=aircAruvnKk",
    type: "vidéo",
    year: 2022,
    tags: ["Réseaux de neurones", "Technique", "Éducation"]
  },
  {
    title: "L'avenir de l'Intelligence Artificielle",
    source: "TEDx Paris",
    description: "Conférence sur les perspectives d'évolution de l'IA et son impact futur.",
    link: "https://www.youtube.com/watch?v=example-tedx",
    type: "vidéo",
    year: 2024,
    tags: ["Futur", "Conférence", "Prospective"]
  },

  // Sites web
  {
    title: "IA Institut",
    source: "IA Institut",
    description: "Plateforme française dédiée à la formation et à l'information sur l'IA.",
    link: "https://www.ia-institut.fr",
    type: "site web",
    year: 2023,
    tags: ["Formation", "Actualité", "Communauté"]
  },
  {
    title: "Papers with Code",
    source: "Papers with Code",
    description: "Base de données de publications scientifiques en IA avec code source associé.",
    link: "https://paperswithcode.com",
    type: "site web",
    year: 2024,
    tags: ["Recherche", "Code", "Publications"]
  },
  {
    title: "Towards Data Science",
    source: "Medium",
    description: "Plateforme collaborative avec des articles de qualité sur la data science et l'IA.",
    link: "https://towardsdatascience.com",
    type: "site web",
    year: 2024,
    tags: ["Data Science", "Articles", "Communauté"]
  }
];

export const scientificPublications: ScientificPublication[] = [
  {
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar"],
    year: 2017,
    journal: "Neural Information Processing Systems",
    description: "Article fondateur introduisant l'architecture Transformer, base des LLM modernes.",
    link: "https://arxiv.org/abs/1706.03762",
    tags: ["Transformer", "NLP", "Architecture"]
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee"],
    year: 2018,
    journal: "NAACL",
    description: "Introduction de BERT, modèle révolutionnaire pour la compréhension du langage naturel.",
    link: "https://arxiv.org/abs/1810.04805",
    tags: ["BERT", "NLP", "Pre-training"]
  },
  {
    title: "GPT-4 Technical Report",
    authors: ["OpenAI"],
    year: 2023,
    journal: "OpenAI",
    description: "Rapport technique détaillant les capacités et limitations de GPT-4.",
    link: "https://arxiv.org/abs/2303.08774",
    tags: ["GPT", "LLM", "Multimodal"]
  }
];

export const iaTools: IAToolResource[] = [
  {
    name: "Simulateur d'IA",
    description: "Interface pour tester des concepts d'IA (reconnaissance d'images, génération de texte)",
    category: "Éducation",
    link: "/simulateur-ia",
    author: "Geoffroy Streit",
    features: ["Reconnaissance d'images", "Génération de texte", "Analyse de sentiment"],
    pricing: "Gratuit"
  },
  {
    name: "Calculateur de coûts IA",
    description: "Outil pour estimer les coûts d'implémentation de solutions IA",
    category: "Business",
    link: "/calculateur-couts-ia",
    author: "Geoffroy Streit",
    features: ["Estimation de coûts", "ROI", "Planification de projet"],
    pricing: "Gratuit"
  },
  {
    name: "Hugging Face",
    description: "Plateforme collaborative pour les modèles de machine learning",
    category: "Développement",
    link: "https://huggingface.co",
    features: ["Modèles pré-entraînés", "Datasets", "API", "Communauté"],
    pricing: "Freemium"
  },
  {
    name: "Google Colab",
    description: "Environnement de développement gratuit avec GPU pour l'IA",
    category: "Développement",
    link: "https://colab.research.google.com",
    features: ["GPU gratuit", "Notebooks", "Collaboration", "Intégration Google Drive"],
    pricing: "Freemium"
  },
  {
    name: "Kaggle",
    description: "Plateforme de compétitions et d'apprentissage en data science",
    category: "Éducation",
    link: "https://www.kaggle.com",
    features: ["Compétitions", "Datasets", "Notebooks", "Cours"],
    pricing: "Freemium"
  }
];
