
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const llmCategories: PromptCategory[] = [
  {
    id: 'llm-analysis',
    name: 'Analyse LLM',
    description: 'Templates pour l\'analyse et la compréhension de texte',
    icon: 'Brain'
  },
  {
    id: 'llm-generation',
    name: 'Génération LLM',
    description: 'Templates pour la génération de contenu textuel',
    icon: 'FileText'
  },
  {
    id: 'llm-conversation',
    name: 'Conversation LLM',
    description: 'Templates pour les interactions conversationnelles',
    icon: 'MessageCircle'
  }
];

export const llmTemplates: PromptTemplate[] = [
  {
    id: 'llm-sentiment-analysis',
    name: 'Analyse de Sentiment Avancée',
    category: 'llm-analysis',
    domain: 'NLP',
    description: 'Analyse détaillée des sentiments dans un texte avec nuances émotionnelles',
    template: `Tu es un expert en analyse de sentiment et psychologie computationnelle. Analyse le sentiment du texte suivant avec une granularité maximale :

**TEXTE À ANALYSER :**
"{text_content}"

**ANALYSE DEMANDÉE :**

## 1. SENTIMENT GLOBAL
- Sentiment principal : [Positif/Négatif/Neutre/Mixte]
- Score de confiance : [0-100%]
- Intensité émotionnelle : [Faible/Modérée/Forte/Très forte]

## 2. ANALYSE GRANULAIRE
### Émotions détectées :
- Joie/Bonheur : [score et justification]
- Tristesse/Mélancolie : [score et justification]
- Colère/Frustration : [score et justification]
- Peur/Anxiété : [score et justification]
- Surprise : [score et justification]
- Dégoût : [score et justification]

## 3. CONTEXTE ET NUANCES
- Ironie/Sarcasme détecté : {detect_sarcasm}
- Références culturelles : {cultural_context}
- Registre de langue : [Familier/Soutenu/Technique/Argotique]

## 4. ANALYSE TEMPORELLE
- Évolution du sentiment dans le texte
- Points de basculement émotionnel

## 5. RECOMMANDATIONS
- Stratégie de réponse appropriée
- Ton recommandé pour l'interaction
- Points d'attention particuliers

**PARAMÈTRES D'ANALYSE :**
- Domaine : {domain}
- Public cible : {target_audience}
- Sensibilité culturelle : {cultural_sensitivity}`,
    variables: [
      { name: 'text_content', type: 'textarea', label: 'Texte à analyser', placeholder: 'Coller le texte ici...', required: true },
      { name: 'detect_sarcasm', type: 'select', label: 'Détecter sarcasme', options: ['Oui', 'Non'], required: true, defaultValue: 'Oui' },
      { name: 'cultural_context', type: 'select', label: 'Contexte culturel', options: ['Français', 'Anglo-Saxon', 'Global', 'Spécifique'], required: true },
      { name: 'domain', type: 'select', label: 'Domaine', options: ['Général', 'Business', 'Médical', 'Juridique', 'Technique', 'Réseaux sociaux'], required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Grand public', 'Professionnels', 'Académique', 'Jeunes', 'Seniors'], required: true },
      { name: 'cultural_sensitivity', type: 'select', label: 'Sensibilité culturelle', options: ['Standard', 'Élevée', 'Maximale'], required: true }
    ],
    tags: ['LLM', 'Sentiment', 'Analyse', 'NLP'],
    quality: 4.8,
    usageCount: 1245
  },
  {
    id: 'llm-code-explanation',
    name: 'Explication de Code Intelligente',
    category: 'llm-generation',
    domain: 'Développement',
    description: 'Explique du code de manière pédagogique et détaillée',
    template: `Tu es un expert développeur et formateur en programmation. Explique le code suivant de manière claire et pédagogique :

**CODE À EXPLIQUER :**
\`\`\`{programming_language}
{code_snippet}
\`\`\`

**EXPLICATION STRUCTURÉE :**

## 1. VUE D'ENSEMBLE
- **Objectif principal :** [Que fait ce code ?]
- **Complexité :** [Débutant/Intermédiaire/Avancé]
- **Patterns utilisés :** [Design patterns identifiés]

## 2. ANALYSE LIGNE PAR LIGNE
[Explication détaillée de chaque section importante]

## 3. CONCEPTS CLÉS
### Concepts techniques abordés :
- [Concept 1] : Explication simple
- [Concept 2] : Explication simple
- [Concept 3] : Explication simple

## 4. BONNES PRATIQUES
### Ce qui est bien fait :
- ✅ [Point positif 1]
- ✅ [Point positif 2]

### Améliorations possibles :
- 🔄 [Amélioration 1]
- 🔄 [Amélioration 2]

## 5. EXEMPLE ALTERNATIF
[Proposer une version alternative ou simplifiée si pertinent]

## 6. RESSOURCES POUR APPROFONDIR
- Documentation officielle
- Tutoriels recommandés
- Exercices pratiques

**NIVEAU D'EXPLICATION :** {explanation_level}
**FOCUS PARTICULIER :** {focus_area}
**INCLUDE EXAMPLES :** {include_examples}`,
    variables: [
      { name: 'code_snippet', type: 'textarea', label: 'Code à expliquer', placeholder: 'Coller le code ici...', required: true },
      { name: 'programming_language', type: 'select', label: 'Langage', options: ['JavaScript', 'Python', 'Java', 'C#', 'TypeScript', 'Go', 'Rust', 'C++', 'PHP', 'Ruby'], required: true },
      { name: 'explanation_level', type: 'select', label: 'Niveau d\'explication', options: ['Débutant complet', 'Débutant', 'Intermédiaire', 'Avancé'], required: true },
      { name: 'focus_area', type: 'select', label: 'Focus particulier', options: ['Architecture', 'Performance', 'Sécurité', 'Lisibilité', 'Algorithmique', 'Général'], required: false },
      { name: 'include_examples', type: 'select', label: 'Inclure exemples', options: ['Oui', 'Non'], required: true, defaultValue: 'Oui' }
    ],
    tags: ['LLM', 'Code', 'Explication', 'Pédagogie'],
    quality: 4.9,
    usageCount: 2340
  }
];
