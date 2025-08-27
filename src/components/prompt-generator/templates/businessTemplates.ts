
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const businessCategories: PromptCategory[] = [
  {
    id: 'business-strategy',
    name: 'Stratégie Business',
    description: 'Templates pour la stratégie d\'entreprise',
    icon: 'TrendingUp'
  },
  {
    id: 'marketing-digital',
    name: 'Marketing Digital',
    description: 'Templates pour le marketing et la communication',
    icon: 'Megaphone'
  },
  {
    id: 'sales-enablement',
    name: 'Support Vente',
    description: 'Templates pour l\'aide à la vente',
    icon: 'Target'
  },
  {
    id: 'customer-service',
    name: 'Service Client',
    description: 'Templates pour le support client',
    icon: 'Headphones'
  },
  {
    id: 'hr-recruitment',
    name: 'RH & Recrutement',
    description: 'Templates pour les ressources humaines',
    icon: 'Users'
  }
];

export const businessTemplates: PromptTemplate[] = [
  {
    id: 'business-plan-generator',
    name: 'Générateur de Business Plan',
    category: 'business-strategy',
    domain: 'Stratégie',
    description: 'Créé un business plan complet et structuré',
    template: `Tu es un expert en stratégie d'entreprise. Crée un business plan détaillé pour : "{businessIdea}".

## 1. Résumé Exécutif
- Concept et proposition de valeur
- Marché cible et opportunité
- Avantage concurrentiel

## 2. Analyse de Marché
- Taille du marché : {marketSize}
- Segmentation client : {targetSegment}
- Analyse concurrentielle

## 3. Produit/Service
- Description détaillée
- Fonctionnalités clés
- Roadmap de développement

## 4. Modèle Économique
- Revenus : {revenueModel}
- Structure de coûts
- Projections financières sur {timeframe}

## 5. Stratégie Marketing
- Positionnement
- Canaux de distribution
- Plan de communication

## 6. Équipe et Organisation
- Profils recherchés
- Structure organisationnelle
- Besoins en financement : {fundingNeeds}

## 7. Analyse des Risques
- Risques identifiés
- Stratégies de mitigation

Secteur d'activité : {industry}
Localisation : {location}`,
    variables: [
      { name: 'businessIdea', type: 'textarea', label: 'Idée d\'entreprise', placeholder: 'Plateforme SaaS pour la gestion des stocks...', required: true },
      { name: 'marketSize', type: 'select', label: 'Taille du marché', options: ['Local', 'National', 'International', 'Global'], required: true },
      { name: 'targetSegment', type: 'text', label: 'Segment cible', placeholder: 'PME, B2B, Particuliers...', required: true },
      { name: 'revenueModel', type: 'select', label: 'Modèle de revenus', options: ['Abonnement', 'Vente unique', 'Freemium', 'Commission', 'Publicité'], required: true },
      { name: 'timeframe', type: 'select', label: 'Horizon temporel', options: ['1 an', '3 ans', '5 ans'], required: true },
      { name: 'fundingNeeds', type: 'select', label: 'Besoins de financement', options: ['< 50k€', '50k-200k€', '200k-1M€', '> 1M€'], required: true },
      { name: 'industry', type: 'text', label: 'Secteur', placeholder: 'Tech, E-commerce, Services...', required: true },
      { name: 'location', type: 'text', label: 'Localisation', placeholder: 'France, Europe, Monde...', required: true }
    ],
    tags: ['Business', 'Stratégie', 'Plan', 'Financement'],
    quality: 4.7,
    usageCount: 892
  },
  {
    id: 'social-media-campaign',
    name: 'Campagne Réseaux Sociaux',
    category: 'marketing-digital',
    domain: 'Social Media',
    description: 'Planifie une campagne complète sur les réseaux sociaux',
    template: `Tu es un expert en marketing digital. Crée une stratégie complète de campagne sur les réseaux sociaux pour : "{product}".

## 🎯 Objectifs de la Campagne
- Objectif principal : {objective}
- KPI à mesurer : {kpis}
- Budget alloué : {budget}
- Durée : {duration}

## 👥 Public Cible
- Démographie : {demographics}
- Centres d'intérêt : {interests}
- Comportements en ligne : {behaviors}

## 📱 Plateformes Sélectionnées
{platforms}

## 📝 Stratégie de Contenu
### Types de contenu :
- Posts informatifs (30%)
- Contenu engageant (40%) 
- Contenu promotionnel (20%)
- User Generated Content (10%)

### Calendrier éditorial :
- Fréquence de publication : {frequency}
- Meilleurs créneaux : {timing}

## 🎨 Ligne Éditoriale
- Ton : {tone}
- Style visuel : {visualStyle}
- Hashtags stratégiques : #{hashtags}

## 📊 Métriques et Suivi
- Portée et impressions
- Engagement (likes, commentaires, partages)
- Taux de conversion
- Coût par acquisition

## 🚀 Actions Spécifiques
1. Phase de lancement (semaine 1-2)
2. Phase d'amplification (semaine 3-6)
3. Phase d'optimisation (semaine 7+)

Industrie : {industry}
Concurrents à surveiller : {competitors}`,
    variables: [
      { name: 'product', type: 'text', label: 'Produit/Service', placeholder: 'Application mobile, cours en ligne...', required: true },
      { name: 'objective', type: 'select', label: 'Objectif principal', options: ['Notoriété', 'Génération de leads', 'Ventes', 'Engagement communauté'], required: true },
      { name: 'kpis', type: 'text', label: 'KPI prioritaires', placeholder: 'Reach, CTR, conversions...', required: true },
      { name: 'budget', type: 'select', label: 'Budget', options: ['< 1000€', '1000-5000€', '5000-15000€', '> 15000€'], required: true },
      { name: 'duration', type: 'select', label: 'Durée', options: ['1 mois', '3 mois', '6 mois', '1 an'], required: true },
      { name: 'demographics', type: 'text', label: 'Démographie', placeholder: '25-45 ans, urbains, CSP+...', required: true },
      { name: 'interests', type: 'textarea', label: 'Centres d\'intérêt', placeholder: 'Tech, entrepreneuriat, lifestyle...', required: true },
      { name: 'behaviors', type: 'text', label: 'Comportements', placeholder: 'Early adopters, actifs le soir...', required: false },
      { name: 'platforms', type: 'text', label: 'Plateformes', placeholder: 'Instagram, LinkedIn, TikTok...', required: true },
      { name: 'frequency', type: 'select', label: 'Fréquence', options: ['1 post/jour', '3-5 posts/semaine', '1 post/semaine'], required: true },
      { name: 'timing', type: 'text', label: 'Créneaux optimaux', placeholder: '9h-11h, 18h-20h...', required: false },
      { name: 'tone', type: 'select', label: 'Ton', options: ['Professionnel', 'Décontracté', 'Inspirant', 'Humoristique'], required: true },
      { name: 'visualStyle', type: 'text', label: 'Style visuel', placeholder: 'Minimaliste, coloré, photo/vidéo...', required: false },
      { name: 'hashtags', type: 'text', label: 'Hashtags clés', placeholder: 'innovation, startup, tech', required: false },
      { name: 'industry', type: 'text', label: 'Industrie', placeholder: 'SaaS, E-learning, E-commerce...', required: true },
      { name: 'competitors', type: 'text', label: 'Concurrents', placeholder: 'Competitor1, Competitor2...', required: false }
    ],
    tags: ['Marketing', 'Social Media', 'Campagne', 'Digital'],
    quality: 4.6,
    usageCount: 1156
  },
  {
    id: 'sales-proposal-generator',
    name: 'Proposition Commerciale',
    category: 'sales-enablement',
    domain: 'Ventes',
    description: 'Génère une proposition commerciale personnalisée et convaincante',
    template: `Tu es un expert en vente B2B. Rédige une proposition commerciale personnalisée pour : "{clientName}".

## 📋 Contexte Client
**Entreprise :** {clientName}
**Secteur :** {clientIndustry}
**Défi principal :** {clientChallenge}
**Décideur :** {decisionMaker}

## 🎯 Compréhension des Enjeux
Nous avons identifié que {clientName} fait face à {clientChallenge}. 
Cela impact votre activité par : {businessImpact}

## 💡 Notre Solution
**Produit/Service proposé :** {solution}

### Bénéfices clés :
✅ **Économies estimées :** {savings}
✅ **Amélioration de productivité :** {productivity}
✅ **Réduction des risques :** {riskReduction}

## 📊 Proposition de Valeur
- ROI estimé : {roi} sur {roiTimeframe}
- Temps de mise en œuvre : {implementationTime}
- Support inclus : {supportLevel}

## 💰 Investissement
**Option recommandée :** {pricingTier}
- Prix : {price}
- Modalités : {paymentTerms}
- Garanties : {guarantees}

## 🚀 Prochaines Étapes
1. **Démonstration personnalisée** - {demoDate}
2. **Évaluation technique** - 1 semaine
3. **Déploiement pilote** - {pilotDuration}
4. **Formation équipes** - Incluse

## 📞 Engagement de Service
- Point de contact dédié : {accountManager}
- SLA de support : {sla}
- Révisions trimestrielles incluses

**Cette proposition est valable jusqu'au {validityDate}**

Références clients similaires : {references}
Certifications : {certifications}`,
    variables: [
      { name: 'clientName', type: 'text', label: 'Nom du client', placeholder: 'Entreprise ABC', required: true },
      { name: 'clientIndustry', type: 'text', label: 'Secteur client', placeholder: 'Manufacturing, Services...', required: true },
      { name: 'clientChallenge', type: 'textarea', label: 'Défi client', placeholder: 'Gestion inefficace des stocks...', required: true },
      { name: 'decisionMaker', type: 'text', label: 'Décideur', placeholder: 'M. Dupont, DSI', required: true },
      { name: 'businessImpact', type: 'textarea', label: 'Impact business', placeholder: 'Perte de productivité, coûts...', required: true },
      { name: 'solution', type: 'text', label: 'Solution proposée', placeholder: 'Logiciel de gestion...', required: true },
      { name: 'savings', type: 'text', label: 'Économies estimées', placeholder: '15% des coûts opérationnels', required: true },
      { name: 'productivity', type: 'text', label: 'Gain productivité', placeholder: '25% d\'efficacité en plus', required: true },
      { name: 'riskReduction', type: 'text', label: 'Réduction risques', placeholder: 'Conformité réglementaire', required: false },
      { name: 'roi', type: 'text', label: 'ROI estimé', placeholder: '200%', required: true },
      { name: 'roiTimeframe', type: 'select', label: 'Délai ROI', options: ['6 mois', '1 an', '18 mois', '2 ans'], required: true },
      { name: 'implementationTime', type: 'select', label: 'Temps mise en œuvre', options: ['2 semaines', '1 mois', '3 mois', '6 mois'], required: true },
      { name: 'supportLevel', type: 'select', label: 'Niveau support', options: ['Standard', 'Premium', '24/7', 'Dédié'], required: true },
      { name: 'pricingTier', type: 'text', label: 'Option tarifaire', placeholder: 'Licence annuelle', required: true },
      { name: 'price', type: 'text', label: 'Prix', placeholder: '50 000€/an', required: true },
      { name: 'paymentTerms', type: 'select', label: 'Modalités paiement', options: ['Annuel', 'Trimestriel', 'Mensuel'], required: true },
      { name: 'guarantees', type: 'text', label: 'Garanties', placeholder: 'Satisfait ou remboursé 30j', required: false },
      { name: 'demoDate', type: 'text', label: 'Date démo', placeholder: 'Semaine prochaine', required: false },
      { name: 'pilotDuration', type: 'select', label: 'Durée pilote', options: ['2 semaines', '1 mois', '3 mois'], required: false },
      { name: 'accountManager', type: 'text', label: 'Account Manager', placeholder: 'Jean Martin', required: false },
      { name: 'sla', type: 'text', label: 'SLA', placeholder: '4h en jour ouvré', required: false },
      { name: 'validityDate', type: 'text', label: 'Validité offre', placeholder: '31/12/2024', required: true },
      { name: 'references', type: 'text', label: 'Références', placeholder: 'Client X, Client Y...', required: false },
      { name: 'certifications', type: 'text', label: 'Certifications', placeholder: 'ISO 27001, SOC2...', required: false }
    ],
    tags: ['Vente', 'Proposition', 'B2B', 'Commercial'],
    quality: 4.8,
    usageCount: 743
  }
];
