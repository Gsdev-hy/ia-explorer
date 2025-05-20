export interface Resource {
  title: string;
  source?: string;
  description: string;
  link: string;
  type: "cours" | "livre" | "outil" | "article";
  year?: number;
  tags?: string[];
  author?: string;
}

export interface ScientificPublication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  link: string;
  doi?: string;
  description: string;
}

export interface IAToolResource {
  name: string;
  description: string;
  url: string;  // This is what IAToolCard is trying to use as 'link'
  category: string;
  free: boolean;
  tags: string[];
  logo?: string;
}

export const realResources: Resource[] = [
  {
    title: "Intelligence artificielle : comprendre les enjeux",
    source: "France Culture",
    description: "Qu'est-ce que l'intelligence artificielle ? Comment ça marche ? Quels sont les enjeux éthiques, économiques, sociaux et politiques ?",
    link: "https://www.radiofrance.fr/franceculture/podcasts/les-idees-claires/intelligence-artificielle-comprendre-les-enjeux-1599549",
    type: "cours",
    year: 2023,
    tags: ["ia", "éthique", "économie", "société", "politique"]
  },
  {
    title: "L'IA ça change quoi ?!",
    source: "CNRS",
    description: "Une série de vidéos courtes et pédagogiques pour comprendre les bases de l'intelligence artificielle et ses impacts sur nos vies.",
    link: "https://lejournal.cnrs.fr/articles/l-ia-ca-change-quoi",
    type: "cours",
    year: 2023,
    tags: ["ia", "vidéo", "pédagogie", "impact"]
  },
  {
    title: "Intelligence artificielle : tout comprendre sur la révolution technologique",
    source: "Les Echos",
    description: "Décryptage des enjeux de l'intelligence artificielle : définition, applications, acteurs, perspectives...",
    link: "https://www.lesechos.fr/idees-debats/sciences-innovation/intelligence-artificielle-tout-comprendre-sur-la-revolution-technologique-1934891",
    type: "article",
    year: 2022,
    tags: ["ia", "technologie", "économie", "innovation"]
  },
  {
    title: "Le Machine Learning pour les Nuls",
    source: "Amazon",
    description: "Un guide simple et accessible pour comprendre les bases du Machine Learning et ses applications concrètes.",
    link: "https://www.amazon.fr/Machine-Learning-pour-Nuls-Collectif/dp/2412077141",
    type: "livre",
    year: 2022,
    tags: ["machine learning", "apprentissage automatique", "débutant"]
  },
  {
    title: "Deep Learning (Adaptive Computation and Machine Learning series)",
    source: "MIT Press",
    description: "Un ouvrage de référence pour approfondir vos connaissances sur le Deep Learning et ses algorithmes.",
    link: "https://www.deeplearningbook.org/",
    type: "livre",
    year: 2016,
    tags: ["deep learning", "apprentissage profond", "algorithme"]
  },
  {
    title: "Intelligence artificielle : enjeux et défis d'une révolution",
    source: "CNRS Editions",
    description: "Un livre blanc pour comprendre les enjeux et les défis de l'intelligence artificielle, coordonné par le CNRS.",
    link: "https://cnrseditions.fr/produit/1438/intelligence-artificielle/",
    type: "livre",
    year: 2018,
    tags: ["ia", "éthique", "société", "économie"]
  },
  {
    title: "IA : comprendre les enjeux pour mieux agir",
    source: "GreenIT",
    description: "Décryptage des enjeux environnementaux de l'IA : consommation énergétique, impact carbone, solutions pour une IA plus responsable.",
    link: "https://www.greenit.fr/2023/10/05/ia-sobriete-numerique-comprendre-les-enjeux-pour-mieux-agir/",
    type: "article",
    year: 2023,
    tags: ["ia", "environnement", "sobriété numérique", "impact carbone"]
  },
  {
    title: "Le grand livre de l'IA",
    source: "Dunod",
    description: "Un panorama complet de l'intelligence artificielle : histoire, concepts clés, applications, enjeux éthiques et perspectives d'avenir.",
    link: "https://www.dunod.com/sciences-techniques/grand-livre-l-ia",
    type: "livre",
    year: 2019,
    tags: ["ia", "histoire", "éthique", "applications"]
  },
  {
    title: "MOOC Intelligence Artificielle",
    source: "FUN MOOC",
    description: "Une formation en ligne gratuite pour découvrir les bases de l'intelligence artificielle et ses applications.",
    link: "https://www.fun-mooc.fr/fr/cours/intelligence-artificielle-fondements-et-applications-1/",
    type: "cours",
    year: 2018,
    tags: ["ia", "mooc", "formation en ligne", "débutant"]
  },
  {
    title: "Les bases pour développer une APP avec de l'IA",
    source: "Comprendre l'IA",
    author: "Geoffroy Streit",
    description: "Guide complet des concepts, outils et bonnes pratiques pour le développement d'applications avec l'IA, incluant les approches No Code et les techniques avancées.",
    link: "/coder-avec-ia",
    type: "cours",
    year: 2024,
    tags: ["code", "app", "dev par ia", "no code"]
  },
];

