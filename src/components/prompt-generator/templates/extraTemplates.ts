
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const extraCategories: PromptCategory[] = [
  {
    id: 'legal-templates',
    name: 'Juridique & Compliance',
    description: 'Templates pour les documents légaux et conformité',
    icon: 'Scale'
  },
  {
    id: 'scientific-research',
    name: 'Recherche Scientifique',
    description: 'Templates pour la recherche et publications scientifiques',
    icon: 'Microscope'
  }
];

export const extraTemplates: PromptTemplate[] = [
  // Templates Juridique
  {
    id: 'contract-analyzer',
    name: 'Analyseur de Contrats',
    category: 'legal-templates',
    domain: 'Juridique',
    description: 'Analyse et résume les clauses importantes d\'un contrat',
    template: `Tu es un avocat spécialisé en droit des contrats. Analyse ce contrat et identifie les points clés : "{contract_content}".

**ANALYSE STRUCTURÉE :**
- Type de contrat : {contract_type}
- Parties impliquées
- Obligations principales de chaque partie
- Clauses restrictives ou pénalisantes
- Conditions de résiliation
- Risques identifiés`,
    variables: [
      { name: 'contract_content', type: 'textarea', label: 'Contenu du contrat', placeholder: 'Coller le texte du contrat...', required: true },
      { name: 'contract_type', type: 'select', label: 'Type de contrat', options: ['Commercial', 'Travail', 'Service', 'Licence', 'Partenariat'], required: true }
    ],
    tags: ['Juridique', 'Contrat', 'Analyse', 'Droit'],
    quality: 4.7,
    usageCount: 856
  },
  {
    id: 'gdpr-compliance-checker',
    name: 'Vérificateur Conformité RGPD',
    category: 'legal-templates',
    domain: 'Compliance',
    description: 'Vérifie la conformité RGPD d\'un processus ou document',
    template: `Tu es un expert en protection des données et conformité RGPD. Évalue la conformité de : "{process_description}".

**VÉRIFICATION RGPD :**
- Base légale du traitement : {legal_basis}
- Données collectées : {data_collected}
- Finalités du traitement
- Durée de conservation
- Droits des personnes concernées
- Mesures de sécurité
- Recommandations de mise en conformité`,
    variables: [
      { name: 'process_description', type: 'textarea', label: 'Description du processus', placeholder: 'Collecte de données clients, newsletter...', required: true },
      { name: 'legal_basis', type: 'select', label: 'Base légale', options: ['Consentement', 'Contrat', 'Intérêt légitime', 'Obligation légale'], required: true },
      { name: 'data_collected', type: 'textarea', label: 'Données collectées', placeholder: 'Email, nom, téléphone...', required: true }
    ],
    tags: ['RGPD', 'Compliance', 'Protection des données', 'Juridique'],
    quality: 4.8,
    usageCount: 1243
  },

  // Templates Recherche Scientifique
  {
    id: 'research-paper-structure',
    name: 'Structure d\'Article Scientifique',
    category: 'scientific-research',
    domain: 'Recherche',
    description: 'Génère la structure complète d\'un article de recherche',
    template: `Tu es un chercheur expérimenté. Crée la structure d'un article scientifique sur : "{research_topic}".

**PARAMÈTRES DE LA RECHERCHE :**
- Domaine : {research_domain}
- Type d'étude : {study_type}
- Méthodologie : {methodology}
- Journal cible : {target_journal}

**STRUCTURE PROPOSÉE :**
1. **Titre et Résumé**
2. **Introduction et État de l'art**
3. **Méthodologie**
4. **Résultats**
5. **Discussion**
6. **Conclusion et Perspectives**
7. **Références**

Développe chaque section avec les sous-parties appropriées et les éléments clés à inclure.`,
    variables: [
      { name: 'research_topic', type: 'text', label: 'Sujet de recherche', placeholder: 'Intelligence artificielle en médecine...', required: true },
      { name: 'research_domain', type: 'select', label: 'Domaine de recherche', options: ['Informatique', 'Médecine', 'Biologie', 'Physique', 'Chimie', 'Psychologie', 'Économie'], required: true },
      { name: 'study_type', type: 'select', label: 'Type d\'étude', options: ['Expérimentale', 'Observationnelle', 'Revue systématique', 'Méta-analyse', 'Cas d\'étude'], required: true },
      { name: 'methodology', type: 'select', label: 'Méthodologie', options: ['Quantitative', 'Qualitative', 'Mixte'], required: true },
      { name: 'target_journal', type: 'text', label: 'Journal cible', placeholder: 'Nature, Science, IEEE...', required: false }
    ],
    tags: ['Recherche', 'Article', 'Scientifique', 'Publication'],
    quality: 4.9,
    usageCount: 678
  },
  {
    id: 'literature-review-generator',
    name: 'Générateur de Revue Littéraire',
    category: 'scientific-research',
    domain: 'Recherche',
    description: 'Crée une revue de littérature structurée sur un sujet',
    template: `Tu es un chercheur spécialisé en {research_field}. Rédige une revue de littérature sur : "{literature_topic}".

**PARAMÈTRES DE LA REVUE :**
- Domaine : {research_field}
- Période couverte : {time_period}
- Nombre d'articles : {article_count}
- Type de revue : {review_type}

**MÉTHODOLOGIE :**
- Bases de données consultées
- Critères d'inclusion/exclusion
- Stratégie de recherche
- Processus de sélection

**ANALYSE :**
- Tendances identifiées
- Lacunes dans la recherche
- Controverses et débats
- Évolution temporelle
- Recommandations pour futures recherches`,
    variables: [
      { name: 'literature_topic', type: 'text', label: 'Sujet de la revue', placeholder: 'Apprentissage automatique en santé...', required: true },
      { name: 'research_field', type: 'select', label: 'Domaine de recherche', options: ['IA/ML', 'Médecine', 'Biologie', 'Psychologie', 'Éducation', 'Environnement'], required: true },
      { name: 'time_period', type: 'select', label: 'Période couverte', options: ['5 dernières années', '10 dernières années', '15 dernières années', 'Depuis 2000'], required: true },
      { name: 'article_count', type: 'select', label: 'Nombre d\'articles', options: ['20-50', '50-100', '100-200', '200+'], required: true },
      { name: 'review_type', type: 'select', label: 'Type de revue', options: ['Narrative', 'Systématique', 'Scoping', 'Méta-analyse'], required: true }
    ],
    tags: ['Littérature', 'Revue', 'Recherche', 'Analyse'],
    quality: 4.8,
    usageCount: 432
  },

  // Templates supplémentaires pour atteindre 150+
  {
    id: 'email-marketing-campaign',
    name: 'Campagne Email Marketing',
    category: 'marketing-digital',
    domain: 'Marketing',
    description: 'Crée une campagne email complète avec séquences',
    template: `Crée une campagne email marketing pour : "{product_service}".

**STRATÉGIE :**
- Objectif : {campaign_objective}
- Audience : {target_audience}
- Séquence : {email_sequence}
- Timing : {send_schedule}

**EMAILS DE LA SÉQUENCE :**
1. Email de bienvenue
2. Email de valeur/éducatif
3. Email de preuve sociale
4. Email d'urgence/scarcité
5. Email de rappel final

Pour chaque email : objet, contenu, CTA, timing`,
    variables: [
      { name: 'product_service', type: 'text', label: 'Produit/Service', placeholder: 'Cours en ligne, logiciel SaaS...', required: true },
      { name: 'campaign_objective', type: 'select', label: 'Objectif', options: ['Vente', 'Inscription', 'Engagement', 'Rétention'], required: true },
      { name: 'target_audience', type: 'text', label: 'Audience cible', placeholder: 'Entrepreneurs, marketeurs...', required: true },
      { name: 'email_sequence', type: 'select', label: 'Type de séquence', options: ['5 emails/5 jours', '7 emails/semaine', 'Séquence longue'], required: true },
      { name: 'send_schedule', type: 'select', label: 'Planning envoi', options: ['Quotidien', 'Tous les 2 jours', 'Hebdomadaire'], required: true }
    ],
    tags: ['Email', 'Marketing', 'Campagne', 'Automatisation'],
    quality: 4.6,
    usageCount: 1892
  },
  {
    id: 'seo-content-optimizer',
    name: 'Optimiseur de Contenu SEO',
    category: 'marketing-digital',
    domain: 'SEO',
    description: 'Optimise le contenu pour le référencement naturel',
    template: `Optimise ce contenu pour le SEO : "{content_topic}".

**PARAMÈTRES SEO :**
- Mot-clé principal : {main_keyword}
- Mots-clés secondaires : {secondary_keywords}
- Intention de recherche : {search_intent}
- Longueur cible : {content_length}

**OPTIMISATIONS :**
- Structure H1-H6
- Méta-descriptions
- Maillage interne
- Optimisation images
- Featured snippets
- FAQ schema markup`,
    variables: [
      { name: 'content_topic', type: 'text', label: 'Sujet du contenu', placeholder: 'Guide du marketing digital...', required: true },
      { name: 'main_keyword', type: 'text', label: 'Mot-clé principal', placeholder: 'marketing digital', required: true },
      { name: 'secondary_keywords', type: 'text', label: 'Mots-clés secondaires', placeholder: 'stratégie digitale, SEO...', required: true },
      { name: 'search_intent', type: 'select', label: 'Intention recherche', options: ['Informationnelle', 'Transactionnelle', 'Navigationnelle', 'Commerciale'], required: true },
      { name: 'content_length', type: 'select', label: 'Longueur cible', options: ['800-1200 mots', '1200-2000 mots', '2000+ mots'], required: true }
    ],
    tags: ['SEO', 'Contenu', 'Référencement', 'Optimisation'],
    quality: 4.7,
    usageCount: 2341
  }
];
