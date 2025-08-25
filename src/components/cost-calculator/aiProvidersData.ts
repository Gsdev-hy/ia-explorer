
export interface PricingTier {
  name: string;
  inputPrice: number; // prix par 1M de tokens d'entrée
  outputPrice: number; // prix par 1M de tokens de sortie
  currency: string;
}

export interface AIProvider {
  id: string;
  name: string;
  description: string;
  models: {
    id: string;
    name: string;
    type: 'text' | 'image' | 'audio' | 'video';
    pricing: PricingTier[];
    contextLength: number;
    features: string[];
    recommended?: boolean;
    category?: string;
  }[];
  website: string;
  apiUrl: string;
}

export const aiProvidersData: AIProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leader mondial des modèles de langage avec GPT-4 et o1',
    website: 'https://openai.com',
    apiUrl: 'https://api.openai.com',
    models: [
      {
        id: 'gpt-4o',
        name: 'GPT-4o',
        type: 'text',
        contextLength: 128000,
        features: ['Multimodal', 'Code', 'Vision', 'Audio'],
        recommended: true,
        category: 'Premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 5.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-4o-mini',
        name: 'GPT-4o Mini',
        type: 'text',
        contextLength: 128000,
        features: ['Rapide', 'Économique', 'Vision'],
        recommended: true,
        category: 'Économique',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.15,
            outputPrice: 0.60,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-4-turbo',
        name: 'GPT-4 Turbo',
        type: 'text',
        contextLength: 128000,
        features: ['Vision', 'JSON Mode', 'Function Calling'],
        category: 'Premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 10.00,
            outputPrice: 30.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo',
        type: 'text',
        contextLength: 16385,
        features: ['Économique', 'Rapide', 'Function Calling'],
        category: 'Économique',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.50,
            outputPrice: 1.50,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'o1-preview',
        name: 'o1-preview',
        type: 'text',
        contextLength: 128000,
        features: ['Raisonnement avancé', 'Mathématiques', 'Sciences'],
        category: 'Recherche',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 15.00,
            outputPrice: 60.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'o1-mini',
        name: 'o1-mini',
        type: 'text',
        contextLength: 128000,
        features: ['Raisonnement', 'Code', 'Mathématiques'],
        category: 'Recherche',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 3.00,
            outputPrice: 12.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        type: 'image',
        contextLength: 0,
        features: ['HD', 'Créatif', 'Style personnalisé'],
        category: 'Image',
        pricing: [
          {
            name: 'Standard (1024x1024)',
            inputPrice: 40.00,
            outputPrice: 0,
            currency: 'USD'
          },
          {
            name: 'HD (1024x1024)',
            inputPrice: 80.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    description: 'IA constitutionnelle avec Claude 3.5 Sonnet',
    website: 'https://anthropic.com',
    apiUrl: 'https://api.anthropic.com',
    models: [
      {
        id: 'claude-3-5-sonnet',
        name: 'Claude 3.5 Sonnet',
        type: 'text',
        contextLength: 200000,
        features: ['Analyse longue', 'Raisonnement', 'Code', 'Vision'],
        recommended: true,
        category: 'Premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 3.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-3-5-haiku',
        name: 'Claude 3.5 Haiku',
        type: 'text',
        contextLength: 200000,
        features: ['Très rapide', 'Économique', 'Vision'],
        recommended: true,
        category: 'Économique',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.80,
            outputPrice: 4.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-3-opus',
        name: 'Claude 3 Opus',
        type: 'text',
        contextLength: 200000,
        features: ['Analyse complexe', 'Créativité', 'Raisonnement avancé'],
        category: 'Premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 15.00,
            outputPrice: 75.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-3-haiku',
        name: 'Claude 3 Haiku',
        type: 'text',
        contextLength: 200000,
        features: ['Rapide', 'Économique', 'Analyse de documents'],
        category: 'Économique',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.25,
            outputPrice: 1.25,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'google',
    name: 'Google Gemini',
    description: 'Modèles multimodaux de Google',
    website: 'https://gemini.google.com',
    apiUrl: 'https://generativelanguage.googleapis.com',
    models: [
      {
        id: 'gemini-1-5-pro',
        name: 'Gemini 1.5 Pro',
        type: 'text',
        contextLength: 2000000,
        features: ['Contexte très long', 'Multimodal', 'Code', 'Audio'],
        recommended: true,
        category: 'Premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 1.25,
            outputPrice: 5.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-1-5-flash',
        name: 'Gemini 1.5 Flash',
        type: 'text',
        contextLength: 1000000,
        features: ['Très rapide', 'Économique', 'Multimodal'],
        recommended: true,
        category: 'Économique',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.075,
            outputPrice: 0.30,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-1-0-pro',
        name: 'Gemini 1.0 Pro',
        type: 'text',
        contextLength: 32768,
        features: ['Équilibré', 'Multimodal', 'Raisonnement'],
        category: 'Standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.50,
            outputPrice: 1.50,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'Startup française avec modèles performants',
    website: 'https://mistral.ai',
    apiUrl: 'https://api.mistral.ai',
    models: [
      {
        id: 'mistral-large',
        name: 'Mistral Large',
        type: 'text',
        contextLength: 128000,
        features: ['Français natif', 'Performant', 'Code', 'Function Calling'],
        recommended: true,
        category: 'Premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 2.00,
            outputPrice: 6.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'mistral-medium',
        name: 'Mistral Medium',
        type: 'text',
        contextLength: 32768,
        features: ['Équilibré', 'Français', 'Polyvalent'],
        category: 'Standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 2.70,
            outputPrice: 8.10,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'mistral-small',
        name: 'Mistral Small',
        type: 'text',
        contextLength: 32768,
        features: ['Économique', 'Français', 'Rapide'],
        recommended: true,
        category: 'Économique',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.20,
            outputPrice: 0.60,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'codestral',
        name: 'Codestral',
        type: 'text',
        contextLength: 32768,
        features: ['Code spécialisé', 'Programmation', 'Débogage'],
        category: 'Spécialisé',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.20,
            outputPrice: 0.60,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Modèles spécialisés pour l\'entreprise',
    website: 'https://cohere.ai',
    apiUrl: 'https://api.cohere.ai',
    models: [
      {
        id: 'command-r-plus',
        name: 'Command R+',
        type: 'text',
        contextLength: 128000,
        features: ['RAG optimisé', 'Multilingue', 'Entreprise'],
        recommended: true,
        category: 'Premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 3.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'command-r',
        name: 'Command R',
        type: 'text',
        contextLength: 128000,
        features: ['RAG', 'Économique', 'Multilingue'],
        recommended: true,
        category: 'Standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.50,
            outputPrice: 1.50,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'Modèles optimisés pour la recherche et l\'analyse',
    website: 'https://perplexity.ai',
    apiUrl: 'https://api.perplexity.ai',
    models: [
      {
        id: 'sonar-large-online',
        name: 'Sonar Large Online',
        type: 'text',
        contextLength: 127072,
        features: ['Recherche web', 'Temps réel', 'Citations'],
        recommended: true,
        category: 'Recherche',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 1.00,
            outputPrice: 1.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'sonar-small-online',
        name: 'Sonar Small Online',
        type: 'text',
        contextLength: 127072,
        features: ['Recherche web', 'Économique', 'Rapide'],
        category: 'Recherche',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.20,
            outputPrice: 0.20,
            currency: 'USD'
          }
        ]
      }
    ]
  }
];

export const getProviderById = (id: string) => {
  return aiProvidersData.find(provider => provider.id === id);
};

export const getModelById = (providerId: string, modelId: string) => {
  const provider = getProviderById(providerId);
  return provider?.models.find(model => model.id === modelId);
};

export const getRecommendedModels = () => {
  const recommendedModels: Array<{provider: string, model: any}> = [];
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.recommended) {
        recommendedModels.push({ provider: provider.name, model });
      }
    });
  });
  return recommendedModels;
};

export const getModelsByCategory = (category: string) => {
  const models: Array<{provider: string, model: any}> = [];
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.category === category) {
        models.push({ provider: provider.name, model });
      }
    });
  });
  return models;
};