export const scientificPublications: ScientificPublication[] = [
  {
    title: "Attention is all you need",
    authors: ["Vaswani, A.", "Shazeer, N.", "Parmar, N.", "Uszkoreit, J.", "Jones, L.", "Gomez, A. N.", "Kaiser, Ł.", "Polosukhin, I."],
    journal: "Advances in neural information processing systems",
    year: 2017,
    link: "https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd0e5c6a3aa249b-Paper.pdf",
    doi: "10.48550/arXiv.1706.03762",
    description: "L'article fondateur qui a introduit l'architecture Transformer, une révolution dans le domaine du traitement automatique du langage."
  },
  {
    title: "Generative Adversarial Nets",
    authors: ["Goodfellow, I.J.", "Pouget-Abadie, J.", "Mirza, M.", "Xu, B.", "Warde-Farley, D.", "Ozair, S.", "Courville, A.", "Bengio, Y."],
    journal: "Advances in neural information processing systems",
    year: 2014,
    link: "https://proceedings.neurips.cc/paper_files/paper/2014/file/5ca3e9b122f61f8f06494c97b1afccf3-Paper.pdf",
    doi: "10.1145/3422622",
    description: "Présentation des réseaux antagonistes génératifs (GANs), une approche novatrice pour l'apprentissage non supervisé."
  },
  {
    title: "Playing atari with deep reinforcement learning",
    authors: ["Mnih, V.", "Kavukcuoglu, K.", "Silver, D.", "Rusu, A. A.", "Veness, J.", "Bellemare, M. G.", "Graves, A.", "Riedmiller, M.", "Fidjeland, A. K.", "Ostrovski, G.", "Petersen, S.", "Beattie, C.", "Sadik, I.", "Antonoglou, I.", "King, H.", "Kumaran, D.", "Wierstra, D.", "Legg, S.", "Hassabis, D."],
    journal: "Nature",
    year: 2015,
    link: "https://www.nature.com/articles/nature14236",
    doi: "10.1038/nature14236",
    description: "Un article clé démontrant comment l'apprentissage par renforcement profond peut être utilisé pour maîtriser des jeux Atari avec une performance surpassant celle des humains."
  },
];

export const iaTools: IAToolResource[] = [
  {
    name: "ChatGPT",
    description: "Un modèle de langage développé par OpenAI, capable de générer du texte, de traduire des langues, d'écrire différents types de contenu créatif et de répondre à vos questions de manière informative.",
    url: "https://chat.openai.com/",
    category: "Modèle de langage",
    free: false,
    tags: ["modèle de langage", "IA conversationnelle", "génération de texte"]
  },
  {
    name: "DALL-E 2",
    description: "Un système d'IA développé par OpenAI qui peut créer des images réalistes et de l'art à partir d'une description en langage naturel.",
    url: "https://openai.com/dall-e-2/",
    category: "Génération d'images",
    free: false,
    tags: ["génération d'images", "art IA", "texte-image"]
  },
  {
    name: "Midjourney",
    description: "Un programme d'IA qui crée des images à partir de descriptions textuelles, similaire à DALL-E, mais avec un style artistique distinct.",
    url: "https://www.midjourney.com/",
    category: "Génération d'images",
    free: false,
    tags: ["génération d'images", "art IA", "texte-image"]
  },
  {
    name: "TensorFlow",
    description: "Une bibliothèque open source développée par Google pour l'apprentissage automatique et l'intelligence artificielle.",
    url: "https://www.tensorflow.org/",
    category: "Framework",
    free: true,
    tags: ["framework", "apprentissage automatique", "deep learning"]
  },
  {
    name: "PyTorch",
    description: "Une bibliothèque open source d'apprentissage automatique basée sur Torch, utilisée pour des applications telles que le traitement du langage naturel.",
    url: "https://pytorch.org/",
    category: "Framework",
    free: true,
    tags: ["framework", "apprentissage automatique", "deep learning"]
  },
  {
    name: "RunwayML",
    description: "Une plateforme qui permet à quiconque d'utiliser des modèles d'apprentissage automatique dans des projets créatifs, sans nécessiter de compétences en code.",
    url: "https://runwayml.com/",
    category: "Outil créatif",
    free: false,
    tags: ["créativité", "apprentissage automatique", "no-code"]
  },
];
