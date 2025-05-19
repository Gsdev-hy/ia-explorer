export interface Resource {
  title: string;
  source: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
  author?: string;
}

export interface IAToolResource {
  name: string;
  description: string;
  link: string;
  category: string;
  tags?: string[];
}

export interface ScientificPublication {
  title: string;
  authors: string[];
  publication: string;
  description: string;
  link: string;
  year: number;
  tags?: string[];
}

export const realResources: Resource[] = [
  {
    title: "Cours introduction au Deep Learning",
    source: "Collège de France",
    description: "Série de cours sur les fondements du deep learning par l'un des pionniers du domaine.",
    link: "https://www.college-de-france.fr/fr/agenda/cours/les-bases-theoriques-et-algorithmiques-du-deep-learning",
    type: "cours",
    year: 2022,
    tags: ["deep learning", "fondamentaux"]
  },
  {
    title: "Elements of AI",
    source: "Université d'Helsinki",
    description: "Cours interactif gratuit sur les concepts fondamentaux de l'IA, accessible à tous.",
    link: "https://www.elementsofai.fr/",
    type: "cours",
    year: 2023,
    tags: ["introduction", "fondamentaux"]
  },
  {
    title: "Coursera - Machine Learning",
    source: "Coursera",
    description: "Le cours emblématique d'Andrew Ng sur le machine learning, disponible en plusieurs langues.",
    link: "https://www.coursera.org/learn/machine-learning",
    type: "cours",
    year: 2024,
    tags: ["machine learning", "fondamentaux"]
  },
  {
    title: "L'IA expliquée aux enfants",
    source: "Geoffroy Streit",
    description: "Une approche progressive, pédagogique et accessible pour comprendre l'IA destinée aux enfants dès 12 ans.",
    link: "/ia-expliquee-aux-enfants",
    type: "cours",
    year: 2024,
    tags: ["1ère approche", "enfant", "vulgarisation"]
  },
  {
    title: "Les bases pour développer une APP avec de l'IA",
    source: "Geoffroy Streit",
    description: "Guide complet sur les concepts, outils et bonnes pratiques pour développer des applications intégrant l'IA.",
    link: "/coder-avec-ia",
    type: "cours",
    year: 2024,
    tags: ["code", "app", "dev par ia"]
  },
  {
    title: "Deep Learning Specialization",
    source: "Coursera",
    description: "Série de cours approfondis sur le deep learning par Andrew Ng.",
    link: "https://www.coursera.org/specializations/deep-learning",
    type: "cours",
    year: 2023,
    tags: ["deep learning", "avancé"]
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    source: "Peter Norvig & Stuart J. Russell",
    description: "Un manuel de référence complet sur l'IA, couvrant tous les aspects du domaine.",
    link: "https://aima.cs.berkeley.edu/",
    type: "livre",
    year: 2020,
    tags: ["manuel", "fondamentaux"]
  },
  {
    title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
    source: "Aurélien Géron",
    description: "Guide pratique pour apprendre le machine learning avec Scikit-Learn, Keras et TensorFlow.",
    link: "https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/",
    type: "livre",
    year: 2019,
    tags: ["machine learning", "pratique"]
  },
  {
    title: "Deep Learning (Adaptive Computation and Machine Learning series)",
    source: "Ian Goodfellow, Yoshua Bengio and Aaron Courville",
    description: "Un livre de référence sur le deep learning, couvrant les aspects théoriques et pratiques.",
    link: "https://www.deeplearningbook.org/",
    type: "livre",
    year: 2016,
    tags: ["deep learning", "théorique"]
  },
  {
    title: "The AI Revolution: The Road to Superintelligence",
    source: "Tim Urban",
    description: "Un article de blog vulgarisant les concepts de l'IA et de la superintelligence.",
    link: "https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
    type: "article",
    year: 2015,
    tags: ["vulgarisation", "futur"]
  },
  {
    title: "How AI works",
    source: "Lex Fridman",
    description: "Une série de vidéos expliquant le fonctionnement de l'IA.",
    link: "https://www.youtube.com/playlist?list=PLrAXtmErZgOeiKm4EmQ9V5yrDF6o_eFGj",
    type: "vidéo",
    year: 2021,
    tags: ["vulgarisation", "vidéo"]
  },
  {
    title: "AI Podcast",
    source: "Lex Fridman",
    description: "Un podcast avec des interviews de chercheurs et d'experts en IA.",
    link: "https://lexfridman.com/ai/",
    type: "podcast",
    tags: ["interview", "podcast"]
  },
];

export const scientificPublications = [
  {
    title: "Attention is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Łukasz Kaiser", "Illia Polosukhin"],
    source: "Google Brain",
    description: "Article introduisant l'architecture Transformer, qui a révolutionné le traitement du langage naturel.",
    link: "https://arxiv.org/abs/1706.03762",
    year: 2017,
    tags: ["transformer", "nlp"]
  },
  {
    title: "Generative Adversarial Nets",
    authors: ["Ian J. Goodfellow", "Jean Pouget-Abadie", "Mehdi Mirza", "Bing Xu", "David Warde-Farley", "Sherjil Ozair", "Aaron Courville", "Yoshua Bengio"],
    source: "Université de Montréal",
    description: "Article introduisant les réseaux antagonistes génératifs (GANs), une approche novatrice pour la génération d'images.",
    link: "https://arxiv.org/abs/1406.2661",
    year: 2014,
    tags: ["gan", "génération d'images"]
  },
];

export const iaTools: IAToolResource[] = [
  {
    name: "ChatGPT",
    description: "Un modèle de langage développé par OpenAI, capable de générer du texte, de traduire des langues et de répondre à des questions.",
    link: "https://chat.openai.com/",
    category: "LLM",
    tags: ["nlp", "génération de texte"]
  },
  {
    name: "DALL-E 2",
    description: "Un modèle de génération d'images développé par OpenAI, capable de créer des images à partir de descriptions textuelles.",
    link: "https://openai.com/dall-e-2/",
    category: "Vision",
    tags: ["génération d'images", "vision par ordinateur"]
  },
  {
    name: "TensorFlow",
    description: "Une bibliothèque open source pour le machine learning, développée par Google.",
    link: "https://www.tensorflow.org/",
    category: "Framework",
    tags: ["machine learning", "deep learning"]
  },
  {
    name: "RunwayML",
    description: "Une plateforme pour créer et expérimenter avec des modèles de machine learning.",
    link: "https://runwayml.com/",
    category: "No-code",
    tags: ["machine learning", "no-code"]
  },
];
