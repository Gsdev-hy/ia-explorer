
// Types
export interface Resource {
  title: string;
  source: string;
  author: string;
  type: 'cours' | 'livre' | 'article' | 'vidéo' | 'podcast';
  link: string;
  tags?: string[];
  year?: number;
  description: string;
}

export interface ScientificPublication {
  title: string;
  authors: string;
  publication: string;
  link: string;
  year: number;
  description: string;
}

export interface IAToolResource {
  name: string;
  category: string;
  link: string;
  description: string;
}

// Ressources réelles
export const realResources: Resource[] = [
  {
    title: "Cours Introduction au Deep Learning",
    source: "Collège de France",
    author: "Yann LeCun",
    type: "cours",
    link: "https://www.college-de-france.fr/site/yann-lecun/course-2016-02-04-14h00.htm",
    tags: ["deep learning", "fondamentaux", "cours"],
    year: 2022,
    description: "Série de cours sur les fondements du deep learning par l'un des pionniers du domaine."
  },
  {
    title: "Intelligence artificielle : avec quoi les étudiants doivent-ils se familiariser ?",
    source: "The Conversation",
    author: "Serge Abiteboul",
    type: "article",
    link: "https://theconversation.com/intelligence-artificielle-avec-quoi-les-etudiants-doivent-ils-se-familiariser-213183",
    tags: ["éducation", "IA générale", "introduction"],
    year: 2023,
    description: "Article explorant les compétences essentielles en IA pour les étudiants."
  },
  {
    title: "Elements of AI",
    source: "Université d'Helsinki",
    author: "Université d'Helsinki et Reaktor",
    type: "cours",
    link: "https://www.elementsofai.fr/",
    tags: ["introduction", "cours", "gratuit"],
    year: 2023, 
    description: "Cours interactif gratuit sur les concepts fondamentaux de l'IA, accessible à tous."
  },
  {
    title: "Artificial Intelligence - A Modern Approach (4e édition, traduction française)",
    source: "Pearson",
    author: "Stuart Russell et Peter Norvig",
    type: "livre",
    link: "https://www.pearson.fr/book/?gcoi=27440100827370",
    tags: ["manuel", "référence", "IA générale"],
    year: 2020,
    description: "L'ouvrage de référence sur l'IA, couvrant l'ensemble des approches modernes."
  },
  {
    title: "L'IA expliquée à mon boss",
    source: "Dunod",
    author: "Emmanuel Manceau et Romain Chaumais",
    type: "livre",
    link: "https://www.dunod.com/sciences-techniques/ia-expliquee-mon-boss",
    tags: ["vulgarisation", "business", "introduction"],
    year: 2023,
    description: "Livre accessible expliquant les aspects pratiques de l'IA pour le monde professionnel."
  },
  {
    title: "Fondamentaux du Deep Learning",
    source: "O'Reilly",
    author: "Nikhil Buduma et Nicholas Locascio",
    type: "livre",
    link: "https://www.eyrolles.com/Informatique/Livre/fondamentaux-du-deep-learning-9782412034438/",
    tags: ["deep learning", "neural networks", "programmation"],
    year: 2022,
    description: "Introduction technique au deep learning avec exemples pratiques."
  },
  {
    title: "L'intelligence artificielle pas à pas",
    source: "Eyrolles",
    author: "Vincent Renvoizé",
    type: "livre",
    link: "https://www.eyrolles.com/Informatique/Livre/l-intelligence-artificielle-pas-a-pas-9782212675610/",
    tags: ["programmation", "python", "débutant"],
    year: 2024,
    description: "Approche progressive de l'IA avec des exemples concrets en Python."
  },
  {
    title: "Coursera - Machine Learning",
    source: "Coursera",
    author: "Andrew Ng",
    type: "cours",
    link: "https://www.coursera.org/learn/machine-learning",
    tags: ["machine learning", "cours", "fondamentaux"],
    year: 2024,
    description: "Le cours emblématique d'Andrew Ng sur le machine learning, disponible en plusieurs langues."
  },
  {
    title: "AI for Everyone",
    source: "Coursera",
    author: "Andrew Ng",
    type: "cours",
    link: "https://www.coursera.org/learn/ai-for-everyone",
    tags: ["introduction", "non-technique", "cours"],
    year: 2023,
    description: "Cours non-technique sur l'IA, accessible à tous, disponible en français."
  },
  {
    title: "Intelligence artificielle - Données massives et algorithmes",
    source: "La Découverte",
    author: "Jean-Gabriel Ganascia",
    type: "livre",
    link: "https://www.editionsladecouverte.fr/intelligence_artificielle-9782707199935",
    tags: ["sociologie", "philosophie", "éthique"],
    year: 2024,
    description: "Analyse des enjeux sociétaux et éthiques de l'IA par un expert reconnu."
  },
  {
    title: "La chaîne YouTube d'Hugo Larochelle",
    source: "YouTube",
    author: "Hugo Larochelle",
    type: "vidéo",
    link: "https://www.youtube.com/@hugolarochelle",
    tags: ["deep learning", "vidéo", "cours"],
    year: 2024,
    description: "Série de cours vidéo approfondis sur le deep learning par un chercheur Google."
  },
  {
    title: "Podcast La French Tech",
    source: "La French Tech",
    author: "Divers",
    type: "podcast",
    link: "https://lafrenchtech.com/fr/",
    tags: ["tech", "innovation", "podcast"],
    year: 2025,
    description: "Épisodes sur les avancées en IA et l'écosystème tech français."
  }
];

