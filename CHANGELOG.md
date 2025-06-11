
# Changelog - IA Explorer

Ce fichier documente les changements et améliorations apportés au projet IA Explorer, une ressource éducative sur l'intelligence artificielle.

## [Unreleased]

### Ajouté
- **Pages de cours internes enrichies** avec contenu pédagogique approfondi :
  - IA pour l'Entreprise : Stratégie et Implémentation
  - IA Éthique et Responsable : Guide Pratique
- **Nouveaux composants réutilisables** pour les cours :
  - `ExpandableSection` pour sections dépliables avec animations
  - `InteractiveExample` pour exemples pas-à-pas interactifs
  - `QuickFactBox` pour affichage de métriques et faits rapides
  - `InfoTooltip` pour informations contextuelles
- **Info cards enrichies** sur la page d'accueil avec liens vers tous les cours internes
- **Logo IA Explorer animé** avec animation séquentielle des lettres et effets au survol
- **Menu mobile restructuré** avec navigation hiérarchique par catégories
- **Navigation au clavier complète** avec indicateurs de focus et attributs ARIA
- **Skip link** pour accéder directement au contenu principal
- **Transitions entre pages** pour une expérience utilisateur fluide
- **Section recherche de projets** dans la page À propos pour opportunités professionnelles
- **Respect des préférences** de réduction de mouvement (prefers-reduced-motion)

### Amélioré
- **Correction du lien 404** pour "Coder avec l'IA" depuis la page d'accueil
- **Page d'accueil** avec 12 info cards incluant les 6 cours internes
- **Accessibilité des cours** via les info cards dédiées avec navigation directe
- **Page À propos** enrichie avec informations détaillées sur l'auteur Geoffroy Streit
- **Mission du projet** élargie avec approche pédagogique et éthique renforcée
- **Photo de profil** mise à jour avec image LinkedIn de l'auteur
- **Biographie de l'auteur** précisant son parcours d'ingénieur optronique en reconversion IT
- **Accessibilité générale** avec trap focus, navigation clavier et attributs ARIA
- **Animation du menu mobile** avec effets de cascade et transitions fluides
- **Désactivation des liens GitHub/LinkedIn** tout en conservant les icônes pour l'affichage

### À faire
- **Refactorisation des fichiers longs** :
  - `src/pages/Index.tsx` (actuellement 286 lignes) nécessite une restructuration
  - `src/components/resources/data/coursesData.ts` (actuellement 246 lignes) à découper
- **Pages non accessibles** depuis le menu principal à intégrer :
  - Pages de cours : `/cours/*` (6 pages)
  - Pages spécialisées : `/ia-multimodale`, `/nlp-concepts`, `/llm-details`
  - Outils pratiques : `/calculateur-couts-ia`, `/simulateur-ia`
  - Pages thématiques : `/ethique-gouvernance`, `/ia-marketing-vente`, `/ia-environnement`
  - Pages utilitaires : `/utiliser-ia-quotidien`, `/utiliser-ia-travail`, `/organiser-services-ia`
  - Pages éducatives : `/ia-expliquee-aux-enfants`, `/premier-modele-ml`
  - Outils développement : `/coder-avec-ia`, `/python-ia`, `/gemini-chat`

### Technique
- Correction des erreurs TypeScript liées aux caractères non échappés en JSX
- Optimisation des animations CSS avec gestion des préférences utilisateur
- Amélioration de la structure des composants pour une meilleure maintenabilité
- Refactorisation du code pour respecter les bonnes pratiques d'accessibilité
- Ajout de nouvelles icônes Lucide pour les cours (GraduationCap, Target, Palette)

## [0.6.2] - 2025-04-10

### Ajouté
- Enrichissement complet de la page Cas d'Usage avec une approche modulaire
- Ajout d'une section sur les technologies émergentes d'IA en 2025
- Nouveaux exemples détaillés dans les cas d'usage sectoriels
- Structure plus modulaire pour les composants de la page Cas d'Usage
- Intégration de nouveaux secteurs d'application (Agriculture, Ressources Humaines)

### Amélioré
- Restructuration complète de la page Cas d'Usage pour une meilleure lisibilité
- Optimisation de la navigation entre les différentes sections
- Descriptions plus détaillées des technologies et applications
- Contenu plus riche pour les exemples concrets d'applications d'IA
- Liens contextuels vers les pages associées pour une navigation fluide

