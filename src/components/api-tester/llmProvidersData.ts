
import { ProviderInfo } from './ProviderInfoCard';

export const llmProvidersInfo: ProviderInfo[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leader des modèles GPT avec GPT-4o et o1. Qualité premium et fiabilité industrielle.',
    pricing: {
      paid: '0.03$ - 60$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '10k req/min',
      dailyLimit: 'Selon tier'
    },
    features: ['Multimodal', 'Code', 'Reasoning', 'Vision'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    description: 'IA conversationnelle avancée avec Claude-3.5 Sonnet. Excellence en raisonnement et sécurité.',
    pricing: {
      paid: '0.15$ - 75$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '5k req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Long Context', 'Safety', 'Analysis', 'Code'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'google',
    name: 'Google Gemini',
    description: 'Modèles multimodaux de Google. Gemini 2.5 Flash offre rapidité et efficacité.',
    pricing: {
      free: '15 req/min',
      paid: '0.02$ - 10$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '15 req/min (gratuit)',
      dailyLimit: '1500 req/jour'
    },
    features: ['Multimodal', 'Vision', 'Audio', 'Rapide'],
    speed: 'ultra-fast',
    reliability: 'stable'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: 'Modèles chinois performants et économiques. DeepSeek-R1 excelle en raisonnement.',
    pricing: {
      paid: '0.14$ - 2.19$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '60 req/min',
      dailyLimit: 'Illimité'
    },
    features: ['Reasoning', 'Math', 'Code', 'Économique'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    description: 'Agrégateur donnant accès à 200+ modèles via une seule API. Modèles gratuits disponibles.',
    pricing: {
      free: 'Plusieurs modèles',
      paid: '0.002$ - 100$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: 'Variable par modèle',
      dailyLimit: 'Selon modèle'
    },
    features: ['200+ Modèles', 'Gratuit', 'Aggregateur', 'Variety'],
    speed: 'medium',
    reliability: 'stable'
  },
  {
    id: 'xai',
    name: 'X.AI Grok',
    description: 'IA de X (Twitter) avec accès en temps réel. Grok-beta conçu pour conversations dynamiques.',
    pricing: {
      paid: '5$ - 15$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '3k req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Real-time', 'Twitter Data', 'Conversational', 'Vision'],
    speed: 'fast',
    reliability: 'experimental'
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'Champion européen de l\'IA. Mistral Large excellent pour le français et les tâches complexes.',
    pricing: {
      paid: '0.15$ - 8$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '1k req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Français', 'Open Source', 'Europe', 'Function Calling'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'cerebras',
    name: 'Cerebras',
    description: 'Inférence ultra-rapide avec processeurs dédiés. Llama optimisé pour la vitesse extrême.',
    pricing: {
      paid: '0.10$ - 0.60$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '30 req/sec',
      dailyLimit: 'Illimité'
    },
    features: ['Ultra-Fast', 'Llama', 'Hardware Optimized', 'Low Latency'],
    speed: 'ultra-fast',
    reliability: 'stable'
  },
  {
    id: 'sambanova',
    name: 'SambaNova',
    description: 'Plateforme IA enterprise avec Llama optimisé. Focus sur la performance et l\'entreprise.',
    pricing: {
      paid: '0.15$ - 1$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '20 req/sec',
      monthlyLimit: 'Selon plan'
    },
    features: ['Enterprise', 'Llama', 'Optimized', 'High Performance'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'together',
    name: 'Together AI',
    description: 'Plateforme collaborative pour l\'IA. Accès à Llama et modèles open-source optimisés.',
    pricing: {
      paid: '0.13$ - 0.90$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '600 req/min',
      dailyLimit: 'Illimité'
    },
    features: ['Open Source', 'Collaborative', 'Llama', 'Fine-tuning'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'fireworks',
    name: 'Fireworks AI',
    description: 'Inférence rapide et économique. Spécialisé dans l\'optimisation des modèles open-source.',
    pricing: {
      paid: '0.20$ - 0.90$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '1k req/min',
      dailyLimit: 'Illimité'
    },
    features: ['Fast Inference', 'Open Source', 'Optimized', 'Cost Effective'],
    speed: 'ultra-fast',
    reliability: 'stable'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Plateforme pour déployer des modèles ML. Large choix de modèles open-source disponibles.',
    pricing: {
      paid: '0.0023$ - 2.75$',
      unit: '/ 1k tokens'
    },
    limits: {
      rateLimit: '50 req/min',
      monthlyLimit: 'Pay-per-use'
    },
    features: ['ML Platform', 'Open Source', 'Deployment', 'Various Models'],
    speed: 'medium',
    reliability: 'stable'
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Spécialisé dans le NLP enterprise. Command excellent pour la génération de texte business.',
    pricing: {
      paid: '0.50$ - 3$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '1k req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Enterprise NLP', 'Embeddings', 'Multilingual', 'Classification'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'IA de recherche avec accès internet en temps réel. Sonar models pour recherche augmentée.',
    pricing: {
      paid: '1$ - 5$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '20 req/min',
      dailyLimit: '5k req/jour'
    },
    features: ['Web Search', 'Real-time', 'Citations', 'Research'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'groq',
    name: 'Groq',
    description: 'Inférence la plus rapide au monde avec LPU. Idéal pour applications temps réel.',
    pricing: {
      free: '30 req/min',
      paid: '0.05$ - 0.90$',
      unit: '/ 1M tokens'
    },
    limits: {
      rateLimit: '30 req/min (gratuit)',
      dailyLimit: '14.4k req/jour'
    },
    features: ['Fastest Inference', 'LPU Technology', 'Real-time', 'Free Tier'],
    speed: 'ultra-fast',
    reliability: 'stable'
  }
];