// Publications scientifiques
export const scientificPublications: ScientificPublication[] = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    publication: "NIPS 2017",
    link: "https://arxiv.org/abs/1706.03762",
    year: 2017,
    description: "Article fondateur introduisant l'architecture Transformer, à la base des modèles LLM modernes."
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    authors: "He et al.",
    publication: "CVPR 2016",
    link: "https://arxiv.org/abs/1512.03385",
    year: 2016,
    description: "Introduction des réseaux résiduels (ResNet), une avancée majeure en vision par ordinateur."
  },
  {
    title: "Language Models are Few-Shot Learners",
    authors: "Brown et al.",
    publication: "NeurIPS 2020",
    link: "https://arxiv.org/abs/2005.14165",
    year: 2020,
    description: "Article présentant GPT-3 et les capacités d'apprentissage avec peu d'exemples."
  },
  {
    title: "Learning Transferable Visual Models From Natural Language Supervision",
    authors: "Radford et al.",
    publication: "ICML 2021",
    link: "https://arxiv.org/abs/2103.00020",
    year: 2021,
    description: "Introduction de CLIP, un modèle multimodal texte-image révolutionnaire."
  }
];

// Outils et plateformes d'IA
export const iaTools: IAToolResource[] = [
  {
    name: "Hugging Face",
    category: "Plateforme",
    link: "https://huggingface.co/",
    description: "Bibliothèque et écosystème open-source pour les modèles de langage et d'autres modèles d'IA."
  },
  {
    name: "TensorFlow",
    category: "Framework",
    link: "https://www.tensorflow.org/",
    description: "Framework open-source pour le développement et l'entraînement de modèles de deep learning."
  },
  {
    name: "PyTorch",
    category: "Framework",
    link: "https://pytorch.org/",
    description: "Framework flexible de deep learning populaire dans la recherche en IA."
  },
  {
    name: "Kaggle",
    category: "Plateforme d'apprentissage",
    link: "https://www.kaggle.com/",
    description: "Communauté pour l'apprentissage du machine learning et la participation à des compétitions."
  },
  {
    name: "Scikit-learn",
    category: "Bibliothèque",
    link: "https://scikit-learn.org/",
    description: "Bibliothèque Python simple et efficace pour le machine learning classique."
  },
  {
    name: "Google Colab",
    category: "Environnement",
    link: "https://colab.research.google.com/",
    description: "Notebook Jupyter gratuit permettant d'utiliser des GPU pour l'entraînement de modèles."
  }
];