## [0.6.1] - 2025-04-09

### Ajouté
- Implémentation complète de la page détaillée sur les LLM et le RLHF avec illustrations
- Enrichissement majeur des exemples de prompts multimodaux avec des cas d'usage pratiques
- Nouvelles illustrations pour les exemples de création multimodale
- Ajout de sections applicatives professionnelles dans la galerie d'exemples
- FAQ complète sur le prompting avec questions/réponses détaillées

### Amélioré
- Optimisation du contenu de la galerie d'exemples multimodaux avec des utilisations réelles
- Amélioration de la navigation entre sections avec meilleure gestion des ancrages
- Refonte visuelle de la section FAQ avec accordéons et mise en valeur des conseils pratiques
- Amélioration de la documentation CHANGELOG et README pour une meilleure structure
- Illustrations optimisées pour améliorer les performances de chargement

### Corrigé
- Correction du lien "Approfondir le sujet" qui pointait vers une page 404
- Résolution des problèmes de navigation par ancrage dans la page IA Multimodale
- Optimisation des animations pour réduire la consommation de ressources
- Amélioration de l'accessibilité des composants interactifs

## [0.6.0] - 2025-04-06

### Ajouté
- Nouvelle page détaillée sur les LLM et les techniques RLHF
- Enrichissement majeur de la page IA Multimodales avec plus d'exemples, illustrations et contenus
- Nouveaux exemples de prompts détaillés pour différents types de médias
- FAQ complète sur l'art du prompting
- Deux nouvelles catégories dans les applications d'IA multimodales: Marketing IA et Avatars digitaux
- Système de notifications toast pour interactions utilisateur

### Amélioré
- Design des cartes d'applications avec ajout d'outils populaires et animations
- Optimisation du composant Hero pour supporter des boutons d'action primaire et secondaire
- Structure du document CHANGELOG pour une meilleure lisibilité et organisation
- Refactorisation et enrichissement de la structure du README
- Mise à jour complète de la documentation des composants

### Corrigé
- Correction du lien "Approfondir le sujet" dans la section LLM qui menait à une page 404
- Optimisation des images dans la section IA Multimodale pour améliorer les performances
- Correction des problèmes d'ancrage vers les sections spécifiques des pages

## [0.5.0] - 2025-04-04

### Amélioré
- Enrichissement complet de la page des niveaux d'IA avec plus de contenu, des cartes informatives, et une navigation améliorée
- Optimisation du composant de réseau neuronal en animation
- Amélioration des visualisations interactives avec des tailles doublées
- Ajout d'un système d'ancres et de navigation interne sur la page des niveaux d'IA
- Amélioration du design global avec des dégradés et des animations
- Optimisation de l'espacement dans les composants Hero et SectionHeading
- Création de liens fonctionnels pour le bouton "Approfondir le sujet" dans la section LLM

### Corrigé
- Correction de la taille des visualisations de réseaux de neurones
- Optimisation du rendu pour améliorer les performances
- Correction des liens d'ancrage dans les pages internes
- Amélioration de la structure HTML pour une meilleure accessibilité

## [0.4.0] - 2025-03-28

### Ajouté
- Création des pages "Mentions légales" et "Politique de confidentialité"
- Animation interactive de réseau neuronal dans la page À propos
- Nouvelles visualisations pour les différents types d'IA

### Amélioré
- Réduction de l'espace sous les composants Hero pour un design plus compact
- Mise à jour des informations de l'auteur dans la page À propos
- Amélioration du responsive design sur toutes les pages

## [0.3.0] - 2025-03-20

### Ajouté
- Nouvelle section sur les types d'IA
- Ajout de contenu détaillé sur les modèles de langage
- Implémentation des visualisations interactives pour le machine learning

### Amélioré
- Design global de l'application
- Performance et temps de chargement
- Navigation mobile

## [0.2.0] - 2025-03-10

### Ajouté
- Section histoire de l'IA avec frise chronologique
- Page des niveaux d'intelligence artificielle
- Glossaire des termes techniques

### Amélioré
- Interface utilisateur avec des composants Shadcn
- Animations et transitions de page

## [0.1.0] - 2025-03-01

### Ajouté
- Structure initiale du projet
- Mise en place du système de navigation
- Page d'accueil avec introduction à l'IA
- Système de thème clair/sombre
