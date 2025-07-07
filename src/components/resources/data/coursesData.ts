
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: string;
  tags: string[];
  link: string;
  author: string;
  rating: number;
  enrolled: number;
  lastUpdated: string;
  image?: string;
  prerequisites?: string[];
  learningObjectives?: string[];
}

export const coursesData: Course[] = [
  {
    id: 'apprentissage-supervise',
    title: 'Apprentissage supervisé : Fondamentaux et pratique',
    description: 'Découvrez les bases de l\'apprentissage supervisé avec des exemples pratiques et des visualisations interactives.',
    duration: '2h30',
    level: 'Débutant',
    category: 'Machine Learning',
    tags: ['Machine Learning', 'Algorithmes', 'Classification', 'Régression'],
    link: '/cours/apprentissage-supervise',
    author: 'Geoffroy Streit',
    rating: 4.8,
    enrolled: 1250,
    lastUpdated: '2024-01-15',
    prerequisites: ['Bases de l\'IA', 'Statistiques de base'],
    learningObjectives: [
      'Comprendre les principes de l\'apprentissage supervisé',
      'Distinguer classification et régression',
      'Implémenter des algorithmes de base',
      'Évaluer les performances d\'un modèle'
    ]
  },
  {
    id: 'apprentissage-non-supervise',
    title: 'Apprentissage non supervisé : Explorer les structures cachées',
    description: 'Maîtrisez le clustering, la réduction de dimensionnalité et les règles d\'association avec des démonstrations interactives.',
    duration: '2h15',
    level: 'Débutant',
    category: 'Machine Learning',
    tags: ['Machine Learning', 'Clustering', 'PCA', 'Règles d\'association'],
    link: '/cours/apprentissage-non-supervise',
    author: 'Geoffroy Streit',
    rating: 4.9,
    enrolled: 950,
    lastUpdated: '2024-01-20',
    prerequisites: ['Bases de l\'IA', 'Mathématiques de base'],
    learningObjectives: [
      'Comprendre les défis de l\'apprentissage non supervisé',
      'Maîtriser les techniques de clustering',
      'Appliquer la réduction de dimensionnalité',
      'Découvrir des règles d\'association'
    ]
  },
  {
    id: 'nlp-comprehension',
    title: 'NLP et compréhension du langage naturel',
    description: 'Explorez le traitement du langage naturel, des bases aux modèles de langage modernes.',
    duration: '3h15',
    level: 'Intermédiaire',
    category: 'NLP',
    tags: ['NLP', 'Transformers', 'BERT', 'GPT'],
    link: '/cours/nlp-comprehension',
    author: 'Geoffroy Streit',
    rating: 4.7,
    enrolled: 890,
    lastUpdated: '2024-01-10',
    prerequisites: ['Machine Learning de base', 'Python'],
    learningObjectives: [
      'Comprendre les enjeux du NLP',
      'Maîtriser les techniques de preprocessing',
      'Utiliser les modèles de langage pré-entraînés',
      'Implémenter des applications NLP'
    ]
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering : L\'art de communiquer avec l\'IA',
    description: 'Apprenez à formuler des prompts efficaces pour maximiser les performances des modèles de langage.',
    duration: '1h45',
    level: 'Débutant',
    category: 'LLM',
    tags: ['Prompt Engineering', 'ChatGPT', 'LLM', 'Communication'],
    link: '/cours/prompt-engineering',
    author: 'Geoffroy Streit',
    rating: 4.6,
    enrolled: 1680,
    lastUpdated: '2024-01-12',
    prerequisites: ['Bases de l\'IA'],
    learningObjectives: [
      'Comprendre les principes du prompt engineering',
      'Maîtriser les techniques de formulation',
      'Optimiser les interactions avec les LLM',
      'Éviter les pièges courants'
    ]
  },
  {
    id: 'parametres-llm',
    title: 'Paramètres des LLM : Optimisation et configuration',
    description: 'Découvrez comment ajuster les paramètres des grands modèles de langage pour obtenir les meilleurs résultats.',
    duration: '2h00',
    level: 'Intermédiaire',
    category: 'LLM',
    tags: ['LLM', 'Paramètres', 'Optimisation', 'Configuration'],
    link: '/cours/parametres-llm',
    author: 'Geoffroy Streit',
    rating: 4.5,
    enrolled: 720,
    lastUpdated: '2024-01-08',
    prerequisites: ['Bases des LLM', 'Prompt Engineering'],
    learningObjectives: [
      'Comprendre l\'impact des différents paramètres',
      'Optimiser la température et le top-p',
      'Configurer les paramètres selon le contexte',
      'Mesurer l\'effet des ajustements'
    ]
  },
  {
    id: 'chain-of-prompts',
    title: 'Chain of Prompts : Techniques avancées',
    description: 'Maîtrisez les chaînes de prompts pour résoudre des problèmes complexes avec les LLM.',
    duration: '1h30',
    level: 'Avancé',
    category: 'LLM',
    tags: ['Chain of Prompts', 'LLM', 'Techniques avancées', 'Raisonnement'],
    link: '/cours/chain-of-prompts',
    author: 'Geoffroy Streit',
    rating: 4.8,
    enrolled: 540,
    lastUpdated: '2024-01-05',
    prerequisites: ['Prompt Engineering', 'Paramètres des LLM'],
    learningObjectives: [
      'Comprendre le concept de chaînes de prompts',
      'Implémenter des raisonnements complexes',
      'Optimiser les séquences d\'interactions',
      'Gérer la cohérence entre les prompts'
    ]
  },
  {
    id: 'deep-learning-pratique',
    title: 'Deep Learning pratique : De la théorie à l\'implémentation',
    description: 'Formation complète sur les réseaux de neurones profonds avec des projets pratiques.',
    duration: '4h00',
    level: 'Avancé',
    category: 'Deep Learning',
    tags: ['Deep Learning', 'Réseaux de neurones', 'TensorFlow', 'PyTorch'],
    link: '/cours/deep-learning-pratique',
    author: 'Geoffroy Streit',
    rating: 4.9,
    enrolled: 680,
    lastUpdated: '2024-01-18',
    prerequisites: ['Machine Learning', 'Python avancé', 'Mathématiques'],
    learningObjectives: [
      'Maîtriser l\'architecture des réseaux profonds',
      'Implémenter des CNN et RNN',
      'Optimiser l\'entraînement des modèles',
      'Déployer des modèles en production'
    ]
  },
  {
    id: 'ia-creativite',
    title: 'IA et créativité : Art, musique et design génératifs',
    description: 'Explorez les applications créatives de l\'IA : génération d\'art, de musique et de designs.',
    duration: '2h45',
    level: 'Intermédiaire',
    category: 'IA Générative',
    tags: ['IA Générative', 'Art', 'Créativité', 'GAN'],
    link: '/cours/ia-creativite',
    author: 'Geoffroy Streit',
    rating: 4.7,
    enrolled: 920,
    lastUpdated: '2024-01-14',
    prerequisites: ['Bases de l\'IA', 'Deep Learning de base'],
    learningObjectives: [
      'Comprendre l\'IA générative',
      'Utiliser des outils de création assistée',
      'Générer du contenu créatif',
      'Évaluer la qualité artistique'
    ]
  },
  {
    id: 'ia-entreprise',
    title: 'IA en entreprise : Stratégie et mise en œuvre',
    description: 'Guide complet pour intégrer l\'IA dans l\'entreprise, de la stratégie à l\'implémentation.',
    duration: '3h30',
    level: 'Intermédiaire',
    category: 'IA Business',
    tags: ['IA Entreprise', 'Stratégie', 'ROI', 'Management'],
    link: '/cours/ia-entreprise',
    author: 'Geoffroy Streit',
    rating: 4.6,
    enrolled: 760,
    lastUpdated: '2024-01-16',
    prerequisites: ['Bases de l\'IA', 'Bases du management'],
    learningObjectives: [
      'Développer une stratégie IA',
      'Identifier les cas d\'usage prioritaires',
      'Gérer les projets IA',
      'Mesurer le ROI des initiatives IA'
    ]
  },
  {
    id: 'ia-ethique',
    title: 'IA et éthique : Enjeux et bonnes pratiques',
    description: 'Formation sur les aspects éthiques de l\'IA, les biais et les pratiques responsables.',
    duration: '2h00',
    level: 'Débutant',
    category: 'Éthique IA',
    tags: ['Éthique', 'Biais', 'IA Responsable', 'Réglementation'],
    link: '/cours/ia-ethique',
    author: 'Geoffroy Streit',
    rating: 4.8,
    enrolled: 1340,
    lastUpdated: '2024-01-20',
    prerequisites: ['Bases de l\'IA'],
    learningObjectives: [
      'Comprendre les enjeux éthiques de l\'IA',
      'Identifier et réduire les biais',
      'Implémenter des pratiques responsables',
      'Naviguer dans le cadre réglementaire'
    ]
  }
];
